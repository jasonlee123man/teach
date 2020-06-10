const express=require('express');
const app=express();
const router=express.Router();

const book=require("./api/book.js");
router.use("/book",book)

module.exports=router;