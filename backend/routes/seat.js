import express from 'express';
import * as seat from '../controllers/seat.js';

const seatRoutes = express.Router();

seatRoutes.get('/:idShowtime', seat.getAll);
seatRoutes.get('/create-seat/:idShowtime', seat.addSeat);

export default seatRoutes;
