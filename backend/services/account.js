import database from '../database/dbconfig.js';


const GetAll = (async () => {
    try {
        const result = await database.query('SELECT * FROM ACCOUNT');
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh sách tài khoản !' };
    }

});


const CheckExistGmail = (async (gmail) => {
    const check = await database.query(`SELECT * FROM ACCOUNT WHERE gmail = '${gmail}'`)
    if (check.rows.length == 1) {
        return true
    }
    else {
        return false
    }
})
const CheckExistAccount = (async (username) => {
    const check = await database.query(`SELECT * FROM ACCOUNT WHERE username = '${username}'`)
    if (check.rows.length == 1) {
        return true
    }
    else {
        return false
    }
})


const SignIn = (async (username, password) => {
    try {
        const result = await database.query(`SELECT * FROM ACCOUNT WHERE username = '${username}' AND password = '${password}'`);
        if (result.rows.length == 1) {
            return {
                statusCode: 200,
                data: result.rows
            };
        } else {
            return {
                statusCode: 404,
                message: 'Tên tài khoản hoặc mật khẩu không đúng !'
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            message: 'Lỗi lấy danh sách tài khoản !'
        };
    }
});


const Create = (async (req) => {
    let { username, password, gmail } = req.body;

    if (await CheckExistGmail(gmail)) {
        return { message: 'Gmail này đã được dùng để đăng ký ! Vui lòng chọn gmail khác !' };
    }
    if (await CheckExistAccount(username)) {
        return { message: 'Tài khoản đã tồn tại ! Vui lòng đổi username khác !' };
    }
    const result = await database.query(
        `INSERT INTO ACCOUNT (username , password, gmail) 
        VALUES ('${username}' ,'${password}' , '${gmail}' )`);

    return { message: 'Tạo tài khoản thành công' };
});


const UpdateByAdmin = (async (req) => {
    let { username, password = null, gmail = null, role = null } = req.body;

    if (await CheckExistGmail(gmail)) {
        return { message: 'Gmail này đã được dùng để đăng ký ! Vui lòng chọn gmail khác !' };
    }
    try {
        const result = await database.query(`
            UPDATE ACCOUNT
            SET password = COALESCE('${password}', password) 
            ,   gmail = COALESCE('${gmail}',gmail) 
            ,   role = COALESCE('${role}',role)  
                WHERE username = '${username}'   
                RETURNING *`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin tài khoản !' };
    }
});


const UpdateByUser = (async (req) => {
    let { username, password = null, gmail = null } = req.body;
    try {
        const result = await database.query(`
            UPDATE ACCOUNT
            SET password = COALESCE('${password}', password) 
            ,   gmail = COALESCE('${gmail}',gmail)  
                WHERE username = '${username}' 
                RETURNING *`
        );

        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin tài khoản !' };
    }
});


export {
    GetAll,
    Create,
    UpdateByAdmin,
    UpdateByUser,
    SignIn
};
