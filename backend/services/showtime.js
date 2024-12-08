import database from '../database/dbconfig.js';
import FormattedDateTime from '../utils/ConvertFormatTime.js'



const FormattedData = (async (listData) => {
    const formattedData = listData.rows.map((item) => ({
        ...item,
        showtime:FormattedDateTime(item.showtime)
      }));
      return formattedData
})


const getAll = async (idBranch, idMovie) => {
    try {
        const result = await database.query(`
            SELECT * FROM ShowtimeManagement 
            WHERE idbranch = ${idBranch} and idmovie = ${idMovie}`);
        if (result.rows.length === 0) {
            return null;
        }
        return FormattedData(result)
    } catch (error) {
        console.error('Error while querying movie:', error);
        throw error;
    }
};


const getAllTimeNow = async (idBranch, idMovie) => {
    try {
        const result = await database.query(`
            SELECT * FROM ShowtimeManagement 
            WHERE idbranch = ${idBranch} and idmovie = ${idMovie}
            AND (NOW() + INTERVAL '15 MINUTE') < showtime`);
        if (result.rows.length === 0) {
            return null;
        }
        return FormattedData(result)
    } catch (error) {
        console.error('Error while querying movie:', error);
        throw error;
    }
};

const Create = (async (req) => {
    let {  name = null , address = null } = req.body; 
    
    try {
        const result = await database.query(`
            INSERT INTO BranchCompany (name , address)
            VALUES ( '${name}' , '${address}')  
            RETURNING *`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin chi nhánh !' };
    }
});

const Update = (async (req) => {
    let {  name = null , address = null } = req.body; 
    
    try {
        const result = await database.query(`
            INSERT INTO BranchCompany (name , address)
            VALUES ( '${name}' , '${address}')  
            RETURNING *`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin chi nhánh !' };
    }
});


export {
    getAll,
    getAllTimeNow
}