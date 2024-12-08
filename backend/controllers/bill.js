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

const getListSeatByShowTime = async (req, res, next) => {
    let {nameMovie , nameBranch , showtime} = req.body
    try {
        const bills = await bill.GetSeatsBookingByShowTime(nameMovie , nameBranch , showtime);
        res.json(bills);
    } catch (error) {
        next(error);
    }
};

const Create = async (req, res, next) => {
    let {idAccount , nameMovie , nameBranch , showtime , seat} = req.body
    console.log(req.body)
    try {
        const bills = await bill.Create(idAccount , nameMovie , nameBranch , showtime , seat);
        res.json(bills);
    } catch (error) {
        next(error);
    }
};

export {
    getAll,
    getBaseOnAccount,
    getListSeatByShowTime,
    Create
};