import express from 'express';
import * as bill from '../controllers/bill.js';

const billRoutes = express.Router();

billRoutes.get('/', bill.getAll);
billRoutes.get('/account/:id', bill.getBaseOnAccount);

export default billRoutes;
