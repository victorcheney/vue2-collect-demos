/*
 * @Description: 获取数据中间件
 * @Author: chenfengtao
 * @Date: 2022-08-31 16:02:13
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-08-31 17:18:44
 */
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  const url = ctx.request.url // /api/seller
  // 拼接文件路径
  let filePath = url.replace('/api', '') // /seller
  filePath = `../data/${filePath}.json`
  filePath = path.join(__dirname, filePath)

  try {
    const rst = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = rst
  } catch (error) {
    const errorMsg = {
      status: 404,
      message: '读取文件失败，文件资源不存在',
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }

  await next()
}
