const path = require('path')
const fileUtils = require('../utils/file_utils')
const WebSocket = require('ws')
// 创建websocket服务端对象
const wss = new WebSocket.Server({
  port: 5000,
})

// 服务端开启了监听
module.exports.listen = () => {
  // 对客户端连接事件进行监听
  // client: 代表客户端的连接socket对象
  wss.on('connection', client => {
    console.log('客户端连接成功...')
    // 监听结束消息事件
    // msg: 前端发送的message消息
    client.on('message', async msg => {
      console.log(`接收到消息${msg}`)
      const payload = JSON.parse(msg)
      const { action, chartName } = payload
      if (action === 'GET_DATA') {
        let filePath = `../data/${chartName}.json`
        filePath = path.join(__dirname, filePath)
        const rst = await fileUtils.getFileJsonData(filePath)
        // 在接收的数据基础上增加一个data属性，对应的值为读取json的数据
        payload.data = rst
        client.send(JSON.stringify(payload))
      } else if (action === 'INTERACT') {
        wss.clients.forEach(client => {
          client.send(JSON.stringify(JSON.parse(msg)))
        })
      } else {
        // 原封不动将所接收到的数据转发给每一个连接的客户端
        wss.clients.forEach(client => {
          client.send(JSON.stringify(JSON.parse(msg)))
        })
      }
    })
  })
}
