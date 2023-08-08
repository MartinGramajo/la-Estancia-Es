import React from "react";
import Alcohol from "./Alcohol";

export default function Alcoholes() {
    const alcoholes = [
        {
            id: 1,
            title: "Caña",
            description: "",
            precio: "1,80",
        },
        {
            id: 2,
            title: "Tanque",
            description: "",
            precio: "3,50",
        },
        {
            id: 3,
            title: "Tercio Radler",
            description: "",
            precio: "2,60",
        },
        {
            id: 4,
            title: "Alhambra reserva",
            description: "",
            precio: "3",
        },
        {
            id: 5,
            title: "Sin alcohol",
            description: "",
            precio: "2,50",
        },
        {
            id: 6,
            title: "Sin alcohol tostada",
            description: "",
            precio: "2,80",
        },
        {
            id: 6,
            title: "Águila sin filtrar",
            description: "",
            precio: "2,80",
        },
        {
            id: 7,
            title: "Quilmes",
            description: "",
            precio: "2,80",
        },
        {
            id: 8,
            title: "El Alcázar",
            description: "",
            precio: "2,80",
        },
        {
            id: 9,
            title: "Sin gluten",
            description: "",
            precio: "3",
        },
        {
            id: 10,
            title: "Copa de Vino",
            description: "",
            precio: "2,80",
        },
    ];
    return (
        <>
            <h1 className="text-center my-4">Con alcohol</h1>
            <div className="container d-flex flex-wrap ">
                {alcoholes.map((alcohol,id) => (
                    <Alcohol data={alcohol} key={id} />
                ))}
            </div>
            <p className="text-black-50 ps-4 text-center mt-4">*Preguntar por nuestra variedad de cervezas.</p>
        </>
    );
}
