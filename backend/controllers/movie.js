import * as movie from '../services/movie.js';

const getAll = async (req, res, next) => {
    try {
        const movies = await movie.getAll();
        console.log(movies)
        res.json(movies);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movies = await movie.getById(id);
        if (!movies) {
            return res.status(404).json({ message: 'Phim không tồn tại!' });
        }
        return res.status(200).json(movies);
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
    getById
    // ,
    // getProductBySlugURL,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    // getListProductByCategory
};