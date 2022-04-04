/**
 * converts JDN to Gregorian
 *
 * @param  {Number} jdn
 * @param  {Number} JD_OFFSET
 * @param  {Function} leapYear
 * @return {Number}
 */

import { JD_EPOCH_OFFSET_GREGORIAN } from './const'
import { isGregorianLeap } from './util'

interface date {
  year: number
  month: number
  day: number
}

export function jdnToGregorian(
  jdn: number,
  JD_OFFSET = JD_EPOCH_OFFSET_GREGORIAN,
  leapYear = isGregorianLeap
): date {
  const nMonths = 12
  const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const r2000 = (jdn - JD_OFFSET) % 730485
  const r400 = (jdn - JD_OFFSET) % 146097
  const r100 = r400 % 36524
  const r4 = r100 % 1461

  let n = (r4 % 365) + 365 * Math.floor(r4 / 1460)
  const s = Math.floor(r4 / 1095)

  const aprime =
    400 * Math.floor((jdn - JD_OFFSET) / 146097) +
    100 * Math.floor(r400 / 36524) +
    4 * Math.floor(r100 / 1461) +
    Math.floor(r4 / 365) -
    Math.floor(r4 / 1460) -
    Math.floor(r2000 / 730484)
  const year = aprime + 1
  const t = Math.floor((364 + s - n) / 306)
  let month =
    t * (Math.floor(n / 31) + 1) +
    (1 - t) * (Math.floor((5 * (n - s) + 13) / 153) + 1)
  n += 1 - Math.floor(r2000 / 730484)
  let day = n

  if (r100 === 0 && n === 0 && r400 !== 0) {
    month = 12
    day = 31
  } else {
    monthDays[2] = leapYear(year) ? 29 : 28
    for (let i = 1; i <= nMonths; i += 1) {
      if (n <= monthDays[i]) {
        day = n
        break
      }

      n -= monthDays[i]
    }
  }

  return { year, month, day }
}
