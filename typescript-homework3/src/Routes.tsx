import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/SobreMim" element={<SobreMim />} /> */}
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRoutes;
