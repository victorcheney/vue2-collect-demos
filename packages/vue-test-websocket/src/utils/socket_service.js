import store from '@/store/index.js'

class SocketService {
  // socket实例，单例模式
  static instance = null
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  // socket对象
  ws = null

  // 存储回调函数
  callbackMapping = {}

  // 服务连接状态
  connected = false

  // 重新发送尝试的次数
  retryCount = 0

  // 重新连接尝试的次数
  connectRetryCount = 0

  /**
   * 连接socket服务
   */
  connect() {
    // 连接服务端
    if (!window.WebSocket) {
      return console.log('当前浏览器不支持WebSocket')
    }
    this.ws = new WebSocket('ws://localhost:5000')

    // 连接成功事件
    this.ws.onopen = () => {
      console.log('连接服务器成功')
      this.connected = true
      // 重置
      this.connectRetryCount = 0
    }

    // 1.连接服务器失败
    // 2.当连接成功后，服务器关闭的情况
    this.ws.onclose = () => {
      console.log('连接服务器失败')
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, 500 * this.connectRetryCount)
    }

    // 得到服务器发送过来的数据
    this.ws.onmessage = msg => {
      console.log('从服务器获取到数据：', msg.data)
      const recvData = JSON.parse(msg.data)
      const { socketType, action } = recvData
      store.dispatch('setRecvMsg', recvData)
      // 判断sockettype是否存在
      if (this.callbackMapping[socketType]) {
        if (action === 'GET_DATA') {
          const realData = JSON.parse(recvData.data)
          this.callbackMapping[socketType].call(this, realData)
        } else if (action === 'FULLSCREEN') {
          console.log(action)
        }
      }
      // 图表交互
      if (action === 'INTERACT') {
        const recvParams = recvData.params
        Object.values(this.callbackMapping).forEach(widget => {
          // 图表对象设置互动参数
          recvParams.forEach(item => {
            widget.params.forEach(wItem => {
              if (item.shareCode === wItem.shareCode) {
                wItem.value = item.value
              }
            })
          })

          widget.loadData()
        })
      }
    }
  }

  // 回调函数注册
  registerCallback(socketType, callback) {
    this.callbackMapping[socketType] = callback
  }

  // 取消某个回调函数注册
  unRegiserCallback(socketType) {
    this.callbackMapping[socketType] = null
  }

  // 定义发送数据的方法
  send(data = {}) {
    console.log('发送：', JSON.stringify(data))
    if (this.connected) {
      this.ws.send(JSON.stringify(data))
      this.retryCount = 0
    } else {
      this.retryCount++
      // 延时重新发送
      setTimeout(() => {
        this.ws.send(JSON.stringify(data))
      }, 500 * this.retryCount)
    }
  }
}

export default SocketService
