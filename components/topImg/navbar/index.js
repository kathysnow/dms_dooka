Component({
  properties:{
    isSortTop: {
      type: Boolean,
      value: false  
    },
    title:{
      type:String,
      value:""
    },
    isShowLeftBtn: {
      type: Boolean,
      value: true
    }
  },
  data: {
    phoneInfo: wx.getSystemInfoSync(), //获取导航栏的高度
    capsuleButton:wx.getMenuButtonBoundingClientRect()
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      wx.navigateBack({
        delta:1
      })
    },
    // 回到首页
    onBackHome(){
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
  
})
