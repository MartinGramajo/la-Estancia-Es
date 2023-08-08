import Foto from "./Foto";

export default function Fotos() {
  const servicios = [
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274027/4_o97awc_ozcmnq.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274032/2_c8hrcv_acdms5.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274043/7_slsyx1_bqment.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274030/6_q8zfcn_cdv54b.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274021/3_n42b7w_dtk03j.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1647274032/5_b5iwdu_bujikq.jpg",
    },
  ];

  return (
    <div className="alinear-nav" id="NuestroLocal">
      <div className="fotos-fondo" >
        <h1 className="tamaño-bold fs-4 text-center mt-4 p-3 text-white">
          La Estancia no es solo un lugar. Es cómo te hace sentir.
        </h1>
        <div className="container mt-1">
          <div className="row">
            <div className="d-flex flex-wrap justify-content-around mx-auto mb-5 col-md-12">
              {servicios.map((servicio, id) => (
                <Foto key={id} data={servicio} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
