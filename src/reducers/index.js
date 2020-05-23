/**
 * combineReducers()
 *
 * This file is used to combine reducers using combineReducers().
 * This is the only exit point to be able to interact with the
 * states of the application.
 *
 * Follow this format:
 * import { combineReducers } from 'redux'
 * import exampleReducer from './example' // we import the reducer
 *
 * export default combineReducers({
 *    example: () => ({
 *      exampleReducer, // or use example: exampleReducer
 *    }),
 * })
 */

import { combineReducers } from 'redux'

export default combineReducers({
  example: () => ({}),
})
