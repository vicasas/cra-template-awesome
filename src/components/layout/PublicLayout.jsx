/**
 * LAYOUT PUBLIC
 *
 * En este archivo se arma el Layout Público de la aplicación, esta sera
 * la vista que vera el usuario en caso de una aplicación que cuente con
 * autenticación y el usuario no este logeado (páginas públicas).
 *
 * Por lo general su uso se basa en armar componentes repetitivos como por
 * ejemplo <Sidebar />, <Header />, <Footer /> entre otros.
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../../App.css'

export default function PublicLayout({ children }) {
  return (
    <div className='App'>
      <header className='App-header'>{children}</header>
    </div>
  )
}

PublicLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
