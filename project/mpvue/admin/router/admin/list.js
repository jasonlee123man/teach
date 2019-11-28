const express=require("express");
var router=express.Router();


//引入MongoDB
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";


//读取数据库中的student表
router.get("/", function (req, res) {
    console.log("hello world")
    MongodbClient.connect(dbUrl, function (err, client) {
        if (err) {
            console.log(err);
            return;
        }
        const collection = client.db("mydb").collection("student");
        collection.find({}).toArray(function (err, result) {

            res.render("list", {
                "list": result
            })
        })

    })
})

module.exports=router;