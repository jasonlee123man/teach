const express = require("express");
var router = express.Router();


//引入MongoDB
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";


router.get("/", function (req, res) {
    //删除记录
    let id = ObjectId(req.query.id)
    MongodbClient.connect(dbUrl, function (err, client) {
        var collection = client.db("mydb").collection("student");
        collection.removeOne({
            _id: id
        }, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            res.send("<script>alert('成功删除');window.location.href='/admin/list';</script>")
        })
    })
})
module.exports = router;