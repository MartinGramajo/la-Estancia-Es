import React from "react";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import NavbarNegro from "../components/NavbarNegro";

export default function Pedido() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <Contacto />
      <Footer />
    </div>
  );
}
