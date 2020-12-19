const mysql = require('mysql');

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "perperdb"
});


con.connect(error => {
    if(error) throw error;
    console.log("Database Connected!");
});


module.exports = con;