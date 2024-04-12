import Gallery from "../components/Gallery";
import { useContext } from "react";
import { Contexto } from "../context/myContext";

const Home = () => {

const contexto = useContext(Contexto)

  return (
    <div className="App">

      <h1>Natural Pic {contexto.like}</h1>
      <Gallery />
    </div>
  );
};
export default Home;
