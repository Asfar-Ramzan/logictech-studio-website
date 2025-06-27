import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import CloudSolutions from './pages/CloudSolutions';
import Footer from './components/Footer';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <AppNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/services" element={<Services darkMode={darkMode} />} />
        <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
        <Route path="/blog" element={<Blog darkMode={darkMode} />} />
        <Route path="/careers" element={<Careers darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
       <Route path="/services/web-development" element={<WebDevelopment darkMode={darkMode} />} />
       <Route path="/services/mobile-development" element={<MobileDevelopment darkMode={darkMode} />} />
       <Route path="/services/cloud-solutions" element={<CloudSolutions darkMode={darkMode} />} />
      
      </Routes>
       <Footer />
    </div>
    
  );
}

export default App;
