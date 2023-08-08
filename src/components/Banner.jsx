import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Banner() {
    return (
        <div className="fondo-banner">
            <div className="d-flex justify-content-center">
                <div className="posicion-boton-menu">
                    <Button
                        className="boton-menu my-5 tamaño-bold border-2"
                    >
                        <Nav.Link
                            to="/menu"
                            exact
                            as={NavLink}
                            className="my-0 mx-2 sin-sub text-white">Menu {">>"}</Nav.Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
