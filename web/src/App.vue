<template>
  <div>
    <div class="box">
      <p>全国省份Id</p>
      <div class="box1" id="canvas" style="padding: 20px"></div>
    </div>

    <div class="box">
      <p>Echarts</p>
      <div class="box1" id="canvas2"></div>
    </div>

    <div class="box">
      <p>Echarts</p>
      <div class="box1" id="canvas3"></div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts'
import {Line} from '@antv/g2plot'
import {getProvince} from '@/api/web'

// https://echarts.apache.org/examples/zh/index.html

export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [
        {year: '1991', value: 3},
        {year: '1992', value: 4},
        {year: '1993', value: 3.5},
        {year: '1994', value: 5},
        {year: '1995', value: 4.9},
        {year: '1996', value: 6},
        {year: '1997', value: 7},
        {year: '1998', value: 9},
        {year: '1999', value: 13}
      ],
      info: null
    }
  },
  props: {},

  components: {},

  computed: {},

  mounted () {
    getProvince().then(({data}) => {
      this.info = data
      // G2Plot 折线图初始化
      this.linePlot = new Line('canvas', {
        data: this.info,
        xField: 'Name',
        yField: 'Id'
      })

      this.linePlot.render()
    })

    // Echarts 初始化
    this.myChart = echarts.init(document.getElementById('canvas2'))
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    this.myChart.setOption(this.option)

    this.myChart = echarts.init(document.getElementById('canvas3'))
    this.option = {
      title: {
        text: '基础雷达图'
      },
      legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          {name: '销售（Sales）', max: 6500},
          {name: '管理（Administration）', max: 16000},
          {name: '信息技术（Information Technology）', max: 30000},
          {name: '客服（Customer Support）', max: 38000},
          {name: '研发（Development）', max: 52000},
          {name: '市场（Marketing）', max: 25000}
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '预算分配（Allocated Budget）'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
        ]
      }]
    }
    this.myChart.setOption(this.option)
  },

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  p{
    padding: 20px 0px 0px 20px;
  }

  .box {
    margin: 20px auto;
    width: 800px;
    border: 1px solid gray;
    border-radius: 25px;
    box-shadow: 0 0 10px gray;
  }

  .box1 {
    margin: 0 auto;
    width: 800px;
    height: 500px;
    padding: 20px;
  }
</style>
