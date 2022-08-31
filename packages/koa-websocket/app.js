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
