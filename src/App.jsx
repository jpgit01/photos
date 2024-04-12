import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import UsoContexto from "./context/myContext";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <UsoContexto>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </UsoContexto>
    </div>
  );
};
export default App;
