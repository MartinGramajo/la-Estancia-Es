import React from "react";
import AvisoLegal from "../components/AvisoLegal";
import Footer from "../components/Footer";
import NavbarNegro from "../components/NavbarNegro";

export default function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <AvisoLegal />
      <Footer />
    </div>
  );
}
