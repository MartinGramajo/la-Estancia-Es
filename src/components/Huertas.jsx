import React from "react";
import Huerta from "./Huerta";

const vegetales= [
  {
    id: 1,
    image: 'https://res.cloudinary.com/laestancia/image/upload/v1647281419/Fotos%20Comidas%20400x400/Ensalada_Violeta_zfrc0f_fuaydw.jpg',
    title: 'Violeta',
    description: 'Brotes tiernos, dados de tomate, bacon crujiente, huevo cocido, cebolla crujiente y vinagreta La Estancia.',
    precio: '9,50'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/laestancia/image/upload/v1647274143/Fotos%20Comidas%20400x400/Ensalada_Roja_huxds0_hcidjx_bloshh.png',
    title: 'Roja',
    description: 'Autentica burrata italiana, tomate cherrys, alcaparras, brotes tiernos coronado con pesto casero de anacardos.',
    precio: '13'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/laestancia/image/upload/v1647281382/Fotos%20Comidas%20400x400/verde_hoqfbb.png',
    title: 'Verde',
    description: 'Brotes tiernos,tomates cherrys,cebolla morada, zanahoria, atún y vinagreta francesa.',
    precio: '8,50'
    
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/laestancia/image/upload/v1647276124/violeta_mtat60_xnxnyc.jpg',
    title: 'Azul',
    description: 'Brote tiernos, cubos de manzana granny, pasas, nueces, queso Roquefort D.O, vinagreta y terminado con manzana deshidratada a la canela.',
    precio: '12'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/laestancia/image/upload/v1647274168/Fotos%20Comidas%20400x400/Ensalada_Cesar_c9yvil_nupi13_uf7fmq.png',
    title: 'Blanca',
    description: 'Brotes tiernos, lascas de parmesano, pechuga de pollo asada, bacon crujiente, picatostes y nuestra especial salsa César.',
    precio: '12'
  },
];

export default function Huertas() {
  return (
    <div className="mt-5 ">
      <h1 className="text-center tamaño-bold mb-4 mx-4"> De la huerta a la estancia</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {vegetales.map((vegetal,id) => (
          <Huerta
            key={id}
            data={vegetal} />
        ))}
        </div>
      </div>
  );
}
