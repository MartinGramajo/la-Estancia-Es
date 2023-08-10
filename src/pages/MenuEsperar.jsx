import React from "react";
import NavbarNegro from "../components/NavbarNegro";
import Footer from "../components/Footer";

const MenuEsperar = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <div className="centrado container-fluid fotos-fondo">
        <div className=" d-sm-block d-none">
          <h1 className="text-center text-white">
            "Estamos trabajando en un nuevo menú para sorprenderte"{" "}
          </h1>
        </div>

        <h6 className=" d-block d-sm-none text-center text-white">
          "Estamos trabajando en un nuevo menú para sorprenderte"{" "}
        </h6>
      </div>
      <Footer />
    </div>
  );
};

export default MenuEsperar;
