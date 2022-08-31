/*
 * @Description: 请求头中间件
 * @Author: chenfengtao
 * @Date: 2022-08-31 16:02:10
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-08-31 16:31:56
 */
module.exports = async (ctx, next) => {
  const contentType = 'application/json; charset=utf-8'
  ctx.set('Content-Type', contentType)
  ctx.response.body = '{"success": true}'
  await next()
}
