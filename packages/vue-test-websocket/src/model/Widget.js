import { nanoid } from 'nanoid'

export class BaseWidget {
  id
  name
  type

  // 属性
  attrs = { width: 400, height: 300 }

  constructor(name, attrs = {}) {
    this.id = nanoid()
    this.name = name
    this.attrs = Object.assign({}, { ...this.attrs }, { ...attrs })
  }

  /**
   * 加载数据
   */
  loadData() {}
}

/* echarts图表类 */
export class EChartsWidget extends BaseWidget {
  config = {}
}
