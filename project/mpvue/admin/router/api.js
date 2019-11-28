const express = require("express");
const app = express();

const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";

app.get("/list",function(req,res){
    MongodbClient.connect(dbUrl,{ useUnifiedTopology: true },function(err,client){
        const collection=client.db("mydb").collection("student");
        collection.find({}).toArray(function(err,result){

            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(JSON.stringify(result))
            res.end()
        })
    })
})

app.listen(3010)