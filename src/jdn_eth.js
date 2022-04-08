"use strict";
exports.__esModule = true;
exports.jdnToEthiopic = void 0;
var const_1 = require("./const");
/**
 * given a JDN and an era returns the Ethiopic equivalent
 *
 * @param  {Number} jdn
 * @param  {Number} era
 * @return {Object} { year, month, day }
 */
function jdnToEthiopic(jdn, era) {
    if (era === void 0) { era = const_1.JD_EPOCH_OFFSET_AMETE_MIHRET; }
    var r = (jdn - era) % 1461;
    var n = (r % 365) + 365 * Math.floor(r / 1460);
    var year = 4 * Math.floor((jdn - era) / 1461) +
        Math.floor(r / 365) -
        Math.floor(r / 1460);
    var month = Math.floor(n / 30) + 1;
    var day = (n % 30) + 1;
    return { year: year, month: month, day: day };
}
exports.jdnToEthiopic = jdnToEthiopic;
