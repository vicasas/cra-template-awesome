/**
 * Private Layout
 *
 * In this file the Private Layout of the application is created, this
 * will be the view that the user will see in the case of an application
 * that has authentication and the user is logged in.
 *
 * In general, its use is based on assembling repetitive components such
 * as: <Sidebar />, <Header />, <Footer />.
 */

import React from 'react'
import PropTypes from 'prop-types'

export default function PrivateLayout({ children }) {
  return (
    <div className='App'>
      <header className='App-header'>{children}</header>
    </div>
  )
}

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
