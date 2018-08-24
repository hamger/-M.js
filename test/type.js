import {isString, isFunction} from '../src/type'

describe('type', () => {
  it('isString use to check the type of number', () => {
    expect(isString('asdfas')).toBe(true)
  })
})

describe('type', () => {
  it('isFuction use to check the type of function', () => {
    expect(isFunction(console.log)).toBe(true)
  })
})
