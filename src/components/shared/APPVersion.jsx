/**
 * APP VERSION
 *
 * Componente que indica la versión actual de la aplicación
 * usando el package.json.
 */

import React from 'react'
import { version } from '../../../package.json'

export default function APPVersion() {
  return <div>{version}</div>
}
