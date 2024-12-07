import database from '../database/dbconfig.js';
// import slug from 'slug';




const getAll = async (idBranch, idMovie) => {
    try {

        const result = await database.query(`SELECT * FROM ShowtimeManagement  WHERE idbranch = ${idBranch} and idmovie = ${idMovie}`);
        if (result.rows.length === 0) {
            return null;
        }
        return result.rows;
    } catch (error) {
        console.error('Error while querying movie:', error);
        throw error;
    }
};


export {
    getAll,
}