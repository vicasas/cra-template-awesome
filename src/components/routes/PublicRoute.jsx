/* eslint-disable react/jsx-props-no-spreading */

/**
 * PUBLIC ROUTE
 *
 * El componente <PublicRoute /> es un componente de orden superior para
 * todas las rutas definidas como públicas en la aplicación.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/auth'

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
