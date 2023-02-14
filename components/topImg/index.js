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
      let h = this.data.phoneInfo*4.5;
      if(h<160) h = 160
      this.setData({phoneInfoH: h});
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
       let h = this.data.phoneInfo*3;
       if(h<114) h = 114
        animation.height(h).step()
        this.setData({
          acObj:  animation.export()
        })
    }
  }
  
})
