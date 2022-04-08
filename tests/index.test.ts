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
// describe('should return the current ethiopian date', () => {
//   test('return ethiopian date', () => {
//     expect(gregToEth()).toEqual({
//       year: 2014,
//       month: 7,
//       day: 29,
//     })
//   })
// })

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
