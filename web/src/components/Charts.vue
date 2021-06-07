<template>
  <div>
    <div class="box">
      <p>Ant Design Vue</p>
      <a-steps :current="1">
        <a-step>
          <template slot="title">Finished</template>
          <span slot="description">This is a description.</span>
        </a-step>
        <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>
    </div>

    <div class="box">
      <p>AntV —— G2Plot</p>
      <div class="box1" id="canvas"></div>
    </div>

    <div class="box">
      <p>Echarts</p>
      <div class="box1" id="canvas2"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { Line } from '@antv/g2plot'
require('echarts/lib/chart/bar')
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ]
    }
  },
  props: {},

  components: {},

  computed: {},

  mounted () {
    // G2Plot 折线图初始化
    this.linePlot = new Line('canvas', {
      data: this.data,
      xField: 'year',
      yField: 'value'
    })

    this.linePlot.render()

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
.box {
  margin: 20px auto;
  width: 800px;
  border: 1pxs solid gray;
  border-radius: 25px;
  box-shadow: 0 0 10px gray;
}
.box1 {
  margin: 0 auto;
  width: 800px;
  height: 500px;
}
</style>
