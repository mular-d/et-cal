import { printDate } from '..'

let date = new Date()

describe('printDate should print the passed date', () => {
  test('the current date', () => {
    expect(printDate(date)).toBe(date.toString())
  })
})
