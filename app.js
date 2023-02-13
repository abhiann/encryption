//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public/"));

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});



app.listen(3000, function(){
    console.log("App listening to port 3000");
})
