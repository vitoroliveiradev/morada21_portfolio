import { BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
