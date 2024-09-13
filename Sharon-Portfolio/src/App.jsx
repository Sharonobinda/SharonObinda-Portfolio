import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Adjust the path to your Layout component
import Home from "./pages/Home"; // Adjust the path to your Home component
import About from "./pages/About"; // Adjust the path to your About component
import Skills from "./pages/Skills"; // Adjust the path to your Skills component
import Projects from "./pages/Projects"; // Adjust the path to your Projects component
import Contact from "./pages/Contact"; // Adjust the path to your Contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home page will render as the landing page */}
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
