import * as seat from '../services/seat.js';



const getAll = async (req, res, next) => {
    try {
        const idShowtime = req.params.idShowtime;
        const seats = await seat.getAll(idShowtime);
        if (!seats) {
            return res.status(404).json({ message: 'ghế không tồn tại!' });
        }
        return res.status(200).json(seats);
    } catch (error) {
        next(error);
    }
};

const addSeat = async (req, res, next) => {
    try {
        const idShowtime = req.params.idShowtime;
        const seats = await seat.createSeats(idShowtime);
        return res.status(200).json(seats);
    } catch (error) {
        next(error);
    }
};

//  const getProductBySlugURL = async (req, res, next) => {
//     try {
//         const product = await account.getProductBySlugURL(req);
//         res.json(product);   
//     } catch (error) {
//         next(error);
//     }
// };

// const getListProductByCategory = async (req, res, next) => {
//     try {
//         const product = await account.getListProductByCategory(req);
//         res.json(product);   
//     } catch (error) {
//         next(error);
//     }
// };

//  const createProduct = async (req, res, next) => {
//     try {
//         const product = await account.createProduct(req);
//         res.status(201).json(product);
//     } catch (error) {
//         next(error);
//     }
// };

//  const updateProduct = async (req, res, next) => {
//     try {
//         const product = await account.updateProduct(req);
//         res.json(product);
//     } catch (error) {
//         next(error);
//     }
// };

//  const deleteProduct = async (req, res, next) => {
//     try {
//         const product = await account.deleteProduct(req);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         next(error);
//     }
// };

export {
    getAll,
    addSeat
    // ,
    // getProductBySlugURL,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    // getListProductByCategory
};