/**
 * LAYOUT
 *
 * En este archivo viven los diferentes tipos de componentes Layout.
 */

import React from 'react'
import Route from '../routes'
import PublicLayout from './PublicLayout'

export default function Layout() {
  return (
    <PublicLayout>
      <Route />
    </PublicLayout>
  )
}
