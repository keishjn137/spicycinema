import express from 'express';
import * as bill from '../controllers/bill.js';

const billRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
billRoutes.get('/', bill.getAll);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default billRoutes;
