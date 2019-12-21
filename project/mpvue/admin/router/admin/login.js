const express=require("express");
var router=express.Router();

var multiparty=require("multiparty");

const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";

router.get("/",function(req,res){
    // res.send("登录页面")
    res.render("login")
})

router.post("/doLogin",function(req,res){
    res.send("执行登录");
})

module.exports=router;

