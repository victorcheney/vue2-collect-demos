/*
 * @Description: 获取数据中间件
 * @Author: chenfengtao
 * @Date: 2022-08-31 16:02:13
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-09-02 15:26:05
 */
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  const url = ctx.request.url.split('?')[0] // /api/seller
  const limit = ctx.query.limit
  // 拼接文件路径
  let filePath = url.replace('/api', '') // /seller
  filePath = `../data/${filePath}.json`
  filePath = path.join(__dirname, filePath)

  try {
    const rst = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = JSON.stringify(JSON.parse(rst).splice(0, limit))
  } catch (error) {
    const errorMsg = {
      status: 404,
      message: '读取文件失败，文件资源不存在',
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }

  await next()
}
