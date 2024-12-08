import * as branch from '../services/branch.js';

const GetAll = async (req, res, next) => {
    try {
        const branches = await branch.GetAll();
        console.log(branches)
        res.json(branches);
    } catch (error) {
        next(error);
    }
};

const Update = async (req, res, next) => {
    try {
        const branches = await branch.Update(req);
        console.log(branches)
        res.json(branches);
    } catch (error) {
        next(error);
    }
};

const Create = async (req, res, next) => {
    try {
        const branches = await branch.Create(req);
        console.log(branches)
        res.json(branches);
    } catch (error) {
        next(error);
    }
};

export {
    GetAll,
    Update,
    Create
};