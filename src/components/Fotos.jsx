import Foto from "./Foto";

export default function Fotos() {
  const servicios = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605389/nuevas%20fotos/6_n6m99h.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691606677/nuevas%20fotos/4_soxkpz.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605387/nuevas%20fotos/14_eenwf7.png",
    },

    {
      id: 4,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605387/nuevas%20fotos/7_mdq6bi.png",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605382/nuevas%20fotos/9_djttk2.png",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691606267/nuevas%20fotos/3_-_copia_fvceyz.png",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691606265/nuevas%20fotos/2_u6pgcd.png",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605385/nuevas%20fotos/13_jkffpk.png",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605381/nuevas%20fotos/11_nhi7de.png",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605383/nuevas%20fotos/10_wm8xny.png",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605384/nuevas%20fotos/8_tqlhvb.png",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/laestancia/image/upload/v1691605382/nuevas%20fotos/12_pbuook.png",
    },
  ];

  return (
    <div className="alinear-nav" id="NuestroLocal">
      <div className="fotos-fondo">
        <h1 className="tamaño-bold fs-4 text-center mt-4 py-5 text-white">
          La Estancia no es solo un lugar. Es cómo te hace sentir.
        </h1>
        <div className="container mt-1">
          <div className="d-flex flex-wrap justify-content-around mx-auto mb-5">
            {servicios.map((servicio, id) => (
              <Foto key={id} data={servicio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
