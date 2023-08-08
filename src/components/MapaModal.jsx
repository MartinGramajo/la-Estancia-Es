
import { Modal, Image } from "react-bootstrap";
import "./mapa.css";

export default function MapaModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <Image className="w-100 h-100" src="https://res.cloudinary.com/laestancia/image/upload/v1647274056/mapa-grande_nmoxzv_rggbke.jpg" rounded  alt="mapa la estancia gastrohome"/>
      </Modal.Body>
    </Modal>
  );
}

