import * as type from './type'
import * as date from './date'
import * as other from './other'
const f = Object.assign(type, date, other)

window.f = f
export default f
