/**
 *  Computes the Julian day number of the given Coptic or Ethiopic date.
 *  This method assumes that the JDN epoch offset has been set. This method
 *  is called by copticToGregorian and ethiopicToGregorian which will set
 *  the jdn offset context.
 *
 *  @param {Number} year year in the Ethiopic calendar
 *  @param {Number} month month in the Ethiopic calendar
 *  @param {Number} day date in the Ethiopic calendar
 *  @param {Number} era [description]
 *
 *  @return {Number} The Julian Day Number (JDN)
 */

export function ethToJDN(
  year: number,
  month: number,
  day: number,
  era: number
): number {
  return (
    era + 365 + 365 * (year - 1) + Math.floor(year / 4) + 30 * month + day - 31
  )
}
