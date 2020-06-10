const express = require('express');
const app = express();
const router = express.Router()

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const url = 'mongodb://localhost:27017'

const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/login", (req, res) => {
    res.render('book/login')
})

router.post("/login", urlencodedParser, (req, res) => {
    var username = req.body.username
    var password = req.body.password
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log(err)
            return
        }
        const collection = client.db('mydb').collection('users')
        collection.findOne({ username, password }, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            // console.log(result);return;
            if (result == null) {
                res.send("<script>alert('用户名或密码错误');location.href='/admin/login'</script>")
            } else {
                req.session.username = result.username;
                // console.log(req.session.username);return;
                req.app.locals['username'] = result.username
                res.redirect('/admin/book/list')
            }
        })
    })
})

router.get("/logout", (req, res) => {
    req.session.username = null
    res.redirect('/admin/login')
})
module.exports = router