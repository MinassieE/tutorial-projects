const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const today = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

let day = today.toLocaleDateString("en-us", options);
let items = ["todo1", "todo2", "todo3"];

app.get("/", (req, res)=>{
    res.render('list', {kindOfDay: day, newListItems: items});
})
app.post("/", (req, res)=>{
    item = req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})