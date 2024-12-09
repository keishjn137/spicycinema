import * as showtime from '../services/showtime.js';



const getAll = async (req, res, next) => {
    try {
        const idBranch = req.body.idBranch;
        const idMovie = req.body.idMovie;
        
        const showtimes = await showtime.getAll(idBranch, idMovie);
        if (!showtimes) {
            return res.status(404).json({ message: 'xuất chiếu không tồn tại!' });
        }
        return res.status(200).json(showtimes);
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
    // ,
    // getProductBySlugURL,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    // getListProductByCategory
};