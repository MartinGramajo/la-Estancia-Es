import React from "react";
import Footer from "../components/Footer";
import NavbarNegro from "../components/NavbarNegro";
import Nosotros from "../components/Nosotros";

export default function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <Nosotros />
      <Footer />
    </div>
  );
}
