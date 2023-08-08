import React from "react";
import { Card } from "react-bootstrap";

export default function Postre({ data }) {
    const { title, description, precio } = data;
    return (
        <div className="card border-bottom-0 border-start-1 border-top-0 border-2 border-end-0 col-12 col-lg-4 col-sm-6 px-2 px-sm-0 pe-sm-3 pe-lg-5 borde-marron">
            <Card className="border-0">
                <Card.Body className="text-center">
                    <div className="d-flex justify-content-between">
                        <Card.Title className="text-start tamaño-bold">{title}</Card.Title>
                        <Card.Text className="text-nowrap tamaño-bold">
                            {precio} €
                        </Card.Text>
                    </div>
                    <Card.Text className="text-start">{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
