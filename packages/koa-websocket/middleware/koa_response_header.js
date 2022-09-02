/*
 * @Description: 请求头中间件
 * @Author: chenfengtao
 * @Date: 2022-08-31 16:02:10
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-09-02 15:17:47
 */
module.exports = async (ctx, next) => {
  const contentType = 'application/json; charset=utf-8'
  ctx.set('Content-Type', contentType)
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  // ctx.response.body = '{"success": true}'
  await next()
}
