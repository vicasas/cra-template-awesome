/**
 * Routes
 *
 * Main router of the application.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFoundPage from '../../containers/NotFound'
import Home from '../../containers/Examples/ExampleApp'
import Signin from '../../containers/Examples/ExampleSingin'
import Dashboard from '../../containers/Examples/ExampleDashboard'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export default function Routes() {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Home} />
      <PublicRoute restricted exact path='/signin' component={Signin} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
