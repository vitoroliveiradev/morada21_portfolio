import { AboutCompany } from "../components/AboutCompany";
import { AboutTeam } from "../components/AboutTeam";
import { ArchitecturalProjects } from "../pages/ArchitecturalProjects";
import { ArchitecturalPage } from "../pages/ArchitecturalProjects/ArchitecturalPage";
import { ComercialProjects } from "../pages/ComercialProjects";
import { ComercialProjectsPage } from "../pages/ComercialProjects/comercialProjectsPage";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { InteriorDesigns } from "../pages/InteriorDesigns";
import { InteriorDesignPage } from "../pages/InteriorDesigns/interiorDesignPage";
import { ProjectPage } from "../pages/ProjectPage";

export const routes = [
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
  {
    path: "/projetos/:id",
    element: <ProjectPage />,
  },
  {
    path: "/projetos/designInteriores/:id",
    element: <InteriorDesignPage />,
  },
  {
    path: "/projetos/comercial/:id",
    element: <ComercialProjectsPage />,
  },
  {
    path: "/projetos-arquitetonicos/:id",
    element: <ArchitecturalPage />,
  },
];
