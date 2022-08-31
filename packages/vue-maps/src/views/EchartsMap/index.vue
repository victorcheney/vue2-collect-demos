<template>
  <div class="map-container p-2">
    <button
      v-for="item in countryList"
      :key="item.type"
      class="mx-1 bg-blue-300 px-1 text-white rounded cursor-pointer hover:bg-blue-500"
      :class="{ 'bg-blue-500': currentCountry === item.type }"
      @click="handleClick(item.type, item.json, 'button')"
    >
      {{ $t(item.name) }}
    </button>

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
import { countryList } from './index'

export default {
  name: 'EchartMapDemo',
  props: {},
  components: { BaseChart },
  data() {
    return {
      countryList,
      options: Object.assign({}),
      currentCountry: '',
      currentJSON: '',
    }
  },
  computed: {},
  watch: {
    '$i18n.locale'() {
      this.handleClick(this.currentCountry, this.currentJSON)
    },
  },
  created() {},
  mounted() {
    const { type, json } = this.countryList[0]
    this.handleClick(type, json)
  },
  methods: {
    onHandleClick(params) {
      console.log(params)
    },
    handleClick(type, json, trigger) {
      this.currentJSON = json
      if (trigger === 'button' && this.currentCountry === type) {
        return
      }
      this.currentCountry = type
      const option = {}
      this.options = generateMapOption(
        [],
        { ...option },
        { mapType: type, geojson: json },
        this.$i18n.locale
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
