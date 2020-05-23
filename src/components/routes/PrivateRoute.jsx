/* eslint-disable react/jsx-props-no-spreading */

/**
 * Public Routes
 *
 * This is a higher order component (HOC) for all routes defined as privates
 * in the application.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/authFake'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    // Shows the component only when the user is authenticated
    // otherwise, redirect to the path/signin.
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to='/signin' />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}
