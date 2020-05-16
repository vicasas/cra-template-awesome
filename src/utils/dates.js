/**
 * Añade un 0 adicional a los números menores a 9 para quedar con un
 * formato de dos dígitos.
 *
 * @param {number} value  un número menor a 9
 *
 * @return {string} un string con un 0 adicinal a la izquierda
 */
export function padLeadingZero(value) {
  return value > 9 ? value : `0${value}`
}

/**
 * Formatea una fecha, estilo dd/mm/aaa.
 *
 * @param {Date} [date] por defecto es la fecha actual
 *
 * @return {string}     una fecha formateada estilo dd/mm/aaaa
 */
export function getFormatDate(date = new Date()) {
  return `${padLeadingZero(date.getDate())}/${padLeadingZero(
    date.getMonth() + 1,
  )}/${date.getFullYear()}`
}

/**
 * Formatea una hora, estilo hh:mm:ss
 *
 * @param {*} [date]  por defecto es la fecha actual
 *
 * @return {string}   una hora formateada estilo hh:mm:ss
 */
export function getFormatTime(date = new Date()) {
  return `${padLeadingZero(date.getHours())}:${padLeadingZero(
    date.getMinutes(),
  )}:${padLeadingZero(date.getSeconds())}`
}

/**
 * Formatea una fecha con hora, estilo dd/mm/aaaa hh:mm:ss
 *
 * @return {string} fecha más hora con formato dd/mm/aaaa hh:mm:ss
 */
export function getFormatDateTime() {
  return `${getFormatDate()} ${getFormatTime()}`
}
