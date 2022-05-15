import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormCadastro } from "../pages/FormCadastroLivro/FormCadastro";
import { Login } from "../pages/Login/Login";
import { Registro } from "../pages/Registro/Registro";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-livro" element={<FormCadastro />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}
