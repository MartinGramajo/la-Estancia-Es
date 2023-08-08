import React from "react";
import Entrante from "./Entrate";

const entrantes = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647281485/Fotos%20Comidas%20400x400/Plumilla_Ib%C3%A9rica_2_xfgf8x_w8plr4.jpg",
    title: "Plumilla Ibérica",
    precio: "16",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647281437/Fotos%20Comidas%20400x400/Entra%C3%B1a_de_ternera__dmbjvc_buyid7.jpg",
    title: "Entraña de ternera",
    description: "Exquisito corte argentino de tierna ternera.",
    precio: "20",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274156/Fotos%20Comidas%20400x400/Bife_de_chorizo_3_raz9tf_kj57wh_bhznql.png",
    title: "Bife de Chorizo de vaca selec.",
    description: "350 gr de sabrosa y tierna vaca `selec`.",
    precio: "23",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274190/Fotos%20Comidas%20400x400/Salmon_La_Estancia_hxbnzd_csiwkc_eudfy3.png",
    title: "Salmón La Estancia",
    description:
      "Salmón marinado 24hs, aromatizado con salsa de jengibre y citricos acompañado de verdura.",
    precio: "16,50",
  },
];

export default function Gourmets() {
  return (
    <div>
      <h1 className="text-center mt-5 tamaño-bold"> Gourmet</h1>
      <p className="text-center fs-4 tamaño-medium">Estancieros Gourmet</p>
      <div className="container d-flex flex-wrap justify-content-center">
        {entrantes.map((entrada, id) => (
          <Entrante key={id} data={entrada} />
        ))}
      </div>
    </div>
  );
}
