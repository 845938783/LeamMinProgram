// pages/home/home.js
// const app = getApp()
// console.log(app.globalData.name);
// console.log(app.globalData.age);

Page({
data:{
  message:'哈哈哈',
  list:[]
},  
  handleGetuserinfo(event){
    console.log(event);
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        console.log(res);
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll(obj){
    console.log(obj);
  },
  onReachBottom(){
    console.log('页面滚动到底部');
  },
 onPullDownRefresh(){
   console.log('下拉刷新');
 }
})