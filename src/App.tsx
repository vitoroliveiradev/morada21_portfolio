import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ComercialProjects } from "./pages/ComercialProjects";
import { ArchitecturalProjects } from "./pages/ArchitecturalProjects";
import { InteriorDesigns } from "./pages/InteriorDesigns";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutCompany } from "./components/AboutCompany";
import { AboutTeam } from "./components/AboutTeam";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projetos/arquitetonicos",
    element: <ArchitecturalProjects />,
  },
  {
    path: "/projetos/designInteriores",
    element: <InteriorDesigns />,
  },
  {
    path: "/projetos/comercial",
    element: <ComercialProjects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sobre/empresa",
    element: <AboutCompany />,
  },
  {
    path: "/sobre/equipe",
    element: <AboutTeam />,
  },
];
function App() {
  return (
    <BrowserRouter>
      <div className="bg-[rgb(255 255 255)]">
        <Header />
        <Routes>
          {routes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
