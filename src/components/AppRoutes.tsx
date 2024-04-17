import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

export default AppRoutes;
