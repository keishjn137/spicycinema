import database from '../database/dbconfig.js';


const GetAll = (async () => {
    try { 
        const result = await database.query('SELECT * FROM branchcompany');
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh sách chi nhánh !' };
    }

});

const CheckDuplicate = (async (name , address)=> {
    const check = await database.query(`
        SELECT * FROM BranchCompany WHERE name = '${name}' OR address = '${address}'`)
    if(check.rows.length == 1){
        return true
    }    
    else{
        return false
    }
})

const Update = (async (req) => {
    let { id = null , name = null , address = null } = req.body; 
    if(await CheckDuplicate(name, address)) {
        return { message: 'Thông tin chi nhánh không được trùng !' };
    }
    try {
        const result = await database.query(`
            UPDATE BranchCompany
            SET name = COALESCE('${name}', name) 
            ,   address = COALESCE('${address}',address) 
            WHERE id = ${id}   
            RETURNING *`
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin chi nhánh !' };
    }
});

const Create = (async (req) => {
    let {  name = null , address = null } = req.body; 
    
    if(await CheckDuplicate(name, address))
    {
        return { message: 'Thông tin chi nhánh cần tạo đã có trong hệ thống !' };
    }
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
    GetAll,
    Update,
    Create
}