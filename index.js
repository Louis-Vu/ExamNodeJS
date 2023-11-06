const express = require("express");
const app = express(); // host - app
const port = 2210;

app.listen(port,function(){
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({express: true}));

// connect database
const mongoose = require("mongoose");
const usersModels = require("./models/users.models");
const Server = "mongodb://localhost:27017/";
const db_name = "mongoose";
mongoose.connect(`${Server}/${db_name}`)
.then(()=>{
    console.log(`Conneted database ${db_name}`);

}).catch(err=>{
    console.log(err);
})

// routes
app.get("/",function(req,res){
    res.render("home/home");
})
