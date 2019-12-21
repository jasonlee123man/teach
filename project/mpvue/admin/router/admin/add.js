const express = require("express");
var router = express.Router()

var multiparty=require("multiparty");
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";


router.get("/", function (req, res) {
    res.render("add")
})

router.post("/post", function (req, res) {
    //1.接收数据
    var form = new multiparty.Form();

    //指定上传目录
    form.uploadDir = "upload";

    form.parse(req, function (err, fields, files) {
        var realname = fields.realname[0];
        var gender = fields.gender[0];
        var age = fields.age[0];
        var address = fields.address[0];
        //通过filles拿到图片路径
        var image = files.image[0].path;

        //2. 把数据添加到数据库
        MongodbClient.connect(dbUrl, {
            useUnifiedTopology: true
        }, function (err, client) {
            var collection = client.db("mydb").collection("student");
            // console.log({realname,gender,age,address,image})
            // return;
            collection.insertOne({
                realname: realname,
                gender: gender,
                age: age,
                address: address,
                image: image
            }, function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send("<script>alert('成功添加');location.href='/admin/list'</script>")
            })
        })
    })
})
module.exports = router;