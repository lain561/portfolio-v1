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
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x4c4589,
          backgroundColor: 0x50534,
          points: 20.0,
          maxDistance: 15.0,
          spacing: 20.0,
          showDots: false,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Router>
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-full -z-10 brightness-50"
        style={{ filter: 'blur(12px)' }} 
      >
      </div>
      <Navbar />

      {/* Above Background */}
      <div className="relative z-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
