import * as movie from '../services/movie.js';

const getAll = async (req, res, next) => {
    try {
        const movies = await movie.getAll();
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

const Create = async (req, res, next) => {
    try {
        let { Name, Genre, Duration, Price, Directors, Actors, url_image_title = null, url_image_banner = null } = req.body;
        console.log(Name)
        const movies = await movie.Create(Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner);
        if (!movies) {
            return res.status(404).json({ message: 'Phim không tồn tại!' });
        }
        return res.status(200).json(movies);
    } catch (error) {
        next(error);
    }
};


const Update = async (req, res, next) => {
    try {
        let ID = req.params.id;
        let { Name, Genre, Duration, Price, Directors, Actors, url_image_title = null, url_image_banner = null } = req.body;
        const movies = await movie.Update(ID, Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner);
        if (!movies) {
            return res.status(404).json({ message: 'Update không thành công!' });
        }
        return res.status(200).json(movies);
    } catch (error) {
        next(error);
    }
};

export {
    getAll,
    getById,
    Create,
    Update,
};