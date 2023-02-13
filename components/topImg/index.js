Component({
  options:{},
  properties:{
    isSortTop: {
      type: Boolean,
      value: true  
    },
    title:{
      type: String,
      value: "DooKa"
    },
    isShowLeftBtn:{
      type: Boolean,
      value: true
    }
  },
  data: {
    phoneInfo: wx.getSystemInfoSync().safeArea.top,
    phoneInfoH: 0,
    acObj: {}
  },
  lifetimes:{
    attached(){
      this.setData({phoneInfoH: this.data.phoneInfo*6});
      if(this.data.isSortTop){
        this.setH()
      }
    }
  },
  methods: {
    setH(){
       let animation = wx.createAnimation({
          duration: 40000,
          timingFunction: 'ease-in',
          delay: 1000
       });
       this.acObj = animation;
        animation.height(this.data.phoneInfo*3.5).step()
        this.setData({
          acObj:  animation.export()
        })
    }
  }
  
})
