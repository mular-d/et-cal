import { gregToEth, ethToGreg } from '..'

describe('should convert from gregorian to ethiopian date and vice versa', () => {
  test('gregorian to ethiopic date', () => {
    expect(gregToEth(2022, 4, 4)).toEqual({
      year: 2014,
      month: 7,
      day: 26,
    })
  })
  test('ethiopic to gregorian date', () => {
    expect(ethToGreg(2014, 7, 26)).toEqual({
      year: 2022,
      month: 4,
      day: 4,
    })
  })
})
