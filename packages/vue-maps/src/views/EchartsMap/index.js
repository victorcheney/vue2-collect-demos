const china = require('../../../public/geojson/china/china.json')
const russia = require('../../../public/geojson/russia/russia.simple.json')
const brazil = require('../../../public/geojson/brazil/brazil.simple.json')
const india = require('../../../public/geojson/india/india.simple.json')
const southAfrica = require('../../../public/geojson/south-africa/south-africa.json')

export const countryList = [
  {
    name: 'map.china',
    type: 'china',
    json: china,
    center: [104.195397, 35.86166],
  },
  {
    name: 'map.russia',
    type: 'russia',
    json: russia,
    center: [105.318756, 61.52401],
  },
  {
    name: 'map.brazil',
    type: 'brazil',
    json: brazil,
    center: [-51.92528, -14.235004],
  },
  {
    name: 'map.india',
    type: 'india',
    json: india,
    center: [78.96288, 20.593684],
  },
  {
    name: 'map.southAfrica',
    type: 'south-africa',
    json: southAfrica,
    center: [22.937506, -30.559482],
  },
]
