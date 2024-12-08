import * as bill from '../services/bill.js';

 const getAll = async (req, res, next) => {
    try {
        const bills = await bill.getAll();
        res.json(bills);
    } catch (error) {
        next(error);
    }
};

const getBaseOnAccount = async (req, res, next) => {
    let id = req.params.id;
    try {
        const bills = await bill.getBaseOnAccount(id);
        res.json(bills);
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
    getBaseOnAccount
};