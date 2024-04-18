import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
