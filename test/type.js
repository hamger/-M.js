import {
  isString,
  isFunction,
  isObject,
  isUndefined,
  isBoolean,
  isNull,
  isStrOrNum,
  isNumber,
  isArray,
  isDef
} from '../src/type'

describe('type', () => {
  it('isString use to check the type of String', () => {
    expect(isString('asdfas')).toBe(true)
  })
  it('isFunction use to check the type of Function', () => {
    expect(isFunction(console.log)).toBe(true)
  })
  it('isObject use to check the type of Object', () => {
    expect(isObject({ a: 23 })).toBe(true)
  })
  it('isArray use to check the type of Array', () => {
    expect(isArray([{ a: 23 }])).toBe(true)
  })
  it('isNumber use to check the type of Number', () => {
    expect(isNumber(1234)).toBe(true)
  })
  it('isBealoon use to check the type of Bealoon', () => {
    expect(isBoolean(false)).toBe(true)
  })
  it('isUndefined use to check the type of Undefined', () => {
    var a
    expect(isUndefined(a)).toBe(true)
  })
  it('isNull use to check the type of Null', () => {
    expect(isNull(null)).toBe(true)
  })
  it('isStrOrNum use to check the type of Number or String', () => {
    expect(isStrOrNum(1234)).toBe(true)
    expect(isStrOrNum('1234')).toBe(true)
  })
  it('isDef use to check the variate defined', () => {
    var a
    expect(isDef(a)).toBe(false)
  })
})
