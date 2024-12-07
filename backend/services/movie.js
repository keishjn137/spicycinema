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

});

const getById = async (id) => {
    try {

        const result = await database.query(`SELECT * FROM MOVIE WHERE id = ${id}`);
        if (result.rows.length === 0) {
            return null;
        }
        return result.rows[0];
    } catch (error) {
        console.error('Error while querying movie:', error);
        throw error;
    }
};


export {
    getAll,
    getById
}