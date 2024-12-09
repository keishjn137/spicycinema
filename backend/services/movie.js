import database from '../database/dbconfig.js';

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


const Create = (async (Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner) => {

    if (!Name || !Genre || !Duration || !Price) {
        return { message: "Vui lòng nhập đủ thông tin !" };
    }
    const CheckExistMovie = await database.query(`SELECT * FROM MOVIE WHERE Name = '${Name}'`)
    if (CheckExistMovie.rows.length == 1) {
        return { message: "Tên phim này đã có , vui lòng kiểm tra lại thông tin !" };
    }
    try {
        const result = await database.query(`
        INSERT INTO Movie (Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner)
        VALUES ('${Name}', '${Genre}', ${Duration}, ${Price}, '${Directors}', '${Actors}' ,
        '${url_image_title}', '${url_image_banner}')
        `);
        return { message: 'Thêm thông tin phim thành công! ' };
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi thêm thông tin phim! ' };
    }
});

const Update = (async (ID, Name, Genre, Duration, Price, Directors, Actors, url_image_title = null, url_image_banner = null) => {
    const CheckExistMovie = await database.query(`SELECT * FROM MOVIE WHERE Name = '${Name}'`)
    if (CheckExistMovie.rows.length == 1) {
        return { message: "Tên phim này đã có , vui lòng kiểm tra lại thông tin !" };
    }
    try {
        const result = await database.query(`
      UPDATE Movie
      SET 
            Name = COALESCE('${Name}', Name),
            Genre = COALESCE('${Genre}', Genre),
            Duration = COALESCE('${Duration}', Duration),
            Price = COALESCE('${Price}', Price),
            Directors = COALESCE('${Directors}', Directors),
            Actors = COALESCE('${Actors}', Actors),
            url_image_title = COALESCE('${url_image_title}', url_image_title),
            url_image_banner = COALESCE('${url_image_banner}', url_image_banner)
            WHERE ID = ${ID}
      `  );
        return result.rows;
    } catch (error) {
        console.error(error);
        return { message: 'Lỗi cập nhật thông tin phim !' };
    }
});

export {
    getAll,
    getById,
    Create,
    Update
}