import React from "react";
import NavbarNegro from "../components/NavbarNegro";
import Footer from "../components/Footer";
import { Image } from "react-bootstrap";
import cara1 from "../assets/cara1.png";
import cara2 from "../assets/cara2.png";
import cara3 from "../assets/Cara3.png";

const MenuEsperar = () => {
  return (
    <div className="d-flex flex-column min-vh-100 fotos-fondo">
      <NavbarNegro />
      <div className="centrado container-fluid mt-5">
        <Image
          src={cara1}
          alt="imagenes de galeria de la estancia Gastrohome"
          fluid
        />
      </div>
      <div className="centrado container-fluid ">
        <Image
          src={cara2}
          alt="imagenes de galeria de la estancia Gastrohome"
          fluid
        />
      </div>
      <div className="centrado container-fluid mb-5">
        <Image
          src={cara3}
          alt="imagenes de galeria de la estancia Gastrohome"
          fluid
        />
      </div>
      <Footer />
    </div>
  );
};

export default MenuEsperar;
