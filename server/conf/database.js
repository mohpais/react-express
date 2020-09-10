'user strict';

const mysql = require('mysql');
const conf = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
}

const conn = mysql.createConnection(conf);
conn.connect(function(err) {
    if (err) throw err;
})

module.exports = conn