import express from 'express';
import * as showtime from '../controllers/showtime.js';

const showtimeRoutes = express.Router();

showtimeRoutes.post('/', showtime.getAll);
showtimeRoutes.post('/movie', showtime.getAllTimeNow);

export default showtimeRoutes;
