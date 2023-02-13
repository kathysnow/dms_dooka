Component({
  properties:{
    title: {
      type: String,
      value: "--"
    },
    description: {
      value: false
    },
  },
  data: {
    lineData:{
      lazyLoad: true,
    },
  },
  attached: function () { 
    getApp().$globalFunciton.initDmsEcharts(this.selectComponent('#lineEcharts'),[],"line")
  },
  moved: function () { },
  detached: function () { },
  methods: {}
})
