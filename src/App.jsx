import { Outlet } from "react-router";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
