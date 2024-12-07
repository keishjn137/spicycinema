import express from 'express';
import * as movie from '../controllers/movie.js';

const movieRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
movieRoutes.get('/', movie.getAll);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default movieRoutes;
