import database from '../database/dbconfig.js';
// import slug from 'slug';


const getAll = (async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM ACCOUNT');
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi lấy danh sách tài khoản !' };
    }

});

const create = (async (req, res) => {
    let { username, password, gmail } = req.body;

    const checkExistAccount = await database.query(`SELECT * FROM ACCOUNT WHERE username = '${username}'`)
    const checkExistGmail = await database.query(`SELECT * FROM ACCOUNT WHERE gmail = '${gmail}'`)
    if (checkExistGmail.rows.length == 1) {
        return { message: 'Gmail này đã được dùng để đăng ký ! Vui lòng chọn gmail khác !' };
    }
    if (checkExistAccount.rows.length == 0) {
        const result = await database.query(
            `INSERT INTO ACCOUNT (username , password, gmail) 
            VALUES ('${username}' ,'${password}' , '${gmail}' )`);

        return { message: 'Tạo tài khoản thành công' };
    }
    else {
        return { message: 'Tài khoản đã tồn tại ! Vui lòng đổi username khác !' };
    }
});  // xong
// xong

// // Lấy sản phẩm theo url
// const getProductBySlugURL = (async (req, res) => {
//     let  slug_url  = req.params.slug_url;
//     const result = await database.query(
//         `SELECT * FROM products WHERE slug_url = '${slug_url}' LIMIT 1`);
//     if (result.rows.length === 0) {
//         return { message: 'Không tìm thấy sản phẩm này !' };
//     } else {
//         return result.rows[0];
//     }
// }); // xong

// // Lấy sản phẩm theo Danh mục
// const getListProductByCategory = (async (req, res) => {
//     let  category  = req.params.category;
//     if (!req.params || !category) {
//         return { message: 'Category parameter is missing' };
//     }  
//     const result = await database.query(
//         `SELECT * FROM products WHERE category = '${category}'`);
//     if (result.rows.length === 0) {
//         return { message: 'Không tìm thấy sản phẩm thuộc danh mục này' };
//     } else {
//         return result.rows;
//     }
// }); // xong

// // Tạo sản phẩm mới
// const createProduct = (async (req, res) => {
//     let { name , brandname , price , category , quantity } = req.body;
//     if(name == null || brandname == null || price == null || category == null  || quantity == null )
//     {
//         return { message: 'Vui lòng nhập đủ thông tin' };
//     }

//     const checkExist = await database.query(`SELECT * FROM PRODUCTS WHERE name = '${name}'`)
//     if(checkExist.rows.length === 1){

//         return { message: 'Sản phẩm đã tồn tại' };
//     }    
//     let slugified = slug(name); // slug_url base on name product
//     const result = await database.query(
//         `INSERT INTO products (name, brandname , price , category , quantity , slug_url) 
//         VALUES ('${name}', '${brandname}', ${price} , '${category}', ${quantity} , '${slugified}') 
//         RETURNING *`);

//    return result.rows[0];
// }); // xong

// // Cập nhật sản phẩm
// const updateProduct = (async (req, res) => {
//     let { id , name = null , price = null , quantity = null} = req.body;
//     let slugified = null ;
//     if (name){
//         slugified= slug(name); // slug_url base on name product
//     }
//     const result = await database.query(
//         `UPDATE products 
//         SET name = COALESCE('${name}', name) , price = COALESCE(${price}, price) 
//         , slug_url = COALESCE('${slugified}',slug_url) , quantity = COALESCE(${quantity}, quantity) 
//         WHERE id = ${id} RETURNING *`
//     );
//     if (result.rows.length === 0) {
//         return  { message: 'Product not found' };
//     } else {
//         return result.rows[0];
//     }
// }); // xong

// // Xóa sản phẩm
// const deleteProduct = (async (req, res) => {
//     let  {id}  = req.params;
//     console.log(id)
//     const result = await database.query(
//         `DELETE FROM products WHERE id = ${id}`);
//     if (result.rows.length === 0) {
//         return { message: 'Product not found' };
//     } else {
//         return { message: 'Xoá sản phẩm thành công' };
//     }
// });  // xong


export {
    getAll,
    create
    // ,
    // getProductBySlugURL,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    // getListProductByCategory
};
