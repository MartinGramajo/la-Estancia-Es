import React from "react";
import Footer from "../components/Footer";
import Mapa from "../components/Mapa";
import NavbarNegro from "../components/NavbarNegro";

export default function MapaUbicacion() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <Mapa />
      <Footer />
    </div>
  );
}
