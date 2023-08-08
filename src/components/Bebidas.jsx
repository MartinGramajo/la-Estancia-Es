import React from "react";
import Bebida from "./Bebida";

export default function Bebidas() {
    const bebidas = [
        {
            id: 1,
            title: "Agua",
            description:"",
            precio: "1,50",
        },
        {
            id: 2,
            title: "Agua con gas",
            description: "",
            precio: "2,20",
        },
        {
            id: 3,
            title: "Agua grande",
            description: "",
            precio: "3",
        },
        {
            id: 4,
            title: "Coca-Cola",
            description: "",
            precio: "2,50",
        },
        {
            id: 5,
            title: "Fanta",
            description: "",
            precio: "2,50",
        },
        {
            id: 6,
            title: "Sprite",
            description: "",
            precio: "2,50",
        },
        {
            id: 7,
            title: "Aquarius",
            description: "",
            precio: "2,50",
        },
        {
            id: 8,
            title: "Nestea",
            description: "",
            precio: "2,50",
        },
        {
            id: 9,
            title: "Zumos",
            description: "",
            precio: "2",
        },
    ];
    return (
        <>
            <h1 className="text-center tamaño-bold mb-4 mt-5">Bebidas</h1>
            <div className="container d-flex flex-wrap ">
                {bebidas.map((bebida,id) => (
                    <Bebida data={bebida} key={id}/>
                ))}
            </div>
        </>
    );
}
