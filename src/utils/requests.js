/**
 * Parsea el JSON devuelto por una solitiud http.
 *
 * @param {object} response una respuesta de solicitud de red
 *
 * @return {object}         el JSON parseado de la solicitud
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }

  return response.json()
}

/**
 * Comprueba la respuesta http de una solicitud. Arroja un error si no.
 *
 * @param {object} response   una respuesta de solicitud de red
 *
 * @return {object|undefined} devuelve la respuesta o arroja un error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Crea una nueva URL en base al endpoint más la URL base.
 *
 * @param {string} endpoint la url del punto final que queremos solicitar
 *
 * @return {string}         devuelve la url final de la solicitud
 */
function createURL(endpoint) {
  const baseURL = '' // configurar tu URL base
  return `${baseURL}${endpoint}`
}

/**
 * Request a URL, retorna una promise.
 *
 * @param {string} endpoint   la url del punto final que queremos solicitar
 * @param {object} [options]  las opciones que queremos pasar a "buscar"
 *
 * @return {object}           los datos de respuesta
 */
export default function request(endpoint, options = {}) {
  const defaults = {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  return window
    .fetch(createURL(endpoint), defaults)
    .then(checkStatus)
    .then(parseJSON)
}
