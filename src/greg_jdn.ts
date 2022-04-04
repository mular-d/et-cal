import { JD_EPOCH_OFFSET_GREGORIAN } from './const'

/**
 * given year, month and day of Gregorian returns JDN
 *
 * @param  {Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @param  {Number} JD_OFFSET
 * @return {Number}
 */

export function gregorianToJDN(
  year = 1,
  month = 1,
  day = 1,
  JD_OFFSET: number = JD_EPOCH_OFFSET_GREGORIAN
): number {
  const s =
    Math.floor(year / 4) -
    Math.floor((year - 1) / 4) -
    Math.floor(year / 100) +
    Math.floor((year - 1) / 100) +
    Math.floor(year / 400) -
    Math.floor((year - 1) / 400)
  const t = Math.floor((14 - month) / 12)
  const n =
    31 * t * (month - 1) +
    (1 - t) * (59 + s + 30 * (month - 3) + Math.floor((3 * month - 7) / 5)) +
    day -
    1
  const j =
    JD_OFFSET +
    365 * (year - 1) +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400) +
    n

  return j
}
