require('dotenv').config();
const mysql = require('mysql2');


const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USERDB,
    database: process.env.DB,
    password: process.env.PASSWORD
});

module.exports = pool.promise();