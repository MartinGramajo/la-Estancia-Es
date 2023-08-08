import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contacto() {
  return (
    <div className=" fondo-contacto">
      <h3 className="tamaño-bold text-center my-4 my-sm-5 texto-contacto">
        Ahora también puedes disfrutar <br /> en casa de nuestra carta
      </h3>
      <div className="text-center mb-4 responsive-espacios ">
        <a
          href="https://wa.link/sjvqme"
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
                <FontAwesomeIcon className="me-2" icon={faWhatsapp} />
                868130872
              </h3>
            </div>
          </Button>
        </a>
      </div>
      <h5 className="text-center mb-5 fs-6 ">Pedidos y recogida en el local</h5>
      <div className="text-center d-sm-block d-none">
        <img
          className="img-fluid px-5 deliverys"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274046/editada_mycnam_ufn4qt.jpg"
          alt="deliverys"
        />
      </div>
      <div className="text-center d-block d-sm-none">
        <img
          className="img-fluid px-5 deliverys"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274044/glovo_tdfzui_eyo0cr_o4yziv.jpg"
          alt="glovo"
        />
        <img
          className="img-fluid px-5 deliverys mt-3"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274031/deliveroo_eexvzb_zaplke.jpg"
          alt="deliveroo"
        />
        <img
          className="img-fluid px-5 deliverys mt-3"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274012/justeat_edwwe1_ptb9ph.jpg"
          alt="justeat"
        />
      </div>
    </div>
  );
}
