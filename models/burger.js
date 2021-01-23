const orm = require("../config/orm")
  
  // create the code that will call the ORM functions using burger specific input for the ORM.

    // * Export at the end of the `burger.js` file.

    const burger = {
        all: function(cb){
            orm.all("burgers", res=>{
                cd(res);
            })
        }
}, 
