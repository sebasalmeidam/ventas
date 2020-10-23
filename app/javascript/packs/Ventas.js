import React from 'react'
import ReactDOM from 'react-dom'
import ContenedorVentas from '../components/ventas/ContenedorVentas'

document.addEventListener('DOMContentLoaded', () => {
  const VentasContainer = document.getElementById('react-ventas')
  const data = JSON.parse(document.getElementById('props').getAttribute('data'))
  ReactDOM.render(
    <ContenedorVentas {...data} />,
    VentasContainer
  )
})