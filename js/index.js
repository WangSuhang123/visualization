
// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "苹果黑星病",
          "葡萄黑腐病",
          "番茄叶斑病"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "缺陷数量",
        type: "bar",
        barWidth: "35%",
        data: [
          {
            value: 50,
            itemStyle: {
              color: '#4c9bfd'
            }
          },
           {
          value: 500,
          itemStyle: {
            color: 'green'
          }
        }, 
        {
          value: 150,
          itemStyle: {
            color: 'yellow'
          }
        },
      ],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [100,100,100,100,100,100,100,100,100,100],
      [100,100,100,100,100,100,100,100,100,100],
      [100,100,100,100,100,100,100,100,100,100]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#4c9bfd", "green","yellow"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "苹果黑星病",
        type: "line",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "葡萄黑腐病",
        type: "line",
        smooth: true,
        data: data.year[1]
      },
      {name: "番茄叶斑病",
      type: "line",
      smooth: true,
      data: data.year[2]}
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  option = {
    grid: {
      top: "10%",
      left: "9%",
      bottom: "10%",
      right:'3%'
      },
    xAxis: {},
    yAxis: {},
    series: [
      {
        color:"yellow",
        symbolSize: 10,
        data: [
          [1, 0.29],
          [2, 0.18],
          [3, 0.24],
          [4, 0.20],
          [5, 0.21],
          [6, 0.17],
          [7, 0.16],
          [8, 0.18],
          [9, 0.25],
          [10, 0.30],
          [11, 0.12],
          [12, 0.18],
          [13,0.23],
          [14, 0.23],
          [15, 0.14],
          [16, 0.19],
          [17, 0.24],
          [18, 0.23],
          [19, 0.21],
          [20, 0.27],
          [21, 0.17],
          [22, 0.24]
        ],
        type: 'scatter',
        
      }
    ]
  };

  

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };


  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
