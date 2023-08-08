import React from "react";
import { Image } from "react-bootstrap";
import "./foto.css"

export default function Foto({ data }) {
  const { image } = data;
  return (
    <div>
      <div className="mx-1  mb-3">
        <Image className="imagen-card" variant="top" src={image} alt="imagenes de galeria de la estancia Gastrohome"/>
      </div>
    </div>
  );
}
