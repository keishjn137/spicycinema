import * as account from '../services/account.js';

const GetAll = async (req, res, next) => {
    try {
        const accounts = await account.GetAll();
        res.json(accounts);
    } catch (error) {
        next(error);
    }
};

const SignUp = async (req, res, next) => {
    try {
        const newAccount = await account.Create(req);
        res.json(newAccount);
    } catch (error) {
        next(error);
    }
};

const UpdateByAdmin = async (req, res, next) => {
    try {
        const dataAccount = await account.UpdateByAdmin(req);
        res.json(dataAccount);
    } catch (error) {
        next(error);
    }
};

const UpdateByUser = async (req, res, next) => {
    try {
        const dataAccount = await account.UpdateByUser(req);
        res.json(dataAccount);
    } catch (error) {
        next(error);
    }
};


export {
    GetAll,
    SignUp,
    UpdateByAdmin,
    UpdateByUser
};