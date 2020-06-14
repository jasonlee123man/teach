const express=require('express');
const app=express();

const ejs=require('ejs')

app.use("/admin/book/upload", express.static("upload"))
app.use("/admin/type/upload", express.static("upload"))
app.use('/upload',express.static('upload'))
app.use(express.static('static'))

app.engine('html',ejs.renderFile)
app.set('view engine','html')

const admin=require("./router/admin.js");
const api=require("./router/api.js");

app.use("/admin",admin)
app.use("/api",api)

app.listen(3000,()=>{
    console.log("--app--")
})
