const express=require("express");
const router=express.Router();

router.get("/",function(req,res){
    res.send("后台首页")
})
var login=require("./admin/login.js")
var list=require("./admin/list.js");
var edit=require("./admin/edit.js");
var del=require("./admin/delete.js");
var add=require("./admin/add.js")

router.use("/login",login)
router.use("/list",list)
router.use("/edit",edit);
router.use("/delete",del);
router.use("/add",add)

module.exports=router