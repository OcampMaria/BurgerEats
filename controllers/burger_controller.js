const express = require("express");
const router = express.Router();
const burger = require ("../models/burger");
// import the following:

//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.

router.get("/", (req,res)=>{
    burger.all(data=>{
        hbarsObj = {
            burger = data
        };
        console.log(hbarsObj);
        res.render("index", hbarsObj);
    })
})

module.exports = router