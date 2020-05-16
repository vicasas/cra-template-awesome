/* eslint-disable react/jsx-props-no-spreading */

/**
 * PRIVATE ROUTE
 *
 * El componente <PrivateRoute /> es un componente de orden superior para
 * todas las rutas definidas como privadas en la aplicación.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/auth'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    // Muestra el componente solo cuando el usuario esta autenticado.
    // en caso contrario, redireccione a la ruta /signin
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
