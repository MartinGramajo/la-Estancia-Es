import React from "react";
import "./icono.css";
export default function Iconos() {
    return (
        <div className="container d-flex justify-content-center p-1">
            <div>
                <img
                    className="icono"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274010/Grupo_225_2x_bouc3z_zdmpio.jpg"
                    alt="Icono vegetariano"
                />
                <p className="text-center p-2"> Vegetariano</p>
            </div>
            <div className="justify-content-center">
                <img
                    className="icono"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274010/Grupo_227_2x_cqdkhn_snhcjy.jpg"
                    alt="Vegano"
                />
                <p className="text-center p-2"> Vegano</p>
            </div>
            <div className="justify-content-center">
                <img
                    className="icono"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274010/Grupo_230_2x_dy8jkb_wxdszf.jpg"
                    alt="Orgánico"
                />
                <p className="text-center p-2">Orgánico</p>
            </div>
            <div>
                <img
                    className="icono"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274010/Grupo_233_2x_thj1cg_kcfavr.jpg"
                    alt="Sin Gluten"
                />
                <p className="text-center p-2">Sin Gluten</p>
            </div>
        </div>
    );
}
