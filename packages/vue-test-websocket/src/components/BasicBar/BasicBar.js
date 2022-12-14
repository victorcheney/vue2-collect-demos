import store from '@/store/index.js'
import axios from 'axios'
import qs from 'qs'
import { EChartsWidget } from '../../model/Widget'
import { generateBarOption } from '../BaseChart/options/bar'

export default class BasicBar extends EChartsWidget {
  constructor() {
    super('BasicBar')

    this.loadData()
  }

  config = generateBarOption([])

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
    /* const rst = await axios.post(
      'http://localhost:3000/api/seller',
      qs.stringify({
        limit: 3,
      })
    ) */
    const { data } = rst
    this.config = generateBarOption(data)

    store.dispatch('setApiParams', {
      ...store.state.apiParams,
      ...{
        [`bar_${this.id}`]: tempParam,
      },
    })
  }
}
