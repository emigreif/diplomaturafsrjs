import React from "react";
const HomePage = (props) => {
  return (
    <main ClassName="holder">
      <div>
        <img src="/img/home/img01.jpg" alt="" />
      </div>
      <div ClassName="quienessomos">
        <h2>Quienes Somos</h2>

        <p>
          Greif Consultants es una empresa que surge tras años de asesoria a
          empresas del rubro de la mano de dos de las empresas de mas
          importancia en la argentina para la fabricacion de perfiles tanto de
          aluminio y PVC viendo la problematica comun que se enfrenta cada
          carpintero en el ejercicio diario de esta profesion dedicada a ayudar
          a fabricantes de carpinteria de Aluminio y PVC, o aquellos que esten
          por embarcarse en este rubro, a obtener los mejores resultados
          mejorando la producción, imagen de marca, desarrollo comercial,
          elaboracion de estrategias, difusion web, diseño de layouts, entre
          otros servicios.
        </p>
        <p>
          Contamos con un grupo interdisciplinario formado por diseñadores web,
          comunity managers, fotografos, diseñadores graficos, tecnicos para
          fabricacion y puesta en marcha de talleres, asesores con mas de 15
          años de experiencia en el rubro, brindando la respuesta integral
          necesaria que para el carpintero logre elevar el potencia lde su
          empresa al maximo
        </p>
        <p ClassName="potencial">
          ¡Es tu oportunidad de conocernos y alcanzar tu maximo potencial!
        </p>
      </div>
    </main>
  );
};

export default HomePage;
