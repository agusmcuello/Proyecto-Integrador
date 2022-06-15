import React from 'react'
import "./nav.css"
import logo from "../materiales/logo.png"
const nav = () => {
  return (
    <nav>
      <img
        src={logo}
        width="100px"
        height="20px"
        id="logo"
        alt="Logo"
      />
      <ul class="lista">
        <li>
          <a href="#sec1"><b>Nosotros</b></a>
        </li>
        <li>
          <a href="#noticias"><b>Noticias</b></a>
        </li>
        <li>
          <a href="#contacto"><b>Ayuda</b></a>
        </li>
      </ul>
      <button id="boton">INGRESAR</button>
    </nav>
    
  )
}

export default nav