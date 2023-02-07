import {Router, Request, Response} from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from './controllers/movieController';
import { validate } from './middleware/handleValidation'
import { movieCreateValidation } from './middleware/movieValidation';

const router = Router();

export default router
    .get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1 style="text-align: center;">Bem vindo à API</h1>')
    })
    .post('/movie', movieCreateValidation(), validate, createMovie)
    .get('/movie/:id', findMovieById)
    .get('/movie', getAllMovies)
    .delete('/movie/:id', removeMovie)
    .put('/movie/:id', movieCreateValidation(), validate, updateMovie)