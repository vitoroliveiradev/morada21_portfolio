import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ComercialProjects } from "./pages/ComercialProjects";
import { ArchitecturalProjects } from "./pages/ArchitecturalProjects";
import { InteriorDesigns } from "./pages/InteriorDesigns";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio/comercial",
    element: <ComercialProjects />,
  },
  {
    path: "/portfolio/residencial/arquitetônico",
    element: <ArchitecturalProjects />,
  },
  {
    path: "/portfolio/residencial/designInteriores",
    element: <InteriorDesigns />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
