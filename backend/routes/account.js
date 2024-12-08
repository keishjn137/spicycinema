import express from 'express';
import * as account from '../controllers/account.js';

const accountRoutes = express.Router();

accountRoutes.get('/', account.GetAll);
accountRoutes.post('/sign-up', account.SignUp);
accountRoutes.put('/update-by-admin', account.UpdateByAdmin);
accountRoutes.put('/update-by-user', account.UpdateByUser);
accountRoutes.post('/sign-in', account.SignIn);
export default accountRoutes;
