const express = require("express");
const router = express.Router();
const burger = require ("../models/burger");//importing to use database functions. 

// Create the `router` for the app, and export the `router` at the end of your file.

router.get("/", (req,res)=>{
    burger.selectAll(data=>{
        const hbarsObj = {
            burgers: data
            //why burgers?
        };
        console.log(hbarsObj);
        res.render("index", hbarsObj);
    })
}); 

router.post ("/api/burgers", (req,res)=>{
    burger.insertOne(
    ["burger_name", "devoured"], 
    [rep.body.burger_name, req.body.devoured], 
    (result)=>{
        res.json({id: result.insertId});//sends back the new burger id.
    });
});

router.put("/api/burgers/:id", (req,res)=>{
    const condition = `id = ${req.params.id}`;
    console.log("condition", condition);

    burger.updateOne({devoured:req.body.devoured}, condition, (result)=>{
        if (result.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});


module.exports = router