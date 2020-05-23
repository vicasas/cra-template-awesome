/**
 * Redux
 *
 * This is a sample file to implement correct Redux
 *
 * Using HOOKS
 *
 * useSelector equals mapStateToProps()
 * useDispatch equals mapDispatchToProps()
 *
 * import React from 'react'
 * import { shallowEqual, useSelector, useDispatch } from 'react-redux'
 *
 * export default function ExampleReduxHooks() {
 *    const { test } = useSelector((state) => state.example, shallowEqual)
 *    const dispatch = useDispatch()
 *
 *    return <div>Hola Mundo</div>
 * }
 *
 * Using HOC
 *
 * import React from 'react'
 * import { connect } from 'react-redux'
 *
 * function ExampleRedux({ props }) {
 *    return <div>Hola Mundo</div>
 * }
 *
 * const mapStateToProps = ({}) => ({})
 *
 * const mapDispatchToProps = (dispatch) => ({})
 *
 * export default connect(mapStateToProps, mapDispatchToProps)(ExampleRedux)
 */
