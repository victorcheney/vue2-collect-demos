const china = require('../../../public/geojson/china/china.json')
const russia = require('../../../public/geojson/russia/russia.simple.json')
const brazil = require('../../../public/geojson/brazil/brazil.simple.json')
const india = require('../../../public/geojson/india/india.simple.json')
const southAfrica = require('../../../public/geojson/south-africa/south-africa.json')

export const countryList = [
  {
    name: '中国',
    type: 'china',
    json: china,
    center: [104.195397, 35.86166],
  },
  {
    name: '俄罗斯',
    type: 'russia',
    json: russia,
    center: [105.318756, 61.52401],
  },
  {
    name: '巴西',
    type: 'brazil',
    json: brazil,
    center: [-51.92528, -14.235004],
  },
  {
    name: '印度',
    type: 'india',
    json: india,
    center: [78.96288, 20.593684],
  },
  {
    name: '南非',
    type: 'south-africa',
    json: southAfrica,
    center: [22.937506, -30.559482],
  },
]
