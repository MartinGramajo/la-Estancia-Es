import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function PaginaConstruccionContenido() {
    return (
        <div className=" fondo-contacto">
            <h3 className="tamaño-bold text-center my-4 my-sm-5 texto-contacto pt-pagcon">
                Página en construcción
            </h3>
            <div className="text-center mb-4 responsive-espacios">
                <a
                    href="https://wa.link/e2fuug"
                    target="_blank"
                    rel="noreferrer"
                    className="numero contacto"
                >
                    <Button
                        className="boton-whatsapp color-marron-claro-fondo ov-btn-grow-ellipse"
                        variant="light"
                    >
                        <div className="d-flex justify-content-center mx-3 my-1">
                            <h3 className="fw-bold color-blanco whatsapp-hover tamaño-bold mb-0">
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faWhatsapp}
                                />
                                +34747409126
                            </h3>
                        </div>
                    </Button>
                </a>
            </div>
        </div>
    );
}
