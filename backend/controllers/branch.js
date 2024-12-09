import * as branch from '../services/branch.js';

const GetAll = async (req, res, next) => {
    try {
        const branches = await branch.GetAll();
        
        res.json(branches);
    } catch (error) {
        next(error);
    }
};

const Update = async (req, res, next) => {
    try {
        const branches = await branch.Update(req);
        
        res.json(branches);
    } catch (error) {
        next(error);
    }
};

const Create = async (req, res, next) => {
    try {
        const branches = await branch.Create(req);
        
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