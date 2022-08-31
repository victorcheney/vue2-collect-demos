<template>
  <div class="echarts-extention-map" ref="echarts-map"></div>
</template>

<script>
import * as echarts from 'echarts'
import AMapLoader from '@amap/amap-jsapi-loader'
import 'echarts-extension-amap'
import { chartData } from './index'

export default {
  name: 'EchartsExtensionAMap',
  props: {},
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const that = this
    this.initMap(function () {
      that.initChart(chartData)
    })
  },
  methods: {
    initChart(data) {
      const chart = echarts.init(this.$el)

      chart.setOption({
        animation: false,
        amap: {
          viewMode: '3D', // 是否为3D地图模式
          zoom: 5, // 初始化地图级别
          center: [108.39, 39.9], // 初始化地图中心点位置
          mapStyle: 'amap://styles/darkblue', // 地图主题
          // mapStyle: 'amap://styles/whitesmoke', // 地图样式白色
          renderOnMoving: true,
          echartsLayerZIndex: 2000,
          resizeEnable: true,
          echartsLayerInteractive: true,
          largeMode: false,
        },
        series: [
          {
            name: 'PM2.5',
            type: 'scatter',
            // use `amap` as the coordinate system
            coordinateSystem: 'amap',
            // data items [[lng, lat, value], [lng, lat, value], ...]
            data: data,
            symbolSize: function (val) {
              return val[2] / 10
            },
            encode: {
              value: 2,
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false,
            },
            itemStyle: {
              normal: {
                color: '#00c1de',
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'amap',
            data: data
              .sort(function (a, b) {
                return b.value - a.value
              })
              .slice(0, 6),
            symbolSize: function (val) {
              return val[2] / 10
            },
            encode: {
              value: 2,
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
            itemStyle: {
              color: '#fff',
              shadowBlur: 10,
              shadowColor: '#333',
            },
            zlevel: 1,
          },
        ],
      })
    },
    // 初始化地图
    async initMap(cb) {
      const AMap = await AMapLoader.load({
        key: '7e1bc22cb61eefa914a4b1e4a3707f70', // 申请好的Web端开发者Key，首次调用 load 时必填
        // version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      /* .then(AMap => {})
        .catch(e => {
          console.log(e)
        }) */
      this.AMap = AMap
      /* this.map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 5, // 初始化地图级别
        center: [105.602725, 37.076636], // 初始化地图中心点位置
        mapStyle: 'amap://styles/darkblue' // 地图主题
      })
      this.map.addControl(new AMap.ToolBar())
      this.map.addControl(new AMap.Scale()) */

      cb && cb()
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.echarts-extention-map {
  height: 100%;
  position: relative;
}
</style>
