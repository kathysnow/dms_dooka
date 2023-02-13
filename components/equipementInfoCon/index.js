import * as echarts from '../../ec-canvas/echarts';
Component({
  data: {
    ecData: {
      lazyLoad: true,
    },
    imgData: "/image/pic.png",
    mationInfoLists: [
      {value: 'xxx生产线', class:"blodLab blockLab"},
      {label: '信息',value:'--'},
      {label: '备注',value:'--', class:"blockLab"},
    ],
  },
  attached: function () { 
    getApp().$globalFunciton.initDmsEcharts(this.selectComponent('#topEcharts'),84,"gauge")
  },
  moved: function () { },
  detached: function () { },
  methods: {}
})
// 初始化图表函数
function initChart(canvas, width, height, dpr) {
  let chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });

  let option = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '50%'],
        radius: "100%",
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28,
          itemStyle:{
            color:{
              type: 'radial',
              x: 0.3,
              y: 0.7,
              r: 1,
              colorStops: [{
                  offset: 0.6, color: '#f393f9' // 0% 处的颜色
                }, {
                  offset: 1, color: '#5785e6' // 100% 处的颜色
              }],
            }
          }
        },
        pointer: {
          show: false
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 28
          }
        },
        axisTick: {
          show:false
        },
        splitLine: {
          show:false
        },
        axisLabel: {
          show:false
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show:false,
        },
        data: [
          {
            value: 84
          }
        ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
