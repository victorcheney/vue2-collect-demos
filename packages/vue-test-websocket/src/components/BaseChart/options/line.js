/**
 * 柱状图默认配置
 * @param {Array} data [{name: '', value: ''}]展示的数据
 * @param {Object} newOption 其他修改的配置，格式与option一致
 * @param {Object} geo e.g.{geo: 'china', geojson: ''}
 * @returns
 */
export const generateLineOption = (data, newOption = {}) => {
  const defaultOption = {
    loadCom: true,
    global: {
      fontFamily: 'Microsoft Yahei',
      fontColor: '#ccc',
      fontSize: 18,
      fontWeight: 'normal',
      margin: {
        top: 40,
        bottom: 50,
        left: 50,
        right: 10,
      },
      innerPadding: 20,
      outerPadding: 30,
      barWidth: 20,
      borderRadius: 0,
      background: {
        show: true,
        color: 'rgba(255, 255, 255, 0.06)',
        borderRadius: 0,
      },
    },
    title: {
      show: false,
      text: '主标题',
      left: 40,
      top: 10,
      textStyle: {
        fontFamily: 'Microsoft Yahei',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 'normal',
      },
      textAlign: 'middle',
      textVerticalAlign: 'middle',
      subText: '副标题',
      subtextStyle: {
        fontFamily: 'Microsoft Yahei',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 'normal',
      },
    },
    label: {
      show: false,
      position: 'top',
      textStyle: {
        fontFamily: 'Microsoft Yahei',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 'normal',
      },
      offsetX: 0,
      offsetY: 0,
    },
    xAxis: {
      show: true,
      type: 'category',
      boundaryGap: true,
      title: {
        show: true,
        name: 'X轴',
        location: 'center',
        display: {
          rotate: 0,
          offset: 20,
        },
        textStyle: {
          fontFamily: 'Microsoft Yahei',
          fontSize: 12,
          color: '#90a0ae',
          fontWeight: 'normal',
        },
      },
      axisLine: {
        show: true,
        type: 'solid',
        width: 1,
        color: 'rgba(255, 255, 255, 0.5)',
      },
      axisTick: {
        show: true,
        type: 'solid',
        width: 1,
        color: 'rgba(255, 255, 255, 0.5)',
      },
      axisLabel: {
        show: true,
        valueFormat: 'd',
        timeFormat: 'MM/DD',
        interval: 'auto',
        display: {
          rotate: 0,
          margin: 10,
        },
        align: 'center',
        textStyle: {
          fontFamily: 'Microsoft Yahei',
          fontSize: 12,
          color: 'rgba(0, 0, 0, 0.6)',
          fontWeight: 'normal',
        },
      },
      grid: {
        show: true,
        line: {
          type: 'dashed',
          width: 1,
          color: 'rgba(233, 228, 228, 0.1)',
          dashedLength: 4,
          dashedSpace: 4,
        },
      },
      data: data.map(item => item.name),
    },
    yAxis: {
      show: true,
      type: 'value',
      extent: {
        min: 'auto',
        max: 'auto',
      },
      splitNumber: 0,
      title: {
        show: false,
        name: 'Y轴',
        location: 'center',
        display: {
          rotate: 90,
          offset: 20,
        },
        textStyle: {
          fontFamily: 'Microsoft Yahei',
          fontSize: 12,
          color: '#90a0ae',
          fontWeight: 'normal',
        },
      },
      axisLine: {
        show: true,
        type: 'solid',
        width: 1,
        color: 'rgba(255, 255, 255, 0.5)',
      },
      axisTick: {
        show: true,
        type: 'solid',
        width: 1,
        color: 'rgba(255, 255, 255, 0.5)',
      },
      axisLabel: {
        show: true,
        valueFormat: 'auto',
        boundaryGap: 0,
        display: {
          rotate: 0,
          margin: 8,
        },
        align: 'right',
        textStyle: {
          fontFamily: 'Microsoft Yahei',
          fontSize: 12,
          color: 'rgba(0, 0, 0, 0.6)',
          fontWeight: 'normal',
        },
      },
      grid: {
        show: true,
        line: {
          type: 'dashed',
          width: 1,
          color: 'rgba(233, 228, 228, 0.1)',
          dashedLength: 4,
          dashedSpace: 4,
        },
      },
    },
    tooltip: {
      show: true,
      textStyle: {
        fontFamily: 'Microsoft Yahei',
        fontSize: 14,
        color: '#fff',
        fontWeight: 'normal',
      },
      background: {
        padding: {
          h: 5,
          v: 5,
        },
        color: 'rgba(0, 0, 0, 0.65)',
      },
      pointer: {
        show: true,
        line: {
          type: 'dashed',
          width: 1,
          color: '#f5dc69',
          dashedLength: 4,
          dashedSpace: 4,
        },
      },
    },
    legend: {
      show: true,
      position: 'top-center',
      orient: 'horizontal',
      textStyle: {
        fontFamily: 'Microsoft Yahei',
        fontSize: 12,
        color: '#90a0ae',
        fontWeight: 'normal',
      },
      symbol: {
        show: true,
        icon: 'auto',
        width: 25,
        height: 14,
        gap: 10,
      },
      page: {
        enabled: false,
        size: {
          width: 100,
          height: 100,
        },
        button: {
          size: 15,
          color: '#000',
          inactiveColor: '#000',
        },
        pageNumColor: '#90a0ae',
      },
    },
    series: [
      {
        data: data.map(item => item.value),
        type: 'line',
      },
    ],
    animation: {
      enabled: true,
      duration: 1000,
      delay: 0,
    },
  }

  const options = Object.assign({}, defaultOption, newOption)
  return options
}
