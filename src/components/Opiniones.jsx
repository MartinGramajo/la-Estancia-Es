import { Image } from "react-bootstrap";
import "swiper/swiper.min.css";
import SOpiniones from "./SOpiniones";
import SOpinionesCelular from "./SOpinionesCelular";
import SOpinionesTablet from "./SOpinionesTablet";

export default function Opiniones() {
    return (
        <div className="opiniones">
                <Image
                    className="container d-none d-sm-flex justify-content-center w-100 mt-5"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274052/div_1_2x_cacjjm_tnza1o.jpg"
                fluid
                alt="disfruta de la mejor cocina internacional"
                />
                <Image
                    className="container d-sm-none d-flex justify-content-center w-100 mt-5"
                    src="https://res.cloudinary.com/laestancia/image/upload/v1647274077/disfruta-movil_g9fhsi_zg2fnr.png"
                fluid
                alt="disfruta de la mejor cocina internacional-version responsive"
                />
            <h3 className="text-center tamaño-bold mt-4 mb-3 ">Opiniones</h3>
            <div className="d-none d-lg-flex mt-3 mx-sm-5 mb-5 flex-wrap">
                    <SOpiniones />
            </div>
            <div className="d-none d-sm-flex d-lg-none mt-3 mx-sm-5 mb-5 flex-wrap">
                    <SOpinionesTablet />
            </div>
            <div className="d-sm-none d-flex mt-3 mx-sm-5 mb-5 flex-wrap">
                    <SOpinionesCelular />
            </div>
        </div>
    );
}
