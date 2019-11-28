const express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    // res.send("登录页面")
    res.render("login")
})

router.post("/doLogin",function(req,res){
    res.send("执行登录");
})

module.exports=router;

