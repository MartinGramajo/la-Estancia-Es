import Footer from "../components/Footer";
import Fotos from "../components/Fotos";
import Mapa from "../components/Mapa";
import Banner from "../components/Banner";
import Opiniones from "../components/Opiniones";
import NavbarNegro2 from "../components/NavbarNegro2";
import React, { useState } from "react";

export default function Home() {
  const [navbarPosition, setNavbarPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbarPosition(true);
    } else {
      setNavbarPosition(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbarPosition ? "" : "transparente"}>
      <NavbarNegro2 />
      <Banner />
      <Opiniones />
      <Fotos />
      <Mapa />
      <Footer />
    </div>
  );
}
