/**
 * combineReducers()
 *
 * En este archivo se hace la combinación de los reducers usando
 * combineReducers(). Este es el único punro de salida para poder
 * interactuar con los estados de la aplicación.
 *
 * Sigue este formato:
 * import { combineReducers } from 'redux'
 * import exampleReducer from './example' // importamos el reducer
 *
 * export default combineReducers({
 *    example: () => ({
 *      exampleReducer, // ó usar example: exampleReducer
 *    }),
 * })
 */

import { combineReducers } from 'redux'

export default combineReducers({
  example: () => ({}),
})
