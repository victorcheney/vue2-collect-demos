/*
 * @Description: 总耗时中间件
 * @Author: chenfengtao
 * @Date: 2022-08-31 16:02:14
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-08-31 16:21:12
 */
module.exports = async (ctx, next) => {
  // 记录开始时间
  const start = Date.now()
  // 执行内层中间件
  await next()
  // 记录结束时间
  const end = Date.now()
  // 设置响应头时间 X-Response-Time
  const duration = end - start
  // ctx.set 设置响应头
  ctx.set('X-Response-Time', duration)
}
