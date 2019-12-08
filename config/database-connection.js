const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat-app'
});

module.exports = pool;