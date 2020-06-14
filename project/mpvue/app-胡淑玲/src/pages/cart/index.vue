<template>
	<div class="wrap">
		<div class="cart" v-if="list.length>0">
			<div
				class="item"
				v-for="(item, index) in list"
				:key="index"
			>
				<div class="top">
					<input
						type="checkbox"
						name=""
						id=""
						:checked="item.checked"
						@click="singleClick(index)"
					>
					<img
						:src="item.img"
						alt=""
						mode="aspectFit"
					>
					<div class="content">
						<div class="name">{{item.name}}</div>
						<div class="price"><span class="now">￥{{item.price}}</span><span class="old">￥{{item.old_price}}</span></div>
					</div>
					<div class="num">
						<div @click="reduce(index)">-</div>
						<span>{{item.count}}</span>
						<div @click="add(index)">+</div>
					</div>
					<div
						class="del"
						@click="del(index)"
					>删除</div>
				</div>
				<div class="addbuy">
					<span class="color">加价购</span><span class="center">购买一件，即可享受换购优惠</span><span @click="tohome">去选择></span>
				</div>
			</div>
			<div class="total">
				<div class="left">
					<input
						type="checkbox"
						name=""
						id=""
						:checked="isAllCheck"
						@click="handleAll"
					>
					<span class="all">全选</span>
					<span>合计：
						{{total}}</span>
				</div>
				<div
					class="buy"
					@click="settle"
				>结算</div>
			</div>
		</div>
        <div v-else></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [],
			openid: ''
		}
	},

	methods: {
		settle() {
			var result = this.list.filter(item => {
				delete item._id;
				item.openid = this.openid
				return item.checked = true
			})
			wx.request({
				url: "http://localhost:3000/api/book/addorder",
				method: 'POST',
				data: result,
				success: (res) => {
					if (res.data.status == 1) {
						wx.showToast({
							title: '添加成功',
							mask: true,
							success: () => {
							},
							fail: () => { },
							complete: () => { }
						})
					} else {
						wx.showToast({
							title: '添加失败',
							mask: true,
							success: () => {
							},
							fail: () => { },
							complete: () => { }
						})
					}
				}
			})
		},
		tohome() {
			wx.switchTab({
				url: '/pages/index/main'
			})
		},
		del(index) {
			wx.showModal({
				title: "提示",
				content: "您确定要删除吗？",
				success: (res) => {
					if (res.confirm) {
						this.list.splice(index, 1)
						wx.setStorageSync("cart", this.list)
					}
				},
			});
		},

		add(index) {
			this.list[index].count += 1
			wx.setStorageSync("cart", this.list)
		},

		reduce(index) {
			this.list[index].count -= 1
			if (this.list[index].count < 1) {
				this.list[index].count = 1
			}
			wx.setStorageSync("cart", this.list)
		},

		singleClick(index) {
			this.list[index].checked = !this.list[index].checked
			wx.setStorageSync("cart", this.list)
		},

		handleAll() {
			this.isAllCheck = !this.isAllCheck
		},
	},
	computed: {
		total: function () {
			var result = 0;
			this.list.forEach((item) => {
				if (item.checked) {
					result += item.price * item.count
				}
			})
			return result
		},
		isAllCheck: {
			get: function () {
				var result = this.list.every((item) => {
					return item.checked == true
				})
				return result
			},
			set: function (newValue) {
				this.list.forEach((item) => {
					item.checked = newValue
				})
			}
		}
	},

	onShow() {
		this.list = wx.getStorageSync('cart') || []
		wx.cloud.callFunction({
			name: "login",
			success: res => {
				this.openid = res.result.openid
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
    padding-bottom: 60px;
}
.cart{
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
	width: 100px;
	display: flex;
	flex-direction: column;
}
.item .top .content .now {
	color: red;
}
.item .top .content .old {
	text-decoration: line-through;
}
.item .top .num {
	display: flex;
	position: relative;
	top: 30px;
	right: 5px;
}
.item .top .num div {
	width: 20px;
	height: 20px;
	border: 1px solid #ccc;
	border-radius: 50%;
	text-align: center;
	line-height: 20px;
}
.item .top .num span {
	margin: 0 5px;
}
.item .top .del {
	width: 40px;
	height: 80px;
	background: rgb(240, 66, 66);
	color: #fff;
	line-height: 80px;
	text-align: center;
}
.item .addbuy .color {
	border: 1px solid red;
	padding: 0 2px;
	border-radius: 5px;
	color: red;
	font-size: 14px;
}
.item .addbuy .center {
	color: #999;
	font-size: 14px;
	margin: 0 35px 0 10px;
}
.total {
	background: #fff;
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px 0 20px;
	box-sizing: border-box;
	border-top: 1px solid #ccc;
}
.total .all {
	margin: 0 10px;
}
.total .buy {
	width: 120px;
	height: 54px;
	border-radius: 25px;
	background: rgb(236, 55, 55);
	line-height: 54px;
	text-align: center;
	color: #fff;
}
</style>