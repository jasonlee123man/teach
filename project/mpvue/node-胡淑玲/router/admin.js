const express = require('express');
const app = express();
const router = express.Router();

const ejs = require('ejs')

app.use(express.static('static'))

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

const session = require('express-session')
router.use(session({
    secret: 'keyboard cat', cookie: { maxAge: 6000000 }, resave: false,
    saveUninitialized: true
}))

router.use((req, res, next) => {
    if (req.url == "/login") {
        next()
    } else {
        if (req.session.username && req.session.username != '') {
            next()
        } else {
            res.redirect('/admin/login')
        }
    }
})

const book = require("./admin/book.js");
const type = require("./admin/type.js");
const login = require("./admin/login.js");

router.use("/book", book)
router.use("/type", type)
router.use("/", login)

module.exports = router;
