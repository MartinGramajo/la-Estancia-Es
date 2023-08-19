import React from "react";
import NavbarNegro from "../components/NavbarNegro";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const PedidoYa = () => {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <NavbarNegro />
      <div className="fondo-contacto">
        <section>
          <article>
            <h3 className="tamaño-bold text-center my-4 my-sm-5 texto-contacto">
              Ahora también puedes disfrutar <br /> en casa de nuestra carta
            </h3>
            <div className="text-center mb-4 responsive-espacios ">
              <a
                href="tel:+868130872"
                target="_blank"
                rel="noreferrer"
                className="numero contacto"
              >
                <Button
                  className="boton-whatsapp color-marron-claro-fondo ov-btn-grow-ellipse"
                  variant="light"
                >
                  <div className="mx-3 ">
                    <h3 className="fw-bold color-blanco whatsapp-hover tamaño-bold my-2">
                      <FontAwesomeIcon className="me-2" icon={faPhone} />
                      868130872
                    </h3>
                  </div>
                </Button>
              </a>
            </div>
            <div className="text-center mb-4 responsive-espacios pb-5">
              <a
                href="https://wa.link/u0g31u"
                target="_blank"
                rel="noreferrer"
                className="numero contacto"
              >
                <Button
                  className="boton-whatsapp color-marron-claro-fondo ov-btn-grow-ellipse "
                  variant="light"
                >
                  <div className="mx-3 ">
                    <h3 className="fw-bold color-blanco whatsapp-hover tamaño-bold my-2">
                      <FontAwesomeIcon className="me-2" icon={faWhatsapp} />
                      747 40 91 26
                    </h3>
                  </div>
                </Button>
              </a>
            </div>
          </article>
        </section>
        <section>
          <article>
            <h5 className="text-center mb-5  fs-6 ">
              Pedidos y recogida en el local
            </h5>
            <div className="text-center d-sm-block d-none">
              <div>
                <img
                  className="img-fluid px-5 deliverys mt-2 pb-5"
                  src="https://res.cloudinary.com/laestancia/image/upload/v1691687357/nuevas%20fotos/glovo_jythyc.png"
                  alt="glovo"
                />
                <img
                  className="img-fluid px-5 deliverys mt-2 pb-5"
                  src="https://res.cloudinary.com/laestancia/image/upload/v1691699345/uberEats_w0xazn.png"
                  alt="Uber Eats"
                />
              </div>
            </div>
            <div className="text-center d-block d-sm-none">
              <img
                className="img-fluid px-5 pb-4 deliverys"
                src="https://res.cloudinary.com/laestancia/image/upload/v1691687357/nuevas%20fotos/glovo_jythyc.png"
                alt="glovo"
              />
            </div>
            <div className="text-center d-block d-sm-none">
              <img
                className="img-fluid px-5 deliverys mt-2 pb-5"
                src="https://res.cloudinary.com/laestancia/image/upload/v1691699345/uberEats_w0xazn.png"
                alt="Uber Eats"
              />
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PedidoYa;
