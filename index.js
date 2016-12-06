var moment = require('moment-timezone')

/**
 * Wrapper around debug
 * 
 * @param {string} label
 * @param {string} [timestampFormat='DD MMMM YY hh:mm:ss'] - format of the timestamp
 * @param {string} [timezone='Asia/Tbilisi'] - timezone of timestamp
 * @returns
 */
module.exports = function debugTimezone(label, timestampFormat, timezone) {
  timestampFormat = timestampFormat === undefined ? 'DD MMMM YY HH:mm:ss' : timestampFormat
  timezone = timezone === undefined ? 'Asia/Tbilisi' : timezone
  
  var debug = require('debug')
  debug.formatArgs = function () {
    var len = arguments.length;
    var args = new Array(len);
    var useColors = this.useColors;
    var name = this.namespace;
    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }

    if (useColors) {
      var c = this.color;

      args[0] = '  \u001b[3' + c + ';1m' + name + ' '
        + '\u001b[0m'
        + args[0];
      args.push('\u001b[3' + c + 'm+' + debug.humanize(this.diff) + '\u001b[0m');
    } else {
      var date = moment(new Date()).tz(timezone).format(timestampFormat)
      args[0] = date
        + ' ' + name + ' ' + args[0];
    }
    return args;
  }

  return debug(label)
}
