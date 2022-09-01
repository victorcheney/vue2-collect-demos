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

  callbackMapping = {}

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
    }
    // 连接成功事件
    this.ws.onclose = () => {
      console.log('连接服务器失败')
    }
    // 得到服务器发送过来的数据
    this.ws.onmessage = msg => {
      console.log('从服务器获取到数据：', msg.data)
      const recvData = msg.data
      const { socketType, action } = recvData
      // 判断sockettype是否存在
      if (this.callbackMapping[socketType]) {
        if (action === 'GET_DATA') {
          const realData = JSON.parse(recvData.data)
          this.callbackMapping[socketType].call(this, realData)
        } else if (action === 'FULLSCREEN') {
          console.log(action)
        }
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
    this.ws.send(JSON.stringify(data))
  }
}

export default SocketService
