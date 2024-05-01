const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const today = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

let day = today.toLocaleDateString("en-us", options);
let items = ["todo1", "todo2", "todo3"];
let workItems = [];

app.get("/", (req, res)=>{
    res.render('list', {ListTitle: day, newListItems: items});
})
app.post("/", (req, res)=>{
    item = req.body.newItem;
    
    console.log(req.body);

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", (req, res)=>{
    res.render("list", {ListTitle: "Work", newListItems: workItems});
})
app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})