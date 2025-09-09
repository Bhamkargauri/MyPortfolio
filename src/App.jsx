import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Suspense fallback={<div className="loader">Loading…</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
