import React from "react";
import Entrante from "./Entrate";

const entrantes = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274160/Fotos%20Comidas%20400x400/Escalopa_Milanesa_2_poiuv9_htzupq_vx2nh5.png",
    title: "Escalopa Milanesa",
    description: "Escalope de angus en rebozado especial.",
    precio: "10",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647281446/Fotos%20Comidas%20400x400/Milanesa_Napolitana__z63ggw_ib81b2.jpg",
    title: "Napolitana",
    description:
      "Milanesa, salsa de tomate casera, jamón cocido y mozzarella.",
    precio: "15",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274176/Fotos%20Comidas%20400x400/Milanesa_a_Caballo_2_qknqz7_u5jdtm_t2kqbi.png",
    title: "A Caballo",
    description:
      "Milanesa, salsa de tomate casera,mozzarella,pimientos asados coronado con dos huevos fritos.",
    precio: "18",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274179/Fotos%20Comidas%20400x400/Milanesa_Tex-_Mex_lxsdew_dcj12n_d9efye.png",
    title: "Tex Mex",
    description: "Milanesa,guacamole,crema agria y salsa criolla.",
    precio: "17,50",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274188/Fotos%20Comidas%20400x400/Milanesa_a_la_fugazeta_2_qczp8q_trans_qfzasn_nj0gj5.png",
    title: "A La Fugazzeta",
    description:
      "Milanesa, queso provolone,cebolla caramelizada y un toque de provenzal.",
    precio: "15",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274172/Fotos%20Comidas%20400x400/Milanesa_con_salsa_de_quesos_2_n7e7np_dgcmck_hodvfm.png",
    title: "4 Quesos",
    description:
      "Milanesa cubierta de uan exquisita salsa de quesos(roquefort, mozzarella, edam, rojo y provolone).",
    precio: "15",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274142/Fotos%20Comidas%20400x400/Escalopa_de_berejena_bsiatw_avnrdp_jyift9.png",
    title: "Milanesa Berenjena",
    description:
      "Berenjena rebozada, salsa de tomate casero y mozzarella. (Esta Milanesa no esta incluida en el combo)",
    precio: "10",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/laestancia/image/upload/v1647274145/Fotos%20Comidas%20400x400/Combo_arte_2_i9xyoq_giizlq_kfbcuu.png",
    title: "Combo Arte",
    description:
      "Si te cuesta decidirte,prueba nuestro combo escaloparte. Excelente opción para probarlas todas.(sin guarnición)",
    precio: "22,50",
  },
];

export default function Escalopes() {
  return (
    <div>
      <h1 className="text-center tamaño-bold mt-5"> EscalopeARTE</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {entrantes.map((entrada, id) => (
          <Entrante key={id} data={entrada} />
        ))}
      </div>
      <p className="text-black-50 ps-4 text-center mt-4">*Todos nuestros platos se acompañan de guarnición.</p>
    </div>
  );
}
