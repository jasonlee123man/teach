// cart/index.js
let cart = wx.getStorageSync("cart") || [];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cart: [], //购物车商品信息
        sum: 0, //总价
        isAllCheck: true //是否全选
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},
    // 计算总价
    calcateSum() {
        //1.遍历缓存，（判断选中）每件商品单价*数量
        let sum = 0;
        cart.forEach((item, index) => {
            if (item.isCheck) {
                //2.把所有商品加起来，赋给变量sum
                sum += item.goods_price * item.count;
            }
        })

        //3.把sum渲染到页面
        this.setData({
            sum
        })
    },
    // 点击添加
    handleAdd(e) {
        //获取下标
        let index = e.target.dataset.index;
        //根据下标获取商品信息，count累加
        // console.log(cart);
        cart[index].count++
        //存入缓存
        wx.setStorageSync("cart", cart);
        //渲染数据
        this.setData({
            cart
        })
        //计算总价
        this.calcateSum();
    },
    // 减少商品
    handleReduce(e) {
        // 1.根据索引获取商品信息，count--(如果count<1,count=1)
        let index = e.target.dataset.index;
        cart[index].count--;
        if (cart[index].count < 1) {
            cart[index].count = 1;
        }
        //2. 存入缓存
        wx.setStorageSync('cart', cart);
        //3. 渲染数据 
        this.setData({
            cart
        })
        //4. 计算总价
        this.calcateSum()

    },
    // 删除商品
    handleRemove(e) {
        //1.获取索引
        let index = e.target.dataset.index;
        //2.根据索引删除商品
        cart.splice(index, 1);
        //3.把删除后的商品存入缓存
        wx.setStorageSync("cart", cart);
        //4.把最新的数据渲染到页面
        this.setData({
            cart
        })
        //5.计算总钱数
        this.calcateSum();
    },
    // 选择商品
    handleSingleCheck(e) {
        let index = e.target.dataset.index;
        cart[index].isCheck = !cart[index].isCheck;

        //更新缓存
        wx.setStorageSync('cart', cart);

        //判断是否全选
        let isAllCheck = cart.every((item) => {
            return item.isCheck == true;
        })
        //渲染到页面
        this.setData({
            isAllCheck
        })
        //计算总价
        this.calcateSum()
    },

    // 点击全选
    handlekAllCheck() {
        //1.单击，给isAllCheck取反
        let isAllCheck = !this.data.isAllCheck;
        //2. 判断取反之后的 isAllCheck
        if (isAllCheck) {
            // 如果isAllCheck是ture，把每一个商品选中;
            cart.forEach((item) => {
                item.isCheck = true;
            })
        } else {
            //如果isAllCheck是false，把每一个商品都取消选中
            cart.forEach((item) => {
                item.isCheck = false;
            })
        }
        //3.把cart渲染到页面
        this.setData({
            isAllCheck,
            cart
        })
        //4.计算总价
        this.calcateSum()

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        let cart = wx.getStorageSync('cart') || [];
        cart.forEach((item) => {
            item.isCheck = true;
        })
        //存入缓存
        // console.log("onShow", cart);
        wx.setStorageSync("cart", cart);
        this.setData({
            cart
        })
        // 计算总价
        this.calcateSum();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
})