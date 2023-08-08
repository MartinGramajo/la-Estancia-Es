import React from "react";
import { Card } from "react-bootstrap";

export default function MenuItem({ menuItem }) {
  return (
    <div className="container d-flex flex-wrap justify-content-around mt-5 mb-4 my-5">
      {menuItem.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <Card
                className="mb-2"
                style={{
                  width: "18rem",
                }}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                    {item.precio}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
