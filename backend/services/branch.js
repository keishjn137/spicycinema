import database from '../database/dbconfig.js';


const getAll = (async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM branchcompany');
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh sách chi nhánh !' };
    }

});



export {
    getAll,
}