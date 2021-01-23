const mysql = require ("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:8080,
    user:"root",
    password:"Oabc690218!",
    database:"burgers_db"
});
//making connection
connection.connect((err)=>{
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;