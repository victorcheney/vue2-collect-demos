<template>
  <div class="dashboard">
    <button @click="addWidget">添加组件</button> limit:
    <select name="" id="" v-model="limit">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    name:
    <select name="" id="" v-model="region">
      <option value="北京">北京</option>
      <option value="山东">山东</option>
    </select>
    <component
      class="widget-item"
      v-for="item in widgetList"
      :key="item.id"
      :is="item.name"
      :widget="item"
    ></component>
  </div>
</template>

<script>
import BasicBar from '@/components/BasicBar/BasicBar.js'

export default {
  name: 'Dashboard',
  props: {},
  components: {},
  data() {
    return {
      widgetList: [],
      limit: 1,
      region: '北京',
    }
  },
  computed: {},
  watch: {
    limit() {
      this.send('limit', this.limit)
    },
    region() {
      this.send('region', this.region)
    },
  },
  created() {},
  mounted() {},
  methods: {
    addWidget() {
      const widget = new BasicBar()
      console.log('widget', widget)
      this.$socket.registerCallback(widget.id, widget)
      this.widgetList.push(widget)
    },
    send(field, value) {
      this.$socket.send({
        action: 'INTERACT',
        socketType: '',
        params: [
          {
            code: field,
            shareCode: field,
            value: value,
            runtimeValue: value,
          },
        ],
      })
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.dashboard {
  height: 100%;
}
.widget-item {
  width: 50%;
}
</style>
