import express from 'express';
import * as seat from '../controllers/seat.js';

const seatRoutes = express.Router();


// productRoutes.get('/:slug_url', productController.getProductBySlugURL);
seatRoutes.get('/:idShowtime', seat.getAll);
seatRoutes.get('/create-seat/:idShowtime', seat.addSeat);
// productRoutes.post('/', productController.createProduct);
// productRoutes.put('/', productController.updateProduct);
// productRoutes.delete('/:id', productController.deleteProduct);
// productRoutes.get('/category/:category', productController.getListProductByCategory);

export default seatRoutes;
