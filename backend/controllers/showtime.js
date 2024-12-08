import * as showtime from '../services/showtime.js';



const getAll = async (req, res, next) => {
    try {
        const idBranch = req.body.idBranch;
        const idMovie = req.body.idMovie;
        console.log(idBranch, idMovie)
        const showtimes = await showtime.getAll(idBranch, idMovie);
        if (!showtimes) {
            return res.status(404).json({ message: 'xuất chiếu không tồn tại!' });
        }
        return res.status(200).json(showtimes);
    } catch (error) {
        next(error);
    }
};
// Load danh sách giờ chiếu phim theo chi nhánh , bộ phim , dưới 15 phút trước khi phim chiếu
const getAllTimeNow = async (req, res, next) => {
    let {idBranch , idMovie} = req.body
    try {
        const showtimes = await showtime.getAllTimeNow(idBranch , idMovie);
        console.log(showtimes)
        res.json(showtimes);
    } catch (error) {
        next(error);
    }
};

export {
    getAll,
    getAllTimeNow
};