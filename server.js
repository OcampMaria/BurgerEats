const express = require ("express");
const bodyParser = require ("body-parser");
const exphbs = require ("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
// urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// json
app.use(bodyParser.json());

// templating engine. defaultlayout main
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//routes
const routes= require("./controllers/burger_controller")
app.use(routes);

app.listen(PORT,()=>console.log("server listening on `${PORT}`"));