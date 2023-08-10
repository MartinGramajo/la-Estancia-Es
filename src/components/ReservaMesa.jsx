import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import {
  faUser,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";
// import { useHistory } from "react-router-dom";

export default function ReservaMesa() {
  const [validated, setValidated] = useState(false);
  const form = useRef();
  // const history = useHistory();
  /*funcion para mandar msj al gmail*/

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs
        .sendForm(
          "service_u4f0s3f",
          "template_ecx73vs",
          e.target,
          "user_c4ByCM3JZ6nkffAHmHbd1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      Swal.fire({
        icon: "success",
        title: "Reserva realizada con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      // history.push("/");
    }
    setValidated(true);
  };

  return (
    <div className="">
      <h3 className="tamaño-bold text-center my-4 my-sm-5  px-5">
        Reserva tu mesa por teléfono
      </h3>
      <h5 className="text-center mb-5 fs-6  container px-5 ">
        Para reservar tu mesa, puedes llamarnos al teléfono{" "}
        <a
          href="tel:+868130872"
          target="_blank"
          rel="noreferrer"
          className="numero contacto text-decoration-none text-black"
        >
          <b>868 13 08 72</b>{" "}
        </a>
        <br />O si prefieres, puedes enviarnos el siguiente formulario de
        reserva
      </h5>

      <div className="text-center d-sm-block d-none">
        <img
          className="img-fluid px-5 linea-sola"
          src="https://res.cloudinary.com/laestancia/image/upload/v1647274014/linea_scckik_hyhbax.jpg"
          alt="linea divisoria"
        />
      </div>
      <h3 className="tamaño-bold text-center mb-4 mb-sm-4 px-3">
        Formulario de reservas
      </h3>
      <h5 className="text-center mb-5 fs-6 container px-5 ">
        Para reservar tu mesa tienes que rellenar este formulario <br />
        indicando todos los datos de la fecha y hora, número de personas y tus
        <br />
        datos de contacto.{" "}
        <b>
          {" "}
          La reserva queda confirmada una vez que el
          <br />
          restaurante envié un mail o llamada de confirmación.{" "}
        </b>
      </h5>
      <div className="col-9 col-sm-7 mx-auto my-5">
        <Form ref={form} noValidate validated={validated} onSubmit={sendEmail}>
          <div className="card container px-0">
            <div className="card-body color-gris-claro-fondo">
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  xl="4"
                  controlId="validationCustom01"
                >
                  <Form.Label className="text-no">
                    {" "}
                    <FontAwesomeIcon
                      className="color-gris me-2"
                      icon={faUser}
                    />{" "}
                    <b>Número de Personas:*</b>
                  </Form.Label>
                  <Form.Control
                    className="mb-3 mb-xl-0"
                    required
                    type="number"
                    name="personas"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese el numero de personas.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  xl="4"
                  controlId="validationCustom02"
                >
                  <Form.Label>
                    <FontAwesomeIcon
                      className="color-gris me-2"
                      icon={faCalendarAlt}
                    />
                    <b>Selecciona una fecha:*</b>
                  </Form.Label>
                  <Form.Control
                    className="mb-3 mb-sm-0"
                    required
                    type="date"
                    name="fecha"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese la fecha por favor.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  xl="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>
                    {" "}
                    <FontAwesomeIcon
                      className="color-gris me-2"
                      icon={faClock}
                    />
                    <b>Horario:</b>
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control type="time" name="horario" />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>
                    <b>Nombre*</b>
                  </Form.Label>
                  <Form.Control type="text" required name="nombre" />
                  <Form.Control.Feedback type="invalid">
                    Ingrese su nombre completo por favor.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>
                    <b>Whatsapp*</b>
                  </Form.Label>
                  <Form.Control
                    className="mb-3 mb-sm-0"
                    type="text"
                    required
                    name="whatsapp"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese su número de whatsapp completo por favor.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>
                    <b>Dirección de email*</b>
                  </Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese su email por favor.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>
                    <b>¿Desea solicitar algo en especial?</b>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      placeholder="Escriba su respuesta aqui..."
                      name="comentario"
                    />
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">
                    Ingrese su nombre completo por favor.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
          </div>
          <p className="container color-gris">* Campo requerido</p>
          <div className="d-flex justify-content-center">
            <Button
              className=" mt-3 mt-sm-0 boton-enviar color-gris-claro-fondo border-2 py-2 px-4"
              type="submit"
              value="Send"
            >
              <b>Enviar</b>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
