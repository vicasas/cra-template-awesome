/**
 * Add an additional 0 to numbers less than 9 to remain in a two-digit
 * format.
 *
 * @param {number} value  a number less than 9
 *
 * @return {string} a string with an additional 0 to the left
 */
export function padLeadingZero(value) {
  return value > 9 ? value : `0${value}`
}

/**
 * Format a date, style dd/mm/yyyy.
 *
 * @param {Date} [date] default is current date
 *
 * @return {string}     a date formatted style dd/mm/aaaa
 */
export function getFormatDate(date = new Date()) {
  return `${padLeadingZero(date.getDate())}/${padLeadingZero(
    date.getMonth() + 1,
  )}/${date.getFullYear()}`
}

/**
 * Format an hour, style hh:mm:ss
 *
 * @param {*} [date]  default is current date
 *
 * @return {string}   a hour formatted style hh:mm:ss
 */
export function getFormatTime(date = new Date()) {
  return `${padLeadingZero(date.getHours())}:${padLeadingZero(
    date.getMinutes(),
  )}:${padLeadingZero(date.getSeconds())}`
}

/**
 * Format a date with time, style dd/mm/aaaa hh:mm:ss
 *
 * @return {string} date plus time with format dd/mm/aaaa hh:mm:ss
 */
export function getFormatDateTime() {
  return `${getFormatDate()} ${getFormatTime()}`
}
