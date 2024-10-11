import React, { useRef, useState } from 'react';
import Intro from './components/Intro/Intro';
import Technical from './components/Technical/Technical';
import Project from './components/Project/Project';
import './App.css'; // Import CSS for styling
import { IoNavigateOutline } from "react-icons/io5";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const introRef = useRef(null);
  const technicalRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    setMenuOpen(false);
  };

  return (
    <div>
      <div className={`toggle-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="circle">
          <IoNavigateOutline className='nav-icon'/>
        </div>
        {menuOpen && (
          <div className="nav-dropdown">
            <button onClick={() => handleScrollToSection(introRef)} className="nav-item">
              Intro
            </button>
            <button onClick={() => handleScrollToSection(technicalRef)} className="nav-item">
              Technical
            </button>
            <button onClick={() => handleScrollToSection(projectRef)} className="nav-item">
              Project
            </button>
          </div>
        )}
      </div>

      <div style={{ padding: '1rem' }}>
        <section ref={introRef} style={{ marginBottom: '4rem', scrollMarginTop: '80px' }}>
          <Intro />
        </section>
        <section ref={technicalRef} style={{ marginBottom: '4rem', scrollMarginTop: '80px' }}>
          <Technical />
        </section>
        <section ref={projectRef} style={{ marginBottom: '4rem', scrollMarginTop: '80px' }}>
          <Project />
        </section>
      </div>
    </div>
  );
};

export default App;
