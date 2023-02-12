import * as echarts from '../../../ec-canvas/echarts';
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
    lineData:{onInit: initChart},
  },
})
// 初始化图表函数
function initChart(canvas, width, height, dpr) {
  height = height?height:240;
  let chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });

  let option = {
    title: {
      text: 'mmhg',
      y: '5%',
      x: '2%',
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal',
      },
    },
    color: ["#05c8ac", '#60A0ff'],  //线的颜色
    legend: {
      data: ['m压', 'h压'],     //标识哪个颜色对应哪个数据
      padding: 1,   //   内边距
      x: '30%',
      y: '6%',
    },
    grid: {
      top: '24%',
      left: '3%',
      right: '4%',
      bottom: '11%',
      containLabel: true
    },
    xAxis: {//x轴
      type: 'category',
      data: [1,2,3,4,5,6]
    },
    yAxis: {//y轴
      type: 'value'
    },
    series: [
      {
        data: [110,102,103,99,98,140],
        name: "m压",
        type: 'line',
        smooth: false,
        label: {
          show: true
        }
      },
      {
        data: [70,65,85,81,76,78],
        name: "h压",
        type: 'line',
        smooth: false,
        label: {
          show: true
        }
      }
    ],
    dataZoom: [
      {
        type: 'inside',// 内置于坐标系中
        show: false,
        left: 33, //滚动条靠左侧的百分比
        start: 0,
        end: 80,
        xAxisIndex: [0]
      }, {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0,//滚动条的起始位置
        end: 0.25 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

