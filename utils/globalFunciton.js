import * as echarts from '../ec-canvas/echarts';
//菜单当前选中
function setTabBarIndex(o){
  if (typeof o.getTabBar === 'function' &&
    o.getTabBar()) {
    let ind = 0;
    const arr = o.getTabBar().data.list;
    arr.forEach((element,index) => {
      if(element.pageCode == o.data.pageName) ind = index;
    });
    o.getTabBar().setData({
      selected: ind
    })
  }
}

//获取显示像素，避免出现echarts失真
const getDpr = () => {
  let pixelRatio = 0;
  wx.getSystemInfo({
      success: (result) => {
          pixelRatio = result.pixelRatio
      },
      fail() {
          pixelRatio = 0
      }
  })
  return pixelRatio
}

function initDmsEcharts(chartObj, data, chartType) {
  //let chartObj = this.selectComponent('#streetlinechart')
  chartObj.init((canvas, width, height) => {
      const eChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: getDpr()
      })
      eChart.setOption(getOption(data, chartType))
      return eChart
  })
}
function getOption(data,chartType){
  if(chartType && chartType=="gauge"){
    return getGaugeOption(data);
  }else if(chartType && chartType=="line"){
    return getLineOption(data);
  }
}
function getGaugeOption(data) {
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
          width: 21,
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
            value: data
          }
        ]
      }
    ]
  };
  return option;
}
function getLineOption(data) {
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
  return option
}

export default {
  setTabBarIndex,
  initDmsEcharts
}