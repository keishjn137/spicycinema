import express from 'express';
import * as movie from '../controllers/movie.js';

const movieRoutes = express.Router();

movieRoutes.get('/', movie.getAll);
movieRoutes.get('/:id', movie.getById);
movieRoutes.post('/', movie.Create);
movieRoutes.put('/:id', movie.Update);
export default movieRoutes;
