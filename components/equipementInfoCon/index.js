Component({
  data: {
    ecData: {
      lazyLoad: true,
    },
    imgData: "/image/up.png",
    mationInfoLists: [
      {value: 'xxx生产线', class:"blodLab blockLab"},
      {label: '信息',value:'--'},
      {label: '备注',value:'--', class:"blockLab"},
    ],
    timeout: false,
  },
  attached: function () { 
    getApp().$globalFunciton.initDmsEcharts(this.selectComponent('#topEcharts'),84,"gauge");
    let timeout = setTimeout(()=>{
      this.initCanvas();
      this.setclearTimeout();
    },600);
    this.setData({timeout:timeout});
  },
  moved: function () { },
  detached: function () {
    
   },
  methods: {
    initCanvas(){
        const query = this.createSelectorQuery()
        query.select('#dooImg') // canvas id
          .fields({ node: true, size: true })
          .exec((res) => {
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')
            const dpr = wx.getSystemInfoSync().pixelRatio // 屏幕比例
            let w = 160 * dpr, h = 100 * dpr;
            canvas.width = w;
            canvas.height = h
            this.drawImg(ctx,canvas,w,h,dpr)
          })
    },
    drawImg(ctx,canvas,w,h,dpr){
      let sc = 0.98
      let minpix = (w<h?w:h)*sc;
      const img = canvas.createImage()
        img.src = "/image/rbg.png"
        let x = (w - minpix)/2 + 10*dpr, y = (1-sc)*minpix/2
        img.onload = function() {
          ctx.drawImage(img, x, y,minpix,minpix)
        }
    },
    setclearTimeout(){
      if(this.data.timeout) clearTimeout(this.data.timeout);
      this.setData({timeout: false});
    }
  }
})