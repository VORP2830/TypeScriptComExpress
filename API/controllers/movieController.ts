import { Request, Response } from "express";

import { movieModel } from '../models/movie'

import logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try{
        const movie = await movieModel.create(req.body)
        res.status(201).json(movie)
    } catch (e: any) {
        logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const movie = await movieModel.findById(req.params.id);
        if(!movie){
            res.status(404).json({ error: 'O filme não existe'})
        }
        res.status(200).json(movie)
    } catch (e: any) {
        logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await movieModel.find()
        res.status(200).json(movies)
    } catch (e: any) {
        logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const movie = await movieModel.findById(req.params.id)
        if(!movie) {
            res.status(404).json('O filme não existe')
        }
        await movie.delete()
        res.status(200).json({ msg: 'Filme deletado com sucesso'})

    } catch (e: any) {
        logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const movie = await movieModel.findById(req.params.id)
        if(!movie) {
            res.status(404).json('O filme não existe')
        }
        await movieModel.updateOne({_id : req.params.id}, req.body)
        res.status(201).json(req.body)

    } catch (e: any) {
        logger.error(`Erro no sistema: ${e.message}`)
    }
}