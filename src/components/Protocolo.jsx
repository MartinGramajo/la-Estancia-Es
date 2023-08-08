import React from "react";
import { Image } from "react-bootstrap";
import "./protocolo.css";

export default function Protocolo() {
  return (
    <div>
        <Image
          className="container d-none d-md-block d-flex justify-content-center mt-5"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274011/Grupo_422_2x_msrihe_d6hva1.jpg"
        fluid
        alt="protocolo de salud y seguridad responsive"
        />
      <Image
        className="d-md-none container d-flex justify-content-center mt-5 protocolo-imagen"
        src="https://res.cloudinary.com/laestancia/image/upload/v1647274017/protocolo_juyteq_wbic7f.png"
        fluid
        alt=" protocolo de salud y seguridad"
      />
    </div>
  );
}
