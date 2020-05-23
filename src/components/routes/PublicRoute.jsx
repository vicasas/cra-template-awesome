/* eslint-disable react/jsx-props-no-spreading */

/**
 * Public Routes
 *
 * This is a higher order component (HOC) for all routes defined as public
 * in the application.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/authFake'

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  restricted: PropTypes.bool,
}

PublicRoute.defaultProps = {
  restricted: false,
}
