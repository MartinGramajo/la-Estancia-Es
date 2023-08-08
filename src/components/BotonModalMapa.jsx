import React from "react";
import { Button, Image } from "react-bootstrap";
import MapaModal from "./MapaModal";


export default function BotonModalMapa() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className="p-1 me-4 mb-4 mt-0" variant="light" onClick={() => setModalShow(true)}>
        <Image className="modal-boton border-0 w-100 h-100" src="https://res.cloudinary.com/laestancia/image/upload/v1647274017/mapa-chico_yl15jb_zxjory.jpg" rounded alt="googleMaps" />
        </Button>
  
        <MapaModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }