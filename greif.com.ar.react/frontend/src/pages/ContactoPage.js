import React from "react";
import '../styles/pages/Contacto.css'
const Contacto = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <div className="formcont">
          <h2>¿Donde nos encontramos?</h2>
          <div className="mapa">
            <iframe
              className="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=castelar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className="datos">
          <h2>datos de contacto</h2>
          <p>
            tambien podes contarte con nosotros usando los siguientes medios
          </p>
          <ul>
            <li>telefono:+54 9 11 4044 1004 </li>
            <li>email: greifconsultants@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="formdat">
        <div>
          <h2>completa tus datos</h2>
        </div>
        <div>
          <script
            src="https://www.emailmeform.com/builder/forms/jsform/ccbX1Ff7Ifq5ZBMJ0Di3a90wE"
            type="text/javascript"
          ></script>
        </div>
      </div>
    </main>
  );
};
export default Contacto;
