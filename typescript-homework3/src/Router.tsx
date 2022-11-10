import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfterLogin from "./pages/AfterLogin";
import  HomePage from "./pages/HomePage";

export const Router: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>      
        <Route path="/HomePage" element={<HomePage />} />
         <Route path="/AfterLogin" element={<AfterLogin />} /> 
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default Router;
