import * as type from './type'
import * as date from './date'
import * as other from './other'
const f = Object.assign({
  AUTHOR: 'Hanger',
  VERSION: '0.1.3'
}, type, date, other)

window.f = f
export default f
