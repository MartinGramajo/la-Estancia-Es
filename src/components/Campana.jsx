import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Campana() {
    const [navbarPosition, setNavbarPosition] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbarPosition(true);
        } else {
            setNavbarPosition(false);
        }
        // console.log(window.scrollY); //Para ver en el medidor de scroll
    };

    window.addEventListener("scroll", changeBackground);
    return (
        <>
            {navbarPosition ? (
                <Nav.Link
                to="/pedido"
                exact
                as={NavLink}>
                    <img
                        className="fixed-bottom ms-auto campana me-lg-4 mb-4 aparicion-out"
                        src="https://res.cloudinary.com/laestancia/image/upload/v1647274038/ezgif-1-61dfa775959a_rvtshe_gz3p37.gif"
                        alt="campana"
                    />
               </Nav.Link>
            ) : (
                <Nav.Link
                to="/pedido"
                exact
                as={NavLink}>
                    <img
                        className="fixed-bottom ms-auto campana me-lg-4 mb-4 aparicion-in"
                        src="https://res.cloudinary.com/laestancia/image/upload/v1647274029/BandejaCerrada_k5j7om_cdedoo.png"
                        alt="campana"
                    />
                </Nav.Link>
            )}
        </>
    );
}
