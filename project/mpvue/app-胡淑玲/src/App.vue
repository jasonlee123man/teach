<script>
export default {
	data() {
		return {
		}
	},
	created() {
		// 调用API从本地缓存中获取数据
		/*
		 * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
		 * 微信：mpvue === wx, mpvuePlatform === 'wx'
		 * 头条：mpvue === tt, mpvuePlatform === 'tt'
		 * 百度：mpvue === swan, mpvuePlatform === 'swan'
		 * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
		 */
        
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                env: 'test-ox1bc',
                traceUser: true,
            })
        }

		wx.login({
			success: res => {
			}
		})
		wx.getSetting({
			complete: (res) => {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						complete: (res) => {
							this.globalData.userinfo = res.userInfo
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			},
		})
	}
}
</script>

<style>
.container {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 200rpx 0;
	box-sizing: border-box;
}
/* this rule will be remove */
* {
	transition: width 2s;
	-moz-transition: width 2s;
	-webkit-transition: width 2s;
	-o-transition: width 2s;
}
</style>
