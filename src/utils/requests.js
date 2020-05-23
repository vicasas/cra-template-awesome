/**
 * Parse the JSON returned by an http request.
 *
 * @param {object} response a network request response
 *
 * @return {object}         the parsed JSON of the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }

  return response.json()
}

/**
 * Check the http response of a request. Throw an error if not.
 *
 * @param {object} response   a network request response
 *
 * @return {object|undefined} returns the answer or throws an error
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
 * Create a new URL based on the endpoint plus the base URL.
 *
 * @param {string} endpoint the url of the endpoint that we want to request
 *
 * @return {string}         returns the final url of the request
 */
function createURL(endpoint) {
  const baseURL = '' // configure your base url
  return `${baseURL}${endpoint}`
}

/**
 * Request to URL, returns a promise.
 *
 * @param {string} endpoint   the url of the endpoint that we want to request
 * @param {object} [options]  the options we want to move to "search"
 *
 * @return {object}           the response data
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
