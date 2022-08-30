<template>
  <div class="base-chart" :style="{ width: width, height: height }"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'BaseChart',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '400px',
    },
    options: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      chart: null,
    }
  },
  computed: {},
  watch: {
    options: {
      handler(nv) {
        this.chart.setOption(nv)
      },
      deep: true,
    },
  },
  created() {},
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption(this.options)
      this.chart.on('click', this.handleClick)
    },
    handleClick(params) {
      this.$emit('click', params)
    },
    resizeHandler() {
      this.chart.resize()
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    window.removeEventListener('resize', this.resizeHandler)
  },
}
</script>

<style scoped>
.base-chart {
  height: 100%;
}
</style>
