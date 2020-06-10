<template>
	<div class="wrap">
            <img class="picture"
			:src="detail.img"
			mode="aspectFit"
			alt=""
		/>
		<div class="content">
			<div class="name">
				<div class="left">当当自营</div>
				<div class="right">{{ detail.name }}</div>
			</div>
			<div class="desc">{{ detail.desc }}</div>
			<div class="new">￥{{ detail.price }}</div>
            <div class="old">定价：<span>￥{{detail.old_price}}</span></div>
		</div>
        <div class="bottom">
            <div class="img"><img src="/static/images/shop.png" alt=""><div>店铺</div></div>
            <div class="img"><img src="/static/tabs/cart.png" alt="" @click="tocart"><div>购物车</div></div>
            <div class="buy">立即购买</div>
            <div class="add" @click="add(detail._id)">加入购物车</div>
        </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			detail: {}
		}
	},

	methods: {
        tocart(){
            wx.switchTab({
                url: '/pages/cart/main'
            })
        },
        add(id){
            var arr=wx.getStorageSync("cart")||[];
            var index=arr.findIndex(item=>{
                return item._id==id
            })
            if(index==-1){
                this.detail.checked=true
                this.detail.count=1
                arr.push(this.detail)
            }else{
                arr[index].count++
            }
            wx.setStorageSync("cart",arr)
            wx.showToast({
                title: '添加成功',
                mask: true,
                success: (result)=>{
                    
                },
                fail: ()=>{},
                complete: ()=>{}
            });
        }
	},

	onLoad(e) {
        var id = e.id
		var url = "http://localhost:3000/api/book/bookdetail"
		wx.request({
            url,
            data:{id},
			success: res => {
				this.detail = res.data
			}
		}) 
	}
}
</script>
<style scoped>
.wrap .picture {
	width: 750rpx;
    height: 600rpx;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
}
.wrap .content{
    padding: 20px 10px;
    margin-bottom: 60px;
}
.content .name{
    display: flex;
}
.content .name .left{
    border: 1px solid red;
    background: red;
    border-radius: 10px;
    color: #fff;
    padding: 0 5px;
    font-size: 14px;
    margin-right: 15px;
}
.content .name .right{
    font-size: 20px;
}
.content .desc{
    color: #999;
}
.content .new{
    color: red;
    font-size: 20px;
}
.content .old{
    color: #999;
}
.content .old span{
    text-decoration: line-through;
}
.bottom{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    background: #fff;
}
.bottom .img{
    width: 20%;
}
.bottom .img img{
    width: 50%;
    height: 30px;
}
.bottom .buy{
    width: 30%;
    height: 60px;
    line-height: 60px;
    background: rgb(241, 241, 49);
    color: #fff;
}
.bottom .add{
    width: 30%;
    height: 60px;
    line-height: 60px;
    background: red;
    color: #fff;
}
</style>