import database from '../database/dbconfig.js';
import FormattedDateTime from '../utils/ConvertFormatTime.js'



const queryBillDetail =
    `SELECT 
            movie.Name AS MovieName,
            acc.Gmail AS Gmail,
            acc.Username AS Username,
            showtime.Showtime AS Showtime,
            branch.Name AS BranchName,
            movie.Price AS Price,
            bill.Seat AS Seat,
            bill.Invoicingtime 
        FROM 
            Bill bill
        JOIN 
            Account acc ON bill.IDAccount = acc.ID
        JOIN 
            ShowtimeManagement showtime ON bill.IDShowtimeManagement = showtime.ID
        JOIN 
            BranchCompany branch ON showtime.IDBranch = branch.ID
        JOIN 
            Movie movie ON showtime.IDMovie = movie.ID`

const FormattedData = (async (listData) => {
    const formattedData = listData.rows.map((item) => ({
        ...item,
        showtime: FormattedDateTime(item.showtime),
        invoicingtime: FormattedDateTime(item.invoicingtime),
    }));
    return formattedData
})

const getAll = (async () => {
    try {
        const result = await database.query(queryBillDetail);
        return FormattedData(result);

    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh hoá đơn !' };
    }

});

const getBaseOnAccount = (async (idAccount) => {
    let queryBillDetailByAccount = queryBillDetail + ` WHERE bill.IDAccount = ${idAccount}`
    try {
        const result = await database.query(queryBillDetailByAccount);
        return FormattedData(result);

    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh hoá đơn !' };
    }

});


// cái này đem qua movies
const GetSeatsBookingByShowTime = (async (nameMovie, nameBranch, showtime) => {
    try {
        const result = await database.query(`
        SELECT 
            bill.Seat
        FROM 
            Bill bill
        JOIN 
            ShowtimeManagement showtime ON bill.IDShowtimeManagement = showtime.ID
        WHERE bill.IDShowtimeManagement 
        IN
        (
            SELECT ID FROM ShowtimeManagement 
            WHERE IDBranch = (SELECT ID FROM BranchCompany WHERE Name = '${nameBranch}')
            AND IDMovie = (SELECT ID FROM Movie WHERE Name = '${nameMovie}')
        )
        AND showtime.showtime = TIMESTAMP '${showtime}'
        
        `);
        // 2024-12-07 19:00:00 là format dữ liệu cần truyền vào showtime
        return result.rows;

    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh ghế đã được đặt !' };
    }
})

const CheckDuplicateSeatInBill = (async (nameMovie, nameBranch, showtime, seat) => {
    const check = await database.query(`
        SELECT 
            bill.Seat
        FROM 
            Bill bill
        JOIN 
            ShowtimeManagement showtime ON bill.IDShowtimeManagement = showtime.ID
        WHERE bill.IDShowtimeManagement IN
        (
            SELECT ID FROM ShowtimeManagement 
            WHERE IDBranch = (SELECT ID FROM BranchCompany WHERE Name = '${nameBranch}')
            AND IDMovie = (SELECT ID FROM Movie WHERE Name = '${nameMovie}')
        )
        AND showtime.showtime = TIMESTAMP '${showtime}'
        AND bill.Seat = '${seat}'
        `)
    if (check.rows.length == 1) {
        return true
    }
    else {
        return false
    }
})

const Update = (async (req) => {
    let { username } = req.body;
    try {
        const result = await database.query(`
            UPDATE BILL
            SET showtime = ${showtime}') 
            WHERE username = '${username}'`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin tài khoản !' };
    }
});



const Create = (async (idAccount, nameMovie, nameBranch, showtime, seat) => {
    if (await CheckDuplicateSeatInBill(nameMovie, nameBranch, showtime, seat)) {
        return { message: 'Thanh toán không thành công do đã có khách hàng khác đặt vé thuộc ghế đó rồi !' };
    }
    try {
        const result = await database.query(`
            INSERT INTO BILL (IDAccount , IDShowtimeManagement , Seat , Total) 
            VALUES ( ${idAccount}, 
            (
            SELECT ID FROM ShowtimeManagement
            WHERE IDBranch = (SELECT ID FROM BranchCompany WHERE Name = '${nameBranch}')
            AND IDMovie = (SELECT ID FROM Movie WHERE Name = '${nameMovie}')
            AND showtime = TIMESTAMP '${showtime}'
            ) , 
            '${seat}',
            (SELECT PRICE FROM MOVIE WHERE Name  = '${nameMovie}')
            )`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin tài khoản !' };
    }
});

export {
    getAll,
    getBaseOnAccount,
    Update,
    Create,
    GetSeatsBookingByShowTime
}