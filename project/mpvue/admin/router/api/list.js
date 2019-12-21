const express = require("express");
var router = express.Router()

var multiparty=require("multiparty");
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";

router.get("/", function (req, res) {
     MongodbClient.connect(dbUrl,{ useUnifiedTopology: true },function(err,client){
        const collection=client.db("mydb").collection("student");
        collection.find({}).toArray(function(err,result){

            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(JSON.stringify(result))
            res.end()
        })
    })
})

module.exports = router;