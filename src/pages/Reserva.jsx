import React from "react";
import Footer from "../components/Footer";
import NavbarNegro from "../components/NavbarNegro";
import ReservaMesa from "../components/ReservaMesa";

export default function Pedido() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarNegro />
      <ReservaMesa />
      <Footer />
    </div>
  );
}
