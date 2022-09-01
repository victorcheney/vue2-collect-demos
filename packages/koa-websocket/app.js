// 1.创建koa对象
const Koa = require('koa')
const app = new Koa()
// 2.绑定中间件
// 第一层记录耗时中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 第二层设置响应头中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
// 第三层业务中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
// 3.绑定端口号
app.listen(3000)
console.log('服务已启动', 'http://localhost:3000')

const WebSocket = require('ws')
// 创建websocket服务端对象
const wss = new WebSocket.Server({
  port: 5000,
})
// 对客户端连接事件进行监听
// client: 代表客户端的连接socket对象
wss.on('connection', client => {
  console.log('客户端连接成功...')
  // 监听结束消息事件
  // msg: 前端发送的message消息
  client.on('message', msg => {
    console.log(`接收到消息${msg}`)
    // 向客户端发送消息
    client.send('hello socket')
  })
})
