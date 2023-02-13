//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/UserDB", function(err){
    if(err){
    console.log(err);
    }
});

const userSchema = {
    email: String,
    password: String
};

const  User = mongoose.model("User", userSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){

    const newUser = new User({
    email: req.body.username,
    password: req.body.password
    });
    
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.render("secrets")
        }
    });
});

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({email: username}, function(err, foundUser){
        if(err){
            console.log("user not found!");
        }
        else{
            if(foundUser){
                if(foundUser.password === password){
                    res.send("user Found");
                }
            }
            
        }
    });




});




app.listen(3000, function(){
    console.log("App listening to port 3000");
})
