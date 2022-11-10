import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterLogin from "./pages/AfterLogin";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<HomePage />} />
         <Route path="/AfterLogin" element={<AfterLogin />} /> 
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default AppRoutes;
