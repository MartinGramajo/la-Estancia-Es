import React from "react";
import { Card } from "react-bootstrap";

export default function Escalope({ data }) {
  const { image, title, description, precio } = data;
  return (
    <div className="mt-3 mx-3" >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt="menu escalope de la carta de la estancia gastrohome" />
        <Card.Body>
          <Card.Title className="tamaño-bold"> {title} </Card.Title>
          <Card.Text className="cursiva">{description}</Card.Text>
          <Card.Text className="tamaño-bold">{precio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}