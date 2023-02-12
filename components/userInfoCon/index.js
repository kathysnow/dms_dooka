import * as echarts from '../../ec-canvas/echarts';
Component({
  data: {
    ecData:{onInit: initChart},
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
                  offset: 0, color: '#f393f9' // 0% 处的颜色
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
            value: 100
          }
        ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
