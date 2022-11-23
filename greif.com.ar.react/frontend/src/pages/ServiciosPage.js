import React from "react";
const Servicios = (props) => {
  return (
    <main className="holder">
      <h2>Nuestros servicios</h2>
      <div className="conteservicios">
        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (5).jfif" alt="" />
            <h4>asesoria de presupuestos y ventas</h4>
            <p>
              A veces no se alcanza el ideal de venta esperado, y muchas veces
              es necesario entender cuales son los factores influyentes para que
              decidan optar por otras propuestas
            </p>
            <p className="serv">
              {" "}
              analizamos el conjunto de factores y con ello podemos determinar
              las estrategias para aumentar la relacion entre presuepuestos y
              obras contratadas{" "}
            </p>
          </div>
        </div>
        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (2).jfif" alt="" />
            <h4>asesoria de fabricacion</h4>
            <p>
              muchas veces los talleres tiene rotacion de personal el cual es
              dificil de conseguir y muchas veces vienen con vicios y malas
              practicas{" "}
            </p>
            <p className="serv">
              {" "}
              ofrecemos capacitaciones tanto iniciales como de actualizacion y
              mejora para lograr el mejor resultado en la fabricacion
            </p>
          </div>
        </div>

        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (1).jfif" alt="" />
            <h4>auditoria de obras</h4>
            <p>
              muchas veces a la hora de realizar el montaje de las carpinterias
              se encuentran muchos inconvenientes en obra que no logran dar con
              el resultado final esperado.
            </p>
            <p className="serv">
              Ofrecemos un servicio de auditoria donde buscamos poder determinar
              el causante del inconveniente, luego de cada auditoria se
              realizara un informe con lo relevado y las posibles soluciones.
            </p>
          </div>
        </div>

        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (3).jfif" alt="" />
            <h4>marketing digital</h4>
            <p>
              hoy el cliente ha evolucionado mucho y se informa sobre los
              productos y empresas antes de concretar una operacion, como el
              cliente percibe la empresa por los distintos medios digitales es
              un factor preponderante al momento de elegirnos
            </p>

            <p className="serv">
              nuestro servicio de comunity manager ofrece un servicio de
              desarrolo de material para ayudar a mantener una buena presencia
              continua en las redes y apuntada al publico que deseamos alcanzar
            </p>
          </div>
        </div>
        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (4).jfif" alt="" />
            <h4>fotografia de obra</h4>
            <p>
              muchas veces los clientes buscan ver trabajos que hayamos
              realizado y las fotos que tenemos no son las mas favorecedoras a
              la hora de vendernos.
            </p>

            <p className="serv">
              {" "}
              Ofrecemos un servicio de fotografia en el que un fotografo los
              acompañara a las obras para sacar fotos profesionales de sus
              trabajos, taller o proceso que deseen fotografiar, se enviaran
              todas las fotos crudas o editadas segun acuerdo con el cliente
            </p>
          </div>
        </div>
        <div className="servicio">
          <div className="info">
            <img src="/img/servicios/img (6).jfif" alt="" />
            <h4>diseño web</h4>
            <p>
              si bien hoy el cliente nos busca en redes sociales para ver
              nuestro trabajo siempre es bueno tener una buena pagina web
              institucional donde el cliente pueda ver reflejada la seriedad de
              nuestra empresa, esto le dara confianza y seguridad.{" "}
            </p>
            <p className="serv">
              ofrecemos un servicio de desarrollo web para diseñar sitios
              dinamicos apuntados a maximizar las ventas{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Servicios;
