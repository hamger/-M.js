import * as type from './type'
import * as date from './date'
import * as other from './other'
const F = Object.assign({
  AUTHOR: 'Hanger',
  VERSION: '0.1.0'
}, type, date, other)

window.F = F
export default F
