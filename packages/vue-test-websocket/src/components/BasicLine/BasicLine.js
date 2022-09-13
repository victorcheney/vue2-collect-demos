import store from '@/store/index.js'
import axios from 'axios'
import qs from 'qs'
import { EChartsWidget } from '../../model/Widget'
import { generateLineOption } from '../BaseChart/options/line'

export default class BasicLine extends EChartsWidget {
  constructor() {
    super('BasicLine')

    this.loadData()
  }

  config = generateLineOption([])

  params = [
    {
      code: 'limit',
      shareCode: 'limit',
      value: 4,
    },
    {
      code: 'name',
      shareCode: 'name',
      value: '全部',
    },
  ]

  async loadData() {
    let param = {}
    this.params.forEach(item => {
      param[item.shareCode] = item.value
    })

    const tempParam = JSON.parse(JSON.stringify(param))

    param = qs.stringify(param)

    const rst = await axios.get(`http://localhost:3000/api/seller?${param}`)
    const { data } = rst
    this.config = generateLineOption(data)

    store.dispatch('setApiParams', {
      ...store.state.apiParams,
      ...{
        [`line_${this.id}`]: tempParam,
      },
    })
  }
}
