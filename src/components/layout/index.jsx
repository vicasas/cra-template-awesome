/**
 * Layout
 *
 * In this file the different types of Layouts interact.
 */

import React from 'react'
import Routes from '../routes'
import PublicLayout from './PublicLayout'
import PrivateLayout from './PrivateLayout'
import isLogin from '../../utils/auth'

export default function Layout() {
  return (
    <>
      {!isLogin() ? (
        <PublicLayout>
          <Routes />
        </PublicLayout>
      ) : (
        <PrivateLayout>
          <Routes />
        </PrivateLayout>
      )}
    </>
  )
}
