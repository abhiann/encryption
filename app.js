//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.listen(3000, function(req, res){
    console.log("App listening to port 3000");
})
