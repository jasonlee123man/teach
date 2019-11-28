const fileManage=filename=>{
    let arr=filename.split(".");
    let ext=arr[arr.length-1]
    let newname=new Date().valueOf()+"."+ext;
    return newname;
}

module.exports=fileManage