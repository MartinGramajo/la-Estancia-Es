import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import "./mapa.css";
import { Button } from "react-bootstrap";
import BotonModalMapa from "./BotonModalMapa";

export default function Mapa() {
  return (
    <div id="#/mapa" className="alinear-nav-mapa my-5">
      <div className="container d-flex justify-content-around mt-5 color-marron-claro-fondo mapa ">
        <div className="row texto">
          {/* <div className=" text-white centrar-texto-responsive p-4 col-lg-4 col-sm-12 ">
            <h1 className="tamaño-bold fs-4 ">HORARIOS:</h1>
            <span className="tamaño-medium">
              <h1 className="fs-6">LUNES:</h1>
              <p>CERRADO</p>
            </span>
            <span className="tamaño-medium">
              <h1 className="fs-6 "> MARTES Y MIÉRCOLES</h1>
              <p>de 11:00 a 17:00 hs.</p>
            </span>
            <span className="tamaño-medium">
              <h1 className="fs-6">JUEVES:</h1>
              <p>de 11:00 a 17:00 y de 19:30 a 00:00 hs.</p>
            </span>
            <span className="tamaño-medium">
              <h1 className="fs-6">VIERNES:</h1>
              <p>de 11:00 a 00:30 hs.</p>
            </span>
            <span className="tamaño-medium">
              <h1 className="fs-6">S­­ÁBADO:</h1>
              <p>de 12:00 a 17:00 y de 19:30 a 00:00 hs.</p>
            </span>
            <span className="tamaño-medium">
              <h1 className="fs-6">DOMINGO:</h1>
              <p>de 12:00 a 17:00 hs.</p>
            </span>
          </div> */}
          <div className=" text-white centrar-texto-responsive p-4 col-lg-6 col-sm-12 ">
            <h1 className=" centrado-responsive tamaño-bold fs-4 ">
              ¡TE ESPERAMOS!
            </h1>
            <span className="tamaño-medium">
              <h1 className="fs-6 ">Dirección:</h1>
              <p>C. Azarbe del Papel, 7, 30007 Murcia, España.</p>
            </span>
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com.ar/maps/place/La+Estancia+Gastrohome/@38.0007523,-1.1374315,17z/data=!3m2!4b1!5s0xd6382275ff1ba93:0x4e8fbdd0c1ec1393!4m5!3m4!1s0xd63836b00d41277:0xe97ccfb5b1fef97b!8m2!3d38.0007523!4d-1.1352428"
            >
              <Button
                className="w-100 ov-btn-grow-box  p-2"
                variant="light"
                size="lg"
              >
                <span>
                  <FontAwesomeIcon
                    className="color-marron-texto-boton"
                    icon={faMapMarkedAlt}
                  />
                </span>{" "}
                <span className="color-marron-texto-boton tamaño-bold">
                  ¿Como llegar?
                </span>{" "}
              </Button>{" "}
            </a>
            <p className="google-map mt-1"> *Mostrar en GoogleMaps</p>
          </div>
          <div className="ocultar-mapa col-lg-4  col-sm-6  mt-4">
            <BotonModalMapa />
          </div>
        </div>
      </div>
    </div>
  );
}
