const express=require('express');
const app=express();
const router=express.Router()

const MongoClient=require('mongodb').MongoClient
const ObjectID=require('mongodb').ObjectID
const url='mongodb://localhost:27017'

const multiparty=require('multiparty')

const fs=require('fs')

router.get("/list",function(req,res){
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('types')
        collection.find({}).toArray((err,result)=>{
            res.render("type/list",{
                list:result
            })
        })
    })
})

router.get('/add',(req,res)=>{
    res.render('type/add')
})

router.post('/add',(req,res)=>{
    const form=new multiparty.Form()
    form.uploadDir='upload'
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err)
            return
        }
        var name=fields.name
        var img=files.img[0].path.replace('\\','/')
        MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
            if(err){
                console.log(err)
                return
            }
            const collection=client.db('mydb').collection('types')
            collection.insertOne({name,img},(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                res.send("<script>alert('添加成功');location.href='/admin/type/list'</script>")
            })
        })
    })
})

router.get('/del',(req,res)=>{
    var id=ObjectID(req.query.id)
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('types')
        collection.findOne({_id:id},(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            var img=result.img
            fs.exists(img,(exists)=>{
                if(exists){
                    fs.unlinkSync(img)
                }
            })
            collection.remove({_id:id},(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                res.send("<script>alert('删除成功');location.href='/admin/type/list'</script>")
            })
        })
    })
})

router.get('/edit',(req,res)=>{
    var id=ObjectID(req.query.id)
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err)
            return
        }
        const collection=client.db('mydb').collection('types')
        collection.findOne({_id:id},(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            res.render('type/edit',{
                detail:result
            })
        })
    })
})

router.post('/edit',(req,res)=>{
    const form=new multiparty.Form()
    form.uploadDir='upload'
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err)
            return
        }
        var id=ObjectID(fields.id[0])
        var old_img=fields.old_img[0]
        var name=fields.name
        var img=files.img[0].path.replace('\\','/')
        var originalFilename=files.img[0].originalFilename
        var updateData={}
        if(originalFilename==''){
            fs.unlinkSync(files.img[0].path)
            updateData={name}
        }else{
            updateData={name,img}
            fs.exists(old_img,(exists)=>{
                if(exists){
                    fs.unlinkSync(old_img)
                }
            })
        }
        MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
            if(err){
                console.log(err)
                return
            }
            const collection=client.db('mydb').collection('types')
            collection.updateOne({_id:id},{$set:updateData},(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                res.send("<script>alert('修改成功');location.href='/admin/type/list'</script>")
            })
        })
    })
})
module.exports=router