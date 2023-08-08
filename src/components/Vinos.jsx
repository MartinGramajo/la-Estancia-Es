import React from "react";
import Vino from "./Vino";

export default function Vinos() {
  const vinosTinto = [
    {
      id: 1,
      title: "Coto Mayor Rioja",
      description: "D.O. Rioja",
      precio: "16",
    },
    {
      id: 2,
      title: "912 de Altitud",
      description: "D.O. Rivera",
      precio: "20",
    },
    {
      id: 3,
      title: "Rivendrel Roble",
      description: "D.O. Rivera ",
      precio: "19",
    },
  ];
  const vinosArgentinos = [
    {
      id: 1,
      title: "San felipe 12 uvas",
      description: "D.O. Mendoza Argentina Malbec",
      precio: "17",
    },
    {
      id: 2,
      title: "Norton Malbec Arg.",
      description: "Norton D.O.C",
      precio: "26",
    },
    {
      id: 3,
      title: "Finca la Linda Malbec Arg",
      description: "D.O. Mendoza Argentina Malbec",
      precio: "25",
    },
    {
      id: 4,
      title: "Domingo Molina ",
      description: "D.O Salta",
      precio: "30",
    },
    {
      id: 5,
      title: "San Felipe Malbec Arg ",
      description: "D.O. Mendoza Argentina Malbec",
      precio: "23",
    },
  ];
  const vinosRosados = [
    {
      id: 1,
      title: "Coto Mayor verdejo Rioja",
      description: "D.O. Rioja",
      precio: "16",
    },
    {
      id: 2,
      title: "Castelo Do mar",
      description: "D.O Rias baixas Albariño",
      precio: "18,90",
    },
  ];
  return (
    <>
      <h1 className="text-center my-4">Vinos</h1>
      <div className="container d-flex flex-sm-row flex-column flex-wrap">
        <div className="col-12 col-lg-4 col-sm-6">
          <h4 className="px-4 px-sm-3 tamaño-bold">VINOS TINTOS</h4>
          <div className="d-flex flex-wrap flex-column">
            {vinosTinto.map((vino, id) => (
              <Vino data={vino} key={id} />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <h4 className="px-4 px-sm-3 tamaño-bold mt-3 m-sm-0">ARGENTINOS</h4>
          <div className="d-flex flex-wrap flex-column">
            {vinosArgentinos.map((vino, id) => (
              <Vino data={vino} key={id} />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <h4 className="px-4 px-sm-3 tamaño-bold mt-3 mt-lg-0">
            VINOS BLANCOS
          </h4>
          <div className="d-flex flex-wrap flex-column">
            {vinosRosados.map((vino, id) => (
              <Vino data={vino} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
