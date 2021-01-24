const orm = require("../config/orm")
  
// create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

const burger = {
    selectAll: function(cb){
        orm.all("burgers", res=>{
            cd(res);
        });
    },

    insertOne: function (cols, vals, cb){
        orm.create("burgers", cols, vals, (res)=>{
            cb(res);
        })
    }, 

    updateOne: function (objColVals, condition, cb){
        orm.update("burgers", ObjColVals, condition, (res)=>{
            cb(res);
        });
    }, 

    deleteOne:function (condition, cb){
        orm.delete("burgers", condition, (res)=>{
            cb(res);
        });
    }
} 

module.exports = burger;