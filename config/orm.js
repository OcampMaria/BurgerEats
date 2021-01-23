const connection = require("./connection")

const orm = {
   selectAll: function(table, cb){
    const queryString = `SELECT * FROM ${table};`;
    
    connection.query(queryString, (err,res)=>{
        if (err) throw err;

        cb(res);
    });   
    },

    insertOne: function(table, cols, vals, cb){
        const queryString = `INSERT INTO ${table}`;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, (err,res)=>{
            if (err) throw err;
    
            cb(res);
        });   
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err,res)=>{
            if (err) throw err;

            cb(res);
        });  
    }
}
// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`


// * Export the ORM object in `module.exports`
module.exports = orm;