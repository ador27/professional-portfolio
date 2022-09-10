import './App.css';
import { Routes, Route } from "react-router-dom";
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>


    </div>
  );
}

export default App;
