import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Rodape from "./pages/Rodape";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<SingleProduct />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/aboutapi" element={<About />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
