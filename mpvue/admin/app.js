const express=require("express");
var app=express();

app.set("view engine", "ejs");

var admin=require("./router/admin.js");
app.use('/admin',admin)


app.listen(3000,'127.0.0.1')