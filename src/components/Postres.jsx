import React from "react";
import Postre from "./Postre";

export default function Postres() {
    const postres = [
        {
            id: 1,
            title: "Culant de Baileys",
            precio: "5,50",
        },
        {
            id: 2,
            title: "Culant de chocolate",
            precio: "4,50",
        },
        {
            id: 3,
            title: "Fresas a la pimienta",
            description:
                "Fresas flambeadas, helado de vainilla, con un toque de pimienta.",
            precio: "6,50",
        },
        {
            id: 4,
            title: "Cremoso de coco",
            description: "",
            precio: "4,50",
        },
        {
            id: 5,
            title: "Copa brownie",
            description: "Brownie, helado de vainilla, chocolate, nata, nueces y chispas de chocolate con leche.",
            precio: "8",
        },
        {
            id: 6,
            title: "Tarta de queso",
            description: "",
            precio: "5",
        },
        {
            id: 7,
            title: "Helado sorbete de limón",
            description: "",
            precio: "4",
        },
    ];
    return (
        <>
            <h1 className="text-center tamaño-bold mb-4 mt-5"> Postres</h1>
            <div className="container d-flex flex-wrap pb-5">
                {postres.map((postre,id) => (
                    <Postre data={postre} key={id} />
                ))}
            </div>
        </>
    );
}
