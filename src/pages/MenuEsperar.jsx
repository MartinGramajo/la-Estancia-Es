import React from "react";
import NavbarNegro from "../components/NavbarNegro2";
import Footer from "../components/Footer";

const MenuEsperar = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <div className="centrado container ">
        <div className=" d-sm-block d-none">
          <h1 className="">
            "Estamos trabajando en un nuevo menú para sorprenderte"{" "}
          </h1>
        </div>

        <h6 className=" d-block d-sm-none">
          "Estamos trabajando en un nuevo menú para sorprenderte"{" "}
        </h6>
      </div>
      <Footer />
    </div>
  );
};

export default MenuEsperar;
