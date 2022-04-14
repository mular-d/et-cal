import { gregToEth, ethToGreg, fullEthDate } from '..'

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

// Test the current date
describe('should return the current ethiopian date', () => {
  const date = gregToEth()
  test('return ethiopian date', () => {
    expect(gregToEth()).toEqual(date)
  })
})

describe('get full ethiopian date', () => {
  test('pass ethiopian date to get the full string', () => {
    expect(fullEthDate(2014, 7, 30)).toEqual('ዓርብ፣ መጋቢት 30 ቀን 2014 ዓ/ም')
  })
  test('pass gregoraian date to get the ethiopian date full string', () => {
    expect(fullEthDate(2022, 4, 8, false)).toEqual('ዓርብ፣ መጋቢት 30 ቀን 2014 ዓ/ም')
  })
  test('get pagume/month-13 date full string', () => {
    expect(fullEthDate(2014, 13, 4)).toEqual('ዓርብ፣ ጳጉሜን 4 ቀን 2014 ዓ/ም')
  })
})

describe('validate parameter values when passed', () => {
  test('return error when passing invalid month when converting from gregorian to ethiopian', () => {
    expect(gregToEth(2022, 13, 12)).toEqual('Month should be between 1 and 12')
  })
  test('return error when passing invalid date when converting from gregorian to ethiopian', () => {
    expect(gregToEth(2022, 12, 34)).toEqual('Day should be between 1 and 31')
  })
  test('return error when passing invalid month when converting from ethiopian to gregorian', () => {
    expect(ethToGreg(2014, 15, 25)).toEqual('Month should be between 1 and 13')
  })
  test('return error when passing invalid date when converting from ethiopian to gregorian', () => {
    expect(ethToGreg(2014, 12, 31)).toEqual('Day should be between 1 and 30')
  })
  test('return error when passing invalid date in pagume in non leap year when converting from ethiopian to gregorian', () => {
    expect(ethToGreg(2014, 13, 6)).toEqual('Day should be between 1 and 5')
  })
  test('return gregorian value when passing pagume 6 in ethiopian leap year when converting from ethiopian to gregorian', () => {
    expect(ethToGreg(2015, 13, 6)).toEqual({
      day: 11,
      month: 9,
      year: 2023,
    })
  })
})
