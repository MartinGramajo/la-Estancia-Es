import React from "react";
import Entrante from "./Entrate";

const entrantes = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647281490/Fotos%20Comidas%20400x400/Hamburguesa_de_Angus_btv69e_timwoe.jpg",
    title: "Burger Angus",
    description:
      "250 gramos de angus. Angus con brotes verdes, cebolla morada, tomate, queso cheddar y salsa chimi La Estancia.",
    precio: "12,50",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647281467/Fotos%20Comidas%20400x400/Hamburguesa_de_pollo_po0e9b_1_jngjix.jpg",
    title: "Burger Pollo",
    description:
      "Hamburguesa de pollo a la plancha, acompañada de brotes verdes, tomate, queso cheddar y salsa miel.",
    precio: "11,50",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274163/Fotos%20Comidas%20400x400/IMG-20210722-WA0020opcvegana_eyigtm_muypgi_knbnrw.png",
    title: "Burger Vegana",
    description:
      "Auténtica Beyond Meat, brotes tiernos,tomate,cebolla morada y salsa especial.",
    precio: "12",
  },
];

export default function GourmetsFoods() {
  return (
    <div>
          <p className="text-center fs-4 tamaño-medium mt-5">Gourmet Food</p>
      <div className="container d-flex flex-wrap justify-content-center">
        {entrantes.map((entrada, id) => (
          <Entrante key={id} data={entrada} />
        ))}
      </div>
      <p className="text-black-50 ps-4 text-center mt-4">*Todos nuestros platos se acompañan de guarnición.</p>
    </div>
  );
}
