Page({
  data: {
    pageName: 'equipment',
    iconBtnLists:[
      {label:'扫码',url:''},
      {label:'故障打卡',url:''},
      {label:'停机申请',url:''},
      {label:'生产打卡',url:''}
    ],  
    informations:[
      {label: 'WT',value:'--'},
      {label: 'OTC01',value:'--'},
      {label: 'OTC02',value:'--'},
      {label: 'OTC01',value:'--'},
      {label: 'OTC02',value:'--'}
    ],
    dateTime: '2023-10-10 11:11:22',
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

  
})

