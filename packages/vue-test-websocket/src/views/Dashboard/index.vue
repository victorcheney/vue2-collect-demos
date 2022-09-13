<template>
  <div class="dashboard">
    <button @click="addWidget">添加组件</button>
    <button @click="addLineWidget">添加折线组件</button>
    limit:
    <select name="" id="" v-model="limit">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    name:
    <select name="" id="" v-model="name">
      <option value="全部">全部</option>
      <option value="谷类">谷类</option>
      <option value="豆类">豆类</option>
      <option value="油料作物">油料作物</option>
    </select>
    <div class="container">
      <div class="widget-container">
        <component
          class="widget-item"
          v-for="item in widgetList"
          :key="item.id"
          :is="item.name"
          :widget="item"
        ></component>
      </div>
      <div class="msg">
        <div class="msg-item">
          <h5>发送消息：</h5>
          <pre>{{ sendMsg }}</pre>
        </div>
        <div class="msg-item">
          <h5>接收消息：</h5>
          <pre>{{ recvMsg }}</pre>
        </div>
        <div class="msg-item">
          <h5>接口参数：</h5>
          <pre>{{ apiParams }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicBar from '@/components/BasicBar/BasicBar.js'
import BasicLine from '@/components/BasicLine/BasicLine.js'

export default {
  name: 'Dashboard',
  props: {},
  components: {},
  data() {
    return {
      widgetList: [],
      limit: 1,
      name: '全部',
    }
  },
  computed: {
    sendMsg() {
      return this.$store.state.sendMsg
    },
    recvMsg() {
      return this.$store.state.recvMsg
    },
    apiParams() {
      return this.$store.state.apiParams
    },
  },
  watch: {
    limit() {
      this.send('limit', this.limit)
    },
    name() {
      this.send('name', this.name)
    },
  },
  created() {},
  mounted() {},
  methods: {
    addWidget() {
      const widget = new BasicBar()
      this.$socket.registerCallback(widget.id, widget)
      this.widgetList.push(widget)
    },
    addLineWidget() {
      const widget = new BasicLine()
      this.$socket.registerCallback(widget.id, widget)
      this.widgetList.push(widget)
    },
    send(field, value) {
      const msg = {
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
      }

      this.$store.dispatch('setSendMsg', msg)

      this.$socket.send(msg)
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.dashboard {
  height: 100%;
}
.container {
  display: flex;
}
.widget-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.widget-item {
  width: 50%;
}
.msg {
  width: 300px;
}
.msg-item {
  width: 50%;
  text-align: left;
}
</style>
