/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carta from "../components/Carta";
import Postres from "../components/Postres";
import Footer from "../components/Footer";
import NavbarNegro from "../components/NavbarNegro";
import Bebidas from "../components/Bebidas";
import Alcoholes from "../components/Alcoholes";
import Vinos from "../components/Vinos";
import Campana from "../components/Campana";

export default function Menu() {
  const [navbarPosition, setNavbarPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarPosition(true);
    } else {
      setNavbarPosition(false);
    }
    // console.log(window.scrollY); //Para ver en el medidor de scroll
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      {/* {navbarPosition?<Campana />:null} */}
      <Campana />
      <div className="container">
      
      </div>
      <Footer />
    </div>
  );
}
