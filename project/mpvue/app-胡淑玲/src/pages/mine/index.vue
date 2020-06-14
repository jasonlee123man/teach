<template>
	<div class="wrap">
		<div class="pic">
			<img
				src="/static/images/b2.jpg"
				alt=""
			>
			<button
				v-if="!tag"
				open-type="getUserInfo"
				@getuserinfo="Userinfo"
			>登录</button>
			<view
				class="box"
				v-if="tag"
			>
				<image
					class="image"
					:src="userinfo.avatarUrl"
					mode="aspectFill"
				></image>

				<view class="name">
					{{userinfo.nickName}}
				</view>
			</view>
		</div>
		<div class="num">
			<div
				class="item"
				v-for="(item,index) in data"
				:key="index"
			>
				<div>{{item.num}}</div>
				<div>{{item.title}}</div>
			</div>
		</div>
		<div class="order">
			<div>
				<img
					src="/static/images/b1.png"
					alt=""
				>
				<span @click="toorder">我的订单</span>
			</div>
			<span>查看全部购买商品></span>
		</div>
		<div class="detail">
			<div
				v-for="(item,index) in goods"
				:key="index"
			>
				<img
					class=".img"
					:src="item.img"
				/>
				<p>{{item.title}}</p>
			</div>
		</div>
		<div class="member mpub">
			<div><img
					class="imgs"
					src="/static/images/b6.png"
				/>
				<span>会员中心</span></div>
			<span>></span>
		</div>
		<ul>
			<li
				v-for="(item,index) in list"
				:key="index"
			>
				<div><img
						class="imgs"
						:src="item.img"
					/>
					<span>{{item.title}}</span></div>
				<span>></span>
			</li>
		</ul>
		<div class="member spub">
			<div><img
					class="imgs"
					src="/static/images/b12.png"
				/>
				<span>客服反馈</span></div>
			<span>></span>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		return {
			userinfo: null,
			tag: false,
			data: [{ num: 0, title: '收藏的商品' }, { num: 0, title: '关注的店铺' }, { num: 0, title: '我的足迹' }],
			goods: [{ img: '/static/images/b3.png', title: '待付款' },
			{ img: '/static/images/b4.png', title: '待收货' },
			{ img: '/static/images/b5.png', title: '退换货' }],
			list: [{ img: '/static/images/b7.png', title: '我的礼券' },
			{ img: '/static/images/b8.png', title: '积分抵现' },
			{ img: '/static/images/b9.png', title: '我的电子书' },
			{ img: '/static/images/b10.png', title: '我的礼品卡' },
			{ img: '/static/images/b11.png', title: '收货地址' }]
		}
	},

	methods: {
		Userinfo(e) {
			this.userinfo = e.mp.detail.userInfo
			this.tag = true
		},
		toorder() {
			wx.navigateTo({
				url: '/pages/order/main'
			})
		}
	},
	onShow() {
		const app = getApp();
        var userinfo = this.globalData.userinfo;
		if (userinfo) {
			this.userinfo = userinfo
			this.tag = true
		} else {
			app.userInfoReadyCallback = res => {
                this.userinfo = res.userinfo
				this.tag = true
			}
		}
	}
}
</script>
<style scoped>
.pic img {
	width: 100%;
	height: 140px;
}
.pic button {
	padding: 0 15px;
	background: transparent;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 20px;
	position: absolute;
	left: 150px;
	top: 45px;
}
.pic .box {
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	position: absolute;
	left: 160px;
	top: 40px;
}
.pic .box .image {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
}
.pic .box .name {
	color: #fff;
	text-align: center;
}
.num {
	height: 60px;
	display: flex;
	border-bottom: 1px solid #f4f4f4;
	align-items: center;
}
.num .item {
	width: 33%;
	display: flex;
	flex-direction: column;
	text-align: center;
	border-right: 1px solid #fafafa;
}
.order {
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
	border-bottom: 1px solid #f4f4f4;
	display: flex;
	justify-content: space-between;
}
.order img {
	width: 30px;
	height: 30px;
	margin-right: 5px;
	position: relative;
	top: 10px;
}
.detail {
	height: 80px;
	display: flex;
	align-items: center;
}
.detail div {
	width: 33%;
	display: flex;
	flex-direction: column;
	text-align: center;
}
.detail div .img {
	width: 30px;
	height: 30px;
	margin-left: 45px;
}
ul li {
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #f4f4f4;
	padding: 0 10px;
}
ul li div {
	display: flex;
	align-items: center;
}
ul li div .imgs {
	width: 30px;
	height: 30px;
	margin-right: 10px;
}
.member {
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #f4f4f4;
	padding: 0 10px;
}
.mpub {
	border-top: 10px solid #f4f4f4;
	border-bottom: 10px solid #f4f4f4;
}
.spub {
	border-top: 10px solid #f4f4f4;
}
.member div {
	display: flex;
	align-items: center;
}
.member div .imgs {
	width: 30px;
	height: 30px;
	margin-right: 10px;
}
</style>
