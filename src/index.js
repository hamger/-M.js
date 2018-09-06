import * as type from './type'
import * as date from './date'
import * as string from './string'
import * as other from './other'
const f = Object.assign(type, date, other, string)

window.f = f
export default f
