/**
 * @packageDocumentation A library for changing between ethiopian and gregorian calender based on Beyene-Kudlek algorithm.
 * For more info look at: http://www.geez.org/Calendars
 */

import { jdnToEthiopic } from './jdn_eth'
import { jdnToGregorian } from './jdn_greg'
import { ethToJDN } from './eth_jdn'
import { gregorianToJDN } from './greg_jdn'

import {
  JD_EPOCH_OFFSET_AMETE_MIHRET,
  GREGORIAN_MONTH,
  ETHIOPIC_MONTH,
  DAY,
} from './const'
/**
 * Convert from ethiopian calender to gregorian
 *
 * @param {number} year - Ethiopian year
 * @param {ETHIOPIC_MONTH} month - Ethiopian month
 * @param {DAYS} day - Ethiopian day
 *
 * @public
 */

export function ethToGreg(
  year: number,
  month: ETHIOPIC_MONTH = 1,
  day: DAY = 1
): { year: number; month: number; day: number } {
  const era: number = JD_EPOCH_OFFSET_AMETE_MIHRET
  const date = jdnToGregorian(ethToJDN(+year, month, day, era))
  return date
}

/**
 * Convert from gregorian calender to ethiopian
 *
 * @param {number} year - Gregorian year
 * @param {GREGORIAN_MONTH} month - Gregorian month
 * @param {DAY} day - Gregorian day
 *
 * @public
 */

export function gregToEth(
  year = 0,
  month: GREGORIAN_MONTH = 1,
  day: DAY = 1
): { year: number; month: number; day: number } {
  if (year === 0 && month === 1 && day === 1) {
    const now = new Date()
    const nowYear = now.getFullYear()
    const nowMonth = now.getMonth() + 1
    const nowDay = now.getDate()
    return jdnToEthiopic(gregorianToJDN(nowYear, nowMonth, nowDay))
  }
  const date = jdnToEthiopic(gregorianToJDN(+year, month, day))
  return date
}
