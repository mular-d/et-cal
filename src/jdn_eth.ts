import { JD_EPOCH_OFFSET_AMETE_MIHRET } from './const'

/**
 * given a JDN and an era returns the Ethiopic equivalent
 *
 * @param  {Number} jdn
 * @param  {Number} era
 * @return {Object} { year, month, day }
 */

export function jdnToEthiopic(
  jdn: number,
  era: number = JD_EPOCH_OFFSET_AMETE_MIHRET
): { year: number; month: number; day: number } {
  const r = (jdn - era) % 1461
  const n = (r % 365) + 365 * Math.floor(r / 1460)

  const year =
    4 * Math.floor((jdn - era) / 1461) +
    Math.floor(r / 365) -
    Math.floor(r / 1460)
  const month = Math.floor(n / 30) + 1
  const day = (n % 30) + 1

  return { year, month, day }
}
