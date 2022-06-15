import React from 'react';
import "./tarjetas.css";
import iconoMas from "../materiales/icono-mas.png";
import iconoMano from "../materiales/icono-mano.png";
import iconoManoCorazon from "../materiales/icono-mano-corazon.png";
import iconoReciclar from "../materiales/icono-reciclar.png";
import iconoMaletin from "../materiales/icono-maletin.png";


function Tarjetas() {
  return (
    <article id="sec2">
      <div id="oportunidades">
        <h2>Encuentra las mejores oportunidades</h2>
        <br />
        <p class="textoArt">
          La plataforma cuenta con una gran variedad de proyectos
          locales(sociales, educativos y medioambientales), donde <br />
          encontrarás el que mejor se adapte a la experiencia que estas
          buscando.
          <br />
          Te ayudamos en la coordinación con la gran organización de forma
          simple y rápida.
        </p>
      </div>
      <div id="contenedorTarjetas">
        <div class="tarjeta" id="serVoluntario">
          <img
            class="iconoTarjeta"
            id="manoVoluntario"
            src={iconoMano}
            alt="icono-mano"
          />
          <img
            class="iconoMas"
            src={iconoMas}
            alt="icono-mas"
          />
          <h2 class="tituloTarjeta" id="tituloVoluntario">Ser voluntario</h2>
        </div>
        <div class="tarjeta" id="donar">
          <img
            class="iconoTarjeta"
            src={iconoManoCorazon}
            alt="icono-mano-corazon"
          />
          <img
            class="iconoMas"
            src={iconoMas}
            alt="icono-mas"
          />
          <h2 class="tituloTarjeta">Donar</h2>
        </div>
        <div class="tarjeta" id="reciclar">
          <img
            class="iconoTarjeta"
            src={iconoReciclar}
            alt="icono-reciclar"
          />
          <img
            class="iconoMas"
            src={iconoMas}
            alt="icono-mas"
          />
          <h2 class="tituloTarjeta">Reciclar</h2>
        </div>
        <div class="tarjeta" id="llamadosLaborales">
          <img
            class="iconoTarjeta"
            src={iconoMaletin}
            alt="icono-maletin"
          />
          <img
            class="iconoMas"
            src={iconoMas}
            alt="icono-mas"
          />
          <h2 class="tituloTarjeta">Llamados laborales</h2>
        </div>
      </div>
    </article>
  )
}

export default Tarjetas