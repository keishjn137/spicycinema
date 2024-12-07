import database from '../database/dbconfig.js';
// import slug from 'slug';


const getAll = (async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM MOVIE');
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh sách phim !' };
    }

});  // xong

export {
    getAll
}