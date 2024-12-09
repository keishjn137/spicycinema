import express from 'express';
import * as bill from '../controllers/bill.js';

const billRoutes = express.Router();

billRoutes.get('/', bill.getAll);
billRoutes.get('/account/:id', bill.getBaseOnAccount);
billRoutes.post('/showtime', bill.getListSeatByShowTime);
billRoutes.post('/', bill.Create);
export default billRoutes;
