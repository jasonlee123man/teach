const express=require("express");
const router=express.Router();

router.get("/",function(req,res){
    res.send("api接口")
})

var list=require("./api/list.js")
router.use("/list",list)

module.exports=router