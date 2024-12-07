import express from 'express';
import * as showtime from '../controllers/showtime.js';

const showtimeRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
showtimeRoutes.post('/', showtime.getAll);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default showtimeRoutes;
