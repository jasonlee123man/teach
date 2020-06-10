<template>
	<div class="wrap">
		<div class="order">
            <div
			class="item"
			v-for="(item, index) in list"
			:key="index"
		>
			<div class="top">
				<img
					:src="item.img"
					alt=""
					mode="aspectFit"
				>
				<div class="content">
					<div class="name">{{item.name}}</div>
					<div class="now">￥{{item.price}}</div>
				</div>
				<div class="num">
					数量:{{item.count}}x
				</div>
			</div>
		</div>
        </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [],
			openid:''
		}
	},

	methods: {

	},
	computed: {
		total: function () {
			var result = 0;
			this.list.forEach((item) => {
				result += item.price * item.count
			})
			return result
		}
	},
	created() {
		wx.cloud.callFunction({
			name: "login",
			success: res => {
				this.openid = res.result.openid
			}
        })
		var url = "http://localhost:3000/api/book/orderlist"
		wx.request({
			url,
			success: res => {
                this.list = res.data
			}
		})
	}
}
</script>
<style scoped>
.wrap {
	width: 100%;
	height: 100%;
    background: #fff;
}
.order{
     width: 100%;
	height: 100%;
	background: #f4f4f4;
	padding: 10px 5px;
	box-sizing: border-box;
}
.wrap .item {
	width: 98%;
	margin: 0 auto;
	padding: 20px 10px;
	border-radius: 10px;
	background: #fff;
	box-sizing: border-box;
	margin-bottom: 10px;
}
.item .top {
	display: flex;
	align-items: center;
}
.item .top img {
	width: 100px;
	height: 100px;
	margin: 0 5px;
}
.item .top .content {
	width: 140px;
	display: flex;
	flex-direction: column;
}
.item .top .content .now {
	color: red;
}
</style>