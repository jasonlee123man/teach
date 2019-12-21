const express = require("express");
var router = express.Router();

//引入MongoDB
var multiparty=require("multiparty");
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";

router.get("/", function (req, res) {
    //渲染编辑页面
    let id = ObjectId(req.query.id)
    MongodbClient.connect(dbUrl, function (err, client) {
        const collection = client.db("mydb").collection("student");
        collection.find({
            _id: id
        }).toArray(function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            res.render("edit", {
                "detail": result[0]
            })
        })
    })
})

// 执行编辑
router.post("/doEdit", function (req, res) {
    // console.log("china")
    //1.接收id
    var form = new multiparty.Form();
    //指定上传目录
    form.uploadDir = "upload";
    form.parse(req, function (err, fields, files) {
        //接收表单数据
        var id = ObjectId(fields.id[0]);
        var realname = fields.realname[0];
        var gender = fields.gender[0];
        var age = fields.age[0];
        var address = fields.address[0];
        var image = files.image[0].path;

        //如果没有上传图片，则不修改image字段
        var originalFilename = files.image[0].originalFilename;
        if (originalFilename == '') {
            var updateData = {
                realname,
                gender,
                age,
                address
            }
        } else {
            var updateData = {
                realname,
                gender,
                age,
                address,
                image
            }
        }

        MongodbClient.connect(dbUrl, function (err, client) {
            var collection = client.db("mydb").collection("student");
            collection.updateOne({
                _id: id
            }, {
                $set: updateData
            }, function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send("<script>alert('成功修改');window.location.href='/admin/list';</script>")
            })
        })
    })
})

module.exports = router;