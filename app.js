const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render('list');
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})