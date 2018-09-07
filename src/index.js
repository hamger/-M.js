import * as type from './type'
import * as date from './date'
import * as string from './string'
import * as array from './array'
import * as object from './object'
import * as other from './other'
const f = Object.assign(type, date, other, string, array, object)

window.f = f
export default f
