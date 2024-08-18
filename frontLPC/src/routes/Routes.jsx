import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../components/pages/publicPages/Welcome";
import Condiciones from "../components/pages/publicPages/Condiciones";
import Teatros from "../components/pages/publicPages/Teatros";
import PublicLogin from "../components/pages/publicPages/PublicLogin";
import PublicRegis from "../components/pages/publicPages/PublicRegis";
import Dashboard from "../components/pages/adminPages/Dashboard";
import Prueba from "../components/pages/clientPages/ProtecCli";
import TablaNo from "../components/pages/adminPages/TablaNo";
import Contact from "../components/pages/publicPages/Contact";
import VistaTabla from "../components/pages/adminPages/Tables";



//aca se manejan todas las rutas publica donde todo el mundo puede ver
export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/condiciones" element={<Condiciones />}></Route>
      <Route path="/teatros" element={<Teatros />}></Route>
      <Route path='/contacto' element={<Contact />} ></Route>
      <Route path="/loginPublic" element={<PublicLogin />}></Route>
      <Route path="/registrar" element={<PublicRegis />}></Route>
    </Routes>
  );
};

export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Prueba />}></Route>
    </Routes>
  );
};

export const AdminRoutes = () => {


  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="tablaNo" element={<TablaNo />}></Route>
      <Route path="tabla/:tablaId" element={<VistaTabla />}></Route>
    </Routes>
  );
};
