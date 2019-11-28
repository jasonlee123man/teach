const express = require("express");
const app = express();

const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("static"));

//指定虚拟目录
app.use("/upload", express.static("upload"));

//解析表单
var multiparty = require('multiparty');

//引入MongoDB
const MongodbClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dbUrl = "mongodb://localhost:27017/";

//引入express-session
const session = require("express-session");
app.use(session({
    secret: 'keyboard cat', //加密方式
    cookie: {
        maxAge: 1000*60*30
    }
}))

//检测登录：
//1.如果session有userinfo内容，说明已经登录，可以访问list，edit，delete页面
//2.如果seesion的userinfo没有内容，说明不能登录，不可以访问list,edit,delete，但是可以访问login和doLogin
app.use(function(req,res,next){
    if(req.url=="/login" ||req.url=="/doLogin"){
        next()
    }else{
        if(req.session.userinfo && req.session.userinfo.username!=""){
            next()
        }else{
            res.redirect("/login")
        }
    }
})


//渲染登录页面
app.get("/login", function (req, res) {
    res.render("login")
})

//执行登录
app.post("/doLogin", function (req, res) {
    var form = new multiparty.Form();
    form.parse(req, function (err, fields) {
        //接收数据
        var username = fields.username[0];
        var password = fields.password[0];

        //根据username和password查询数据库
        MongodbClient.connect(dbUrl, function (err, client) {
            var collection = client.db("mydb").collection("admin");
            collection.findOne({
                username,
                password
            }, {}, function (err, result) {
                //提示用户
                if (result == null) {
                    res.send("<script>alert('用户名或密码错误');history.back();</script>")
                } else {
                    req.session.userinfo=result;   //设置session
                    res.redirect("list")
                }
            })
        })
    })

})



//执行添加
app.post("/doAdd", function (req, res) {
  
})



//执行修改
app.post("/doEdit", function (req, res) {
 

})



app.listen(3000)