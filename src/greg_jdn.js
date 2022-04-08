"use strict";
exports.__esModule = true;
exports.gregorianToJDN = void 0;
var const_1 = require("./const");
/**
 * given year, month and day of Gregorian returns JDN
 *
 * @param  {Number} year
 * @param  {Number} month
 * @param  {Number} day
 * @param  {Number} JD_OFFSET
 * @return {Number}
 */
function gregorianToJDN(year, month, day, JD_OFFSET) {
    if (year === void 0) { year = 1; }
    if (month === void 0) { month = 1; }
    if (day === void 0) { day = 1; }
    if (JD_OFFSET === void 0) { JD_OFFSET = const_1.JD_EPOCH_OFFSET_GREGORIAN; }
    var s = Math.floor(year / 4) -
        Math.floor((year - 1) / 4) -
        Math.floor(year / 100) +
        Math.floor((year - 1) / 100) +
        Math.floor(year / 400) -
        Math.floor((year - 1) / 400);
    var t = Math.floor((14 - month) / 12);
    var n = 31 * t * (month - 1) +
        (1 - t) * (59 + s + 30 * (month - 3) + Math.floor((3 * month - 7) / 5)) +
        day -
        1;
    var j = JD_OFFSET +
        365 * (year - 1) +
        Math.floor((year - 1) / 4) -
        Math.floor((year - 1) / 100) +
        Math.floor((year - 1) / 400) +
        n;
    return j;
}
exports.gregorianToJDN = gregorianToJDN;
