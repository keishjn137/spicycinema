import express from 'express';
import * as branch from '../controllers/branch.js';

const branchRoutes = express.Router();

branchRoutes.get('/', branch.GetAll);
branchRoutes.post('/', branch.Create);
branchRoutes.put('/', branch.Update);


export default branchRoutes;
