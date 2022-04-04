import {
  JD_EPOCH_OFFSET_AMETE_MIHRET,
  JD_EPOCH_OFFSET_AMETE_ALEM,
} from './const'

/**
 * determines if a Gregorian year is leap year or not
 *
 * @param  {Number}  year
 * @return {Boolean}
 */
export function isGregorianLeap(year = 1): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

/**
 * guesses ERA from JDN
 *
 * @param  {Number} jdn
 * @return {Number}
 */
export function guessEra(
  jdn: number,
  JD_AM = JD_EPOCH_OFFSET_AMETE_MIHRET,
  JD_AA = JD_EPOCH_OFFSET_AMETE_ALEM
): number {
  return jdn >= JD_AM + 365 ? JD_AM : JD_AA
}
