import database from '../database/dbconfig.js';
// import slug from 'slug';


const getAll = async (idShowtime) => {
    try {

        const result = await database.query(`SELECT * FROM seats  WHERE idshowtimemanagement = ${idShowtime}`);
        if (result.rows.length === 0) {
            return null;
        }
        return result.rows;
    } catch (error) {
        console.error('Error while querying movie:', error);
        throw error;
    }
};

const createSeats = async (idShowtime) => {
    const seatRows = 'ABCDEFGHIJ';

    try {
        const seatRows = 'ABCDEFGHIJ';
        for (let i = 1; i <= 12; i++) {
            for (let j = 0; j < 10; j++) {
                const seat = `${seatRows[j]}${i}`;
                const row = seatRows[j];
                const seatColumn = i;

                const seatQuery = `
                    INSERT INTO Seats (idshowtimemanagement, seat, row, seatcolumn)
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT DO NOTHING; -- Để tránh trùng lặp
                `;

                await database.query(seatQuery, [idShowtime, seat, row, seatColumn]);
            }
        }

        console.log('Tạo ghế thành công');
    } catch (error) {
        console.error('Lỗi khi tạo ghế:', error);
        throw error;
    }

};

export {
    getAll,
    createSeats
}