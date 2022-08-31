<template>
  <div class="map-container" id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'MapContainer',
  props: {},
  components: {},
  data() {
    return {
      map: null,
      AMap: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initMap()
  },
  methods: {
    // 初始化地图
    async initMap() {
      const AMap = await AMapLoader.load({
        key: '7e1bc22cb61eefa914a4b1e4a3707f70', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      /* .then(AMap => {})
        .catch(e => {
          console.log(e)
        }) */
      this.AMap = AMap
      this.map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 5, // 初始化地图级别
        center: [105.602725, 37.076636], // 初始化地图中心点位置
        mapStyle: 'amap://styles/darkblue', // 地图主题
      })
      this.map.addControl(new AMap.ToolBar())
      this.map.addControl(new AMap.Scale())

      this.addMarker(116.39, 39.9)
    },
    // 添加点标记
    addMarker(lng, lat) {
      const marker = new this.AMap.Marker({
        position: new this.AMap.LngLat(lng, lat),
      })
      this.map.add(marker)
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.map-container {
  height: 100%;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
<style>
#container .amap-logo {
  display: none !important;
  opacity: 0;
}
#container .amap-copyright {
  display: none !important;
}
</style>
