import React, { Fragment } from "react";
import Entradas from "../components/Entradas";
import Escalopes from "./Escalopes";
import Gourmets from "./Gourmets";
import GourmetsFoods from "./GourmetsFoods";
import Huertas from "./Huertas";
import Iconos from "./Iconos";

export default function Carta() {
    return (
        <Fragment>
            <h1 className="text-center tamaño-bold mt-4 mx-4 ">
                Descubre nuevo mundo de <br /> SABORES Y SENSACIONES
            </h1>
            <p className="text-center">echa un vistazo a nuestra carta</p>
            <Iconos />
            <Entradas />
            <Huertas />
            <Escalopes />
            <Gourmets />
            <GourmetsFoods />
        </Fragment>
    );
}
