import express from 'express';
import * as branch from '../controllers/branch.js';

const branchRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
branchRoutes.get('/', branch.getAll);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default branchRoutes;
