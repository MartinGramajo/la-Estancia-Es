import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer color-negro-fondo text-white mt-auto p-2">
      <div className="container ">
        <div className="row ">
          <img
            className="logo-footer-oculto p-4 mt-5 d-sm-none d-block"
            style={{ width: "280px" }}
            src="https://res.cloudinary.com/laestancia/image/upload/v1647274011/Grupo_423_2x_f4wchl_ogwik9.png"
            alt="imagen de logo"
          />

          {/* Column1 */}
          <div className="col-12 col-md-4 text-center text-md-start d-flex justify-content-center mx-auto p-1 mt-5">
            <ul className="list-unstyled ocultar-menu">
              <li>
                <a
                  className="sin-sub me-2 text-white fs-2"
                  href="https://www.facebook.com/laestanciagastrohome"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="sin-sub text-white fs-2"
                  href="https://www.instagram.com/laestanciagastrohome/?fbclid=IwAR2bBAVtVLxMwv8ZEodtyrjQ6c3GpHtxN2m4iYCSrnDo6ZkJ8otgi1USygM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  className="sin-sub text-white p-1"
                  to="/menu"
                >
                  Menu
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  className="sin-sub text-white p-1"
                  to="/reserva"
                >
                  Reserva tu mesa
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  className="sin-sub text-white  p-1"
                  to="/pedido"
                >
                  Pedi a tu domicilio
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  className="sin-sub text-white  p-1"
                  to="/legal"
                >
                  Aviso Legal
                </Nav.Link>
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-12 col-md-4 text-center text-md-start d-flex justify-content-center mb-1 mt-5 p-1 ">
            <img
              className="logo-footer mb-1 d-none d-sm-block"
              src="https://res.cloudinary.com/laestancia/image/upload/v1647274017/logo_laestancia_blanco_wjujyb_oevgoh.png"
              alt="imagen de logo"
            />
          </div>
          {/* Column3 */}
          <div className="col-12 col-md-4 text-center text-md-start d-flex justify-content-center imagen-fondo-footer">
            <img
              className="imagen-footer ocultar-div mt-0"
              src="https://res.cloudinary.com/laestancia/image/upload/v1647274011/Grupo-422_dq7p0f_eiutp3.png"
              alt="Chef La estancia"
            />
          </div>
        </div>
        <div className="mt-1 pb-1">
          <p className=" text-center text-md-start  d-flex justify-content-center p-1 text-white-50">
            <a
              className="mx-1 text-decoration-none text-white-50"
              href="https://www.dkzstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span className="studio">
                Product by DKZ studio &copy; {new Date().getFullYear()} Todos
                los derechos reservados.
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
