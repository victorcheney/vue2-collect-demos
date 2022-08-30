import { mapLabels } from '@/constant/mapZhEnName.js'
import * as echarts from 'echarts'

/**
 * 地图默认配置
 * @param {Array} data 展示的数据
 * @param {Object} newOption 其他修改的配置，格式与option一致
 * @param {Object} geo e.g.{geo: 'china', geojson: ''}
 * @returns
 */
export const generateMapOption = (data, newOption, geo, lang = 'en') => {
  if (geo.mapType) {
    echarts.registerMap(geo.mapType, geo.geojson)
  }
  const defaultOption = {
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      // min: data.mapChartDataMin,
      // max: data.mapChartDataMax,
      text: ['高', '低'],
      realtime: false,
      calculable: true,
      seriesIndex: [0],
      inRange: {
        color: ['#C1EAFF', '#007DFE', '#011AFB'],
      },
      bottom: 10,
      left: 15,
      itemWidth: 10,
      itemHeight: 100,
      textStyle: {
        color: '#666',
      },
    },
    series: [
      {
        name: geo.mapType,
        type: 'map',
        mapType: geo.mapType,
        roam: true,
        // nameProperty: 'NAME_0',
        label: {
          show: true,
          color: '#fff',
          textBorderColor: '#C1EAFF',
          textBorderWidth: 0.3,
          formatter: params => {
            const { seriesName, name } = params

            if (lang === 'zh') {
              return seriesName === 'china' ? name : mapLabels[seriesName][name]
            } else if (lang === 'en') {
              return seriesName === 'china' ? mapLabels[seriesName][name] : name
            }
          },
        },
        // 高亮样式设置
        emphasis: {
          disabled: false,
          label: {
            color: '#666',
            textBorderColor: 'transparent',
            textBorderWidth: 0,
          },
          itemStyle: {
            areaColor: '#FEBE5C',
          },
        },
        tooltip: {
          formatter: function (para) {
            if (typeof para.data !== 'undefined') {
              return para.data.name + '：' + para.data.value
            } else {
              return para.name
            }
          },
        },
        itemStyle: {
          areaColor: '#C1EAFF',
          borderColor: '#ffffff',
          borderWidth: 0.5,
        },
        data,
      },
    ],
  }

  const options = Object.assign({}, defaultOption, newOption)
  return options
}
