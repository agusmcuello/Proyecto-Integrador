import React from 'react';
import "./footer.css";
import logoBlanco from "../materiales/logo-blanco.png";
import iconoInstagram from "../materiales/iconoInstagram.png";
import iconoFacebook from "../materiales/iconoFacebook.png";
import iconoTwitter from "../materiales/iconoTwitter.png";


function Footer() {
  return (
    <footer>
      <hr />
      <div id="contenedorFooter">
        <img
          src={logoBlanco}
          alt="logo-blanco"
          width="110px"
          height="23px"
          id="logoBlanco"
        />
        <ul id="listaFooter">
          <li>Nosotros</li>
          <li>Noticias</li>
          <li>Contacto</li>
          <li>Términos y condiciones</li>
        </ul>
        <div id="footerIzquierda">
          <h4 id="seguinos">Seguinos!</h4>
          <div class="redes">
            <img
              width="30px"
              height="30px"
              id="instagram"
              src={iconoInstagram}
              alt="iconoInstagram"
            />
            <img
              src={iconoTwitter}
              alt="iconoTwitter"
            />
            <img
              src={iconoFacebook}
              alt="facebook"
            />
          </div>
        </div>
      </div>
      <hr />
  <p id="copyright">Copyright. All rights reserved.</p>
    </footer>
  )
}

export default Footer