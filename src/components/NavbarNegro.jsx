import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarNegro() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="color-negro-fondo navbarstyle"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="">
              <img
                className="tamaño-logo "
                src="https://res.cloudinary.com/laestancia/image/upload/v1647274011/Grupo_423_2x_f4wchl_ogwik9.png"
                alt="logo la estancia Gastrohome"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto mt-2 mt-sm-0 ">
              <Nav.Link
                to="/menu"
                exact
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                Menu
              </Nav.Link>
              <Nav.Link
                to="/nosotros"
                exact
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                to="/mapa"
                exact
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                Ubicación
              </Nav.Link>
              <Nav.Link
                to="/reserva"
                exact
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                Reserva tu mesa
              </Nav.Link>
              <Nav.Link
                to="/pedido"
                exact
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto"
              >
                <img
                  src="https://res.cloudinary.com/laestancia/image/upload/v1647274015/pide_2x_flhvnh_v1effi.jpg"
                  alt="boton pedido a domicilio"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
