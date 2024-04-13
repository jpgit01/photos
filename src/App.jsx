import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import UsoContexto from "./context/myContext";

const App = () => {
  return (
    <>
    <Navbar />
      <UsoContexto>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </UsoContexto>
      </>
  );
};
export default App;
