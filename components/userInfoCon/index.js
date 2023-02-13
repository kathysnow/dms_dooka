import * as echarts from '../../ec-canvas/echarts';
Component({
  data: {
    ecData: {
      lazyLoad: true,
    },
    imgData: "/image/pic.png",
    level: "3级",
    userInfoLists: [
      {value: '张朝阳', class:"blodLab"},
      {value:'DY123231'},
      {value: '一级技工', class:"btnLab blockLab", isBtn:true, btnType:"dmsBlueBtn"},
      {label: '工龄',value:'--'},
      {label: '岗位',value:'--'},
    ],
  },
  attached: function () { 
    getApp().$globalFunciton.initDmsEcharts(this.selectComponent('#topEcharts'),84,"gauge")
  },
  moved: function () { },
  detached: function () { },
  methods: {}
})