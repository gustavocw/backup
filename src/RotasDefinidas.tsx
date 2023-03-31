import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./client/Landing/Landing"
import HomePage from "./client/Home/HomePage"
import DetalhesPage from "./client/Home/detalhes/Detalhes"
import AnunciePage from "./client/Anunciar/Anuncie";

// @ts-ignore
// const PrivateRoute = ({ children, redirectTo }) => {
//   const isAuthenticated = localStorage.getItem("token") !== null;
//   console.log("isAuth: ", isAuthenticated);
//   return isAuthenticated ? children : <Navigate to={redirectTo} />;
// };

export function RoutesDefinided() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detalhes" element={<DetalhesPage />} />
          <Route path="/anunciar" element={<AnunciePage />} />
      </Routes>
    </BrowserRouter>
  );
}