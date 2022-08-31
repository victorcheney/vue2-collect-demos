// 1.创建koa对象
const Koa = require('koa')
const app = new Koa()
// 2.绑定中间件
// 第一层中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 第二层中间件

// 第三层中间件

// 3.绑定端口号
app.listen(3000)
console.log('服务已启动', 'http://localhost:3000')
