import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header/index.tsx";
import { Container } from "./components/Container/index.tsx";
import { ComercialProjects } from "./pages/ComercialProjects/index.tsx";
import { ArchitecturalProjects } from "./pages/ArchitecturalProjects/index.tsx";
import { InteriorDesigns } from "./pages/InteriorDesigns/index.tsx";
import { Contact } from "lucide-react";
import { Home } from "./pages/Home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
