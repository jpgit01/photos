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
      {datos.filter(foto=> foto.liked).map((foto, index) => (
        <div className="col-md-3 mb-5" key={index}>
          <Card style={{ width: "100%" }}>
            <Card.Img
              src={foto.src.medium}
              style={{ width: "100%", height: "20rem" }}
              alt={foto.alt}
            />
            <span
              onClick={() => favoritoLike(foto.id)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: "1",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="40px"
              >
                <path
                  fill={foto.liked ? "red" : "white"}
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
            </span>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
