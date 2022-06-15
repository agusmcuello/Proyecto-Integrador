import React from 'react'
import "./contacto.css"
import computadora from "../materiales/laptop-escritorio.jpg"

function Contacto() {
  return (
    <section id="contacto">
      <div id="contenedorImagenContacto">
        <img id="imgContacto"
          src={computadora}
          alt=""
          width="75%"
          height="50%"
        />
      </div>
      <div id="contenedorContacto">
        <h1 id="tituloContacto">Contacto</h1>
        <br />
        <form action="contacto">
          <div id="contenedorFormulario">
            <div id="contenedorFormularioUno">
              <label for="dato" class="textoArt"
                >Texto dato <br /><input
                  type="text"
                  size="30px"
                  placeholder="Dato a completar"
                  class="textoDato"
              /></label>
              <br />
              <label for="dato" class="textoArt"
                >Texto dato <br  /><input
                  type="text"
                  size="30px"
                  placeholder="Dato a completar"
                  class="textoDato"
              /></label>
            </div>
            <br />
            <div id="contenedorFormularioDos">
              <label class="textoArt" for="mensaje" id="tituloMensaje"
                >Mensaje <br /><input
                  type="text"
                  placeholder="Escriba su mensaje aquí"
                  id="textoMensaje"
              /></label>
            </div>
          </div>
          <br />
          <button id="botonEnviar">ENVIAR</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto