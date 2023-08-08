import React from "react";
import { Card } from "react-bootstrap";

export default function Huerta({ data }) {
  const { image, title, description, precio } = data;
  return (
    <div className="mt-2 mx-3">
      <Card className="border-0"  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Title className="tamaño-bold"> {title} </Card.Title>
          <Card.Text className="cursiva">{description}</Card.Text>
          <Card.Text className="tamaño-bold">{precio}€</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}