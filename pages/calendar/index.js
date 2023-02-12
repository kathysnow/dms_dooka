Page({
  data: {
    pageName: "calendar",
    show: false,
    date:"",
    stepsCalendar:[
      {
        label: '步骤一',
        desc: '描述信息描述信息描述信息描述信息描述信息描述信息,描述信息描述信息,描述信息描述信息描述信息描述信息描述信息',
        date:'2023-01-01 11:11:11',
        state: 'success',
      },
      {
        label: '步骤二',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'error',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    getApp().$globalFunciton.setTabBarIndex(this);
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

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  
})
