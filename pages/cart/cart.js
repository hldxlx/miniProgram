Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  show(e){
    wx.showToast({
      title: 'hello',
    })
    console.log(e.currentTarget.dataset.title)
  },
  jump(){
    // wx.switchTab({
    //   url: '/pages/list/list',
    // })
    wx.navigateTo({
      url: '/pages/index/index?id=1&name=binsom',
    })
  },

  gourl(){
    //  wx.navigateTo({
    //    url: '/pages/list/list',
    //  })
    // wx.switchTab({
    //   url: '/pages/logs/logs',
    // })
    // wx.reLaunch({
    //   url: '/pages/list/list',
    // })
    wx.redirectTo({
      url: '/pages/list/list?id=1&name=zs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:function(res){
        console.log(res)
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
    
  }
})