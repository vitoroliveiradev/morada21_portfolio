import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routes } from "./utils/routes";
import { BackTopButton } from "./components/BackTopButton";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[rgb(255 255 255)] relative">
        <div className="absolute right-6 top-[89%] z-50">
          <BackTopButton />
        </div>
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
