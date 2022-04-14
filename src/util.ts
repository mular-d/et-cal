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
 * determines if a Ethiopian year is leap year or not
 *
 * @param {number} year
 * @return {boolean} 
 */
export function isEthiopianLeap(year = 1): boolean {
  return year % 4 === 3
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

/**
 * datermines the day name based on date
 * @param {number} date
 * @returns {string} dayName
 */
export function dayNames(date: number): string {
  const dateNames = ['ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ', 'እሑድ']
  if (dateNames[date]) {
    return dateNames[date]
  } else return 'undefined'
}

export function monthNames(month: number): string {
  const monthNames = [
    'መስከረም',
    'ጥቅምት',
    'ኅዳር',
    'ታኅሣሥ',
    'ጥር',
    'የካቲት',
    'መጋቢት',
    'ሚያዝያ',
    'ግንቦት',
    'ሰኔ',
    'ሐምሌ',
    'ነሐሴ',
    'ጳጉሜን',
  ]
  if (monthNames[month]) {
    return monthNames[month]
  } else return 'undefined'
}
