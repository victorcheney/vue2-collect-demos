<template>
  <div class="map-container">
    <button @click="handleClick('china', chinaGeojson)">中国</button>
    <button @click="handleClick('russia', rusGeojson)">俄罗斯</button>
    <button @click="handleClick('brazil', braGeojson)">巴西</button>
    <button @click="handleClick('india', indGeojson)">印度</button>
    <button @click="handleClick('south-africa', zafGeojson)">南非</button>
    <BaseChart
      :options="options"
      height="100%"
      @click="onHandleClick"
    ></BaseChart>
  </div>
</template>

<script>
import { generateMapOption } from '@/components/BaseChart/options/map.js'
import BaseChart from '@/components/BaseChart/index.vue'
const chinaGeojson = require('../../../public/geojson/china/china.json')
const rusGeojson = require('../../../public/geojson/russia/russia.simple.json')
const braGeojson = require('../../../public/geojson/brazil/brazil.simple.json')
const indGeojson = require('../../../public/geojson/india/india.simple.json')
const zafGeojson = require('../../../public/geojson/south-africa/south-africa.json')

export default {
  name: 'EchartMapDemo',
  props: {},
  components: { BaseChart },
  data() {
    return {
      chinaGeojson,
      rusGeojson,
      braGeojson,
      indGeojson,
      zafGeojson,
      options: Object.assign({}),
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleClick('india', indGeojson)
  },
  methods: {
    onHandleClick(params) {
      console.log(params)
    },
    handleClick(type, json) {
      const option = {}
      this.options = generateMapOption(
        [],
        { ...option },
        { mapType: type, geojson: json }
      )
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.map-container {
  height: 800px;
}
</style>
