import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import IdentidadeOrganizacional from "./pages/IdentidadeOrganizacional";
import ContratoResultados from "./pages/ContratoResultados";
import ProjetosEstrategicos from "./pages/ProjetosEstrategicos";
import Admin from "./pages/Admin";

const App: React.FC = () => {

  useEffect(() => {
    alert("REACT INICIALIZADO");
  }, []);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
        <Sidebar />

        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<IdentidadeOrganizacional />} />
            <Route path="/contrato-resultados" element={<ContratoResultados />} />
            <Route path="/projetos" element={<ProjetosEstrategicos />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/dashboards"
              element={
                <div className="p-10 text-center">
                  Página em Desenvolvimento
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

