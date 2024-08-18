import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ClientRoutes, PublicRoutes, AdminRoutes } from "./routes/Routes";
import { RoleChecker, ProtectedRoute } from "./middleware/RouteProtected";
import WhatComponent from "./components/pages/component/WhatComponent";
function App() {
  return (
    //creamos las rutas principales de la web luego  importamos
    //el archivop de las rutas la cual contiene ya cada ruta en especifico
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />}></Route>

        {/* estas son las rutas publicas la cual contiene el boton de whatsapp */}
        <Route path="*" element={ <>  <PublicRoutes />  <WhatComponent />   </> }> </Route>


        {/* estas rutas estan protegidas dependiedno su rol y token */}
        <Route
          path="/cliente/*"
          element={
            <>
            {/* <ProtectedRoute> 
              <RoleChecker  requiredRole={"cliente"} > */} 
                <ClientRoutes /> <WhatComponent /> 
              {/*  </RoleChecker> 
             </ProtectedRoute>  */}
             </>
          }
        ></Route>
        <Route path="/empleado/*"></Route>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <RoleChecker requiredRole="admin" >
                <AdminRoutes />
              </RoleChecker>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
