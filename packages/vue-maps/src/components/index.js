/*
 * @Description: 动态注册全局组件
 * @Author: chenfengtao
 * @Date: 2021-07-07 10:13:38
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-08-30 15:10:42
 */
const allComponents = require.context('./', true, /\.vue$/)

export default Vue => {
  allComponents.keys().forEach(item => {
    console.log(allComponents(item).default)
    Vue.component(
      item
        .replace(/\.\//, '')
        .replace(/\/index/)
        .replace(/\.vue$/, ''),
      allComponents(item).default
    )
  })
}
