import express from 'express';
import * as account from '../controllers/account.js';

const accountRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
accountRoutes.get('/', account.getAll);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default accountRoutes;
