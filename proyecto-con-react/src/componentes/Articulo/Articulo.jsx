import React from 'react'
import "./articulo.css"
import imagenEmpresa from "../materiales/oficina.png";
import imagenVoluntarios from "../materiales/voluntariado.jpg";

const Articulo = () => {
  return (
    <article id="sec1">
      <div id="contenedorEmpresa">
        <img
          src={imagenEmpresa}
          alt="oficina"
          width="35%"
          height="210px%"
        />
        <div id="textoEmpresa">
          <h2>Soluciones para empresas</h2>
          <p class="textoArt">
            Generamos un medio para que las empresas se involucren en <br />
            actividades de responsabilidad social. <br />
            ¡Creá un grupo de voluntarios en tu organización y se parte del
            <br />
            cambio!.
          </p>
        </div>
      </div>
      <div id="contenedorVoluntariado">
        <div id="voluntariado">
          <h2>Soluciones para organizaciones</h2>
          <p class="textoArt">
            Apoyamos a las organizaciones sociales para que alcancen sus <br />
            objetivos. Ponemos a su disposición una comunidad de voluntarios
            <br />
            dispuestos a apoyarlas en sus necesidades. <br />
            Equipos de voluntarios por empresas dispuestos a potenciar tu <br />
            impacto en la sociedad.
          </p>
        </div>
        <img
          src={imagenVoluntarios}
          width="35%"
          height="210px"
          alt="voluntariado"
        />
      </div>
    </article>
  )
}

export default Articulo