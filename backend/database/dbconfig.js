import pg from 'pg';
import dotenv from 'dotenv';

const { Client } = pg;
dotenv.config();

let PORT = process.env.DB_PORT;

const database = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: PORT
});


await database.connect();
console.log(`Connected to the PostgreSQL database in port ${PORT}`);

export default database;
