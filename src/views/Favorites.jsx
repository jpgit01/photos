import { useContext } from "react";
import { Contexto } from "../context/myContext";
import Card from "react-bootstrap/Card";

const Gallery = () => {
  const { datos, setDatos } = useContext(Contexto);

  const favoritoLike = (id) => {
    const nuevaFoto = datos.map((fdato) => {
      if (fdato.id === id) {
        return {
          ...fdato,
          liked: !fdato.liked,
        };
      }
      return fdato;
    });
    setDatos(nuevaFoto);
  };

  return (
    <div className="row p-3">
      <h1 className="favoritas mb-3">Fotos favoritas</h1>
      {datos.filter(foto=> foto.liked).map((foto, index) => (
        <div className="col-md-3 mb-5" key={index}>
          <Card style={{ width: "100%" }}>
            <Card.Img
              src={foto.src.medium}
              style={{ width: "100%", height: "20rem" }}
              alt={foto.alt}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
