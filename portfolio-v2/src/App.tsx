// App.jsx
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as THREE from 'three';
import NET from 'vanta/src/vanta.net';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';

function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x4c4589,
          backgroundColor: 0x050534, // use 6-hex digits
          points: 20.0,
          maxDistance: 20.0,
          spacing: 20.0,
          showDots: false,
        })
      );
    }
    return () => vantaEffect?.destroy();
  }, [vantaEffect]);

  return (
    <Router>
      {/* Fixed background that always fills the viewport */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Attach Vanta to this element; let it size to the viewport */}
        <div ref={vantaRef} className="w-full h-full" />
        {/* Optional: put blur/brightness on a separate overlay, 
            not on the Vanta canvas itself */}
        <div className="absolute inset-0 backdrop-blur-sm brightness-75 pointer-events-none" />
      </div>

      <Navbar />

      {/* Your scrolling content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
