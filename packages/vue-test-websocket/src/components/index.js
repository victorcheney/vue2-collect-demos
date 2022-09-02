/*
 * @Description: 动态注册全局组件
 * @Author: chenfengtao
 * @Date: 2021-07-07 10:13:38
 * @LastEditors: chenfengtao
 * @LastEditTime: 2022-09-02 14:23:02
 */
const allComponents = require.context('./', true, /\.vue$/)

export default Vue => {
  allComponents.keys().forEach(item => {
    const name = item
      .replace(/\.\//, '')
      .replace(/\/index/, '')
      .replace(/\.vue$/, '')
    console.log(name, allComponents(item).default)
    Vue.component(name, allComponents(item).default)
  })
}
