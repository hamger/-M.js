import {isString} from '../src/type'

describe('type', () => {
  it('isString use to check the type of number', () => {
    expect(isString('asdfas')).toBe(true)
  })
})
