import database from '../database/dbconfig.js';
// import slug from 'slug';


const getAll = (async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM BILL');

        const formattedData = result.rows.map((item) => ({
            ...item,
            invoicingtime: new Date(item.invoicingtime).toISOString().replace('T', ' ').split('.')[0],
          }));
        
        return formattedData;

    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh hoá đơn !' };
    }

});  // xong

export {
    getAll
}