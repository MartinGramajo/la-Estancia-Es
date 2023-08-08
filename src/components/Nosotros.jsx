import React from "react";
import { Image } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Nosotros() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center tamaño-bold mt-5 mb-4">
          Parte de nuestra historia
        </h1>
        <p className="cursiva fs-6 mt-0 px-3 mb-5 tamaño-bold">
          "Hace años teníamos una carta de platos para cuando nos visitaban
          amigos, cosas caseras que, cocinaban nuestras madres y otras que
          descubrimos en viajes y viviendo en España. De ahí surgió,
          informalmente, la idea de poner un Restaurant. <br />
          El negocio nos encantó, teníamos mucha incertidumbre respecto a qué
          pasaría con la Pandemia, pero tomamos el local y nos juntamos con unos
          amigos cocineros; dos españoles y uno argentino y les contamos la
          idea: -¡Queremos hacer lo mismo que en casa!. Queremos poder presentar
          en un restaurante las alcachofas que hacía mi mamá o las milanesas a
          caballo que nos hacía el papá de mi mujer. Queremos poner los rollitos
          que comimos en México y el Salmón que degustamos en París. ¡Toda una
          locura!. <br />
          Estamos seguros que el negocio nos encontró a nosotros, estamos
          seguros que seguiremos aprendiendo y mejorando pero, estamos felices,
          porque nuestros clientes se sienten como en casa. <br />
          Por ahí dicen que, lo mejor está por venir, estamos despiertos,
          estamos viviendo nuestro sueño. "
        </p>
        <div className="d-flex justify-content-center mt-5">
          <Image
            src="https://res.cloudinary.com/laestancia/image/upload/v1647274014/linea_scckik_hyhbax.jpg"
            fluid
            alt="linea divisoria"
          />
        </div>
        {/* <div className="container text-center">
          <h1 className="mb-4 tamaño-bold ">Videos</h1>
          
          <div className="contender-video d-flex justify-content-center mt-4">
            <ReactPlayer
              className="react-player"
              url="https://res.cloudinary.com/laestancia/video/upload/v1647274798/Videos/La_Estancia_1_wxtqif_vfm0p1.mp4"
              width="75%"
              height="75%"
              controls
            />
          </div>
          <div className="contender-video d-flex justify-content-center mt-4">
            <ReactPlayer
              className="react-player"
              url="https://res.cloudinary.com/laestancia/video/upload/v1647281009/Videos/La_Estancia_2_wglj0o_gvzi3k.mp4"
              width="75%"
              height="75%"
              controls
            />
          </div>
          <div className="contender-video d-flex justify-content-center mt-4">
            <ReactPlayer
              className="react-player"
              url="https://res.cloudinary.com/laestancia/video/upload/v1647281332/Videos/La_Estancia_3_t8br49_yp3mxs.mp4"
              width="75%"
              height="75%"
              controls
            />
          </div>
          <div className="contender-video d-flex justify-content-center mt-4">
            <ReactPlayer
              className="react-player"
              url="https://res.cloudinary.com/laestancia/video/upload/v1647281238/Videos/La_Estancia_4_sa39mj_wmo4lk.mp4"
              width="75%"
              height="75%"
              controls
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
