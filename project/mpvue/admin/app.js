const express=require("express");
var app=express();

app.set("view engine", "ejs");



var admin=require("./router/admin.js");
app.use('/admin',admin)

var api=require("./router/api.js");
app.use("/api",api)

app.use("/admin/upload",express.static("upload"))
app.use(express.static("static"))


app.listen(3000,'127.0.0.1')