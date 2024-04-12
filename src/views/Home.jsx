import Gallery from "../components/Gallery";
import { useContext } from "react";
import { Contexto } from "../context/myContext";

const Home = () => {


  return (
    <div className="App">

      <h1>Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
