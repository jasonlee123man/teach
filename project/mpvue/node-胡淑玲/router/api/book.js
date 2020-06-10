const express=require('express');
const app=express();
const router=express.Router();

app.use('/upload',express.static('upload'))

const MongoClient=require('mongodb').MongoClient
const ObjectID=require('mongodb').ObjectID
const url='mongodb://localhost:27017'

const bodyParser=require('body-parser')
var jsonParser = bodyParser.json()

router.get("/booklist",function(req,res){
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('books')
        collection.find({}).toArray((err,result)=>{
            if(err){
                console.log(err)
                return
            }
            result.forEach(item=>{
                item.img='http://localhost:3000/'+item.img
            })
            res.json(result)
        })
    })
})

router.get("/typelist",function(req,res){
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('types')
        collection.find({}).toArray((err,result)=>{
            if(err){
                console.log(err)
                return
            }
            result.forEach(item=>{
                item.img='http://localhost:3000/'+item.img
            })
            res.json(result)
        })
    })
})

router.get('/bookdetail',(req,res)=>{
    var id=ObjectID(req.query.id)
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('books')
        collection.findOne({_id:id},(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            result.img='http://localhost:3000/'+result.img
            res.json(result)
        })
    })
})

router.post("/addorder",jsonParser,(req,res)=>{
    var data=req.body
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('orders')
        collection.insertMany(data,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            var obj={msg:'添加成功',status:1}
            res.json(obj)
        })
    })
})

router.get("/orderlist",function(req,res){
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('orders')
        collection.find({}).toArray((err,result)=>{
            if(err){
                console.log(err)
                return
            }
            res.json(result)
        })
    })
})
module.exports=router;