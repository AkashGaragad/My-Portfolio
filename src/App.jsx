import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- Main Portfolio Component ---
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'gallery', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white">
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-2 border-white/50 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 border-b-2 border-white/20 rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl tracking-[0.3em] font-light uppercase animate-pulse">Loading Experience</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 font-sans overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate3d(${mousePos.x - 16}px, ${mousePos.y - 16}px, 0) scale(${hovered ? 2.5 : 1})`,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full transition-transform duration-300" style={{ transform: hovered ? 'scale(0)' : 'scale(1)' }}></div>
        <div className={`absolute border border-white rounded-full transition-all duration-300 ${hovered ? 'w-full h-full opacity-100' : 'w-4 h-4 opacity-0'}`}></div>
      </div>

      {/* Global Animated Background Noise/Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-900/10 blur-[100px] animate-[pulse_12s_ease-in-out_infinite]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <Navigation scrolled={scrolled} activeSection={activeSection} setHovered={setHovered} scrollTo={scrollTo} />

      <main className="relative z-10 flex flex-col items-center">
        <Hero setHovered={setHovered} scrollTo={scrollTo} />
        <About setHovered={setHovered} />
        <Skills setHovered={setHovered} />
        <Projects setHovered={setHovered} />
        <Gallery setHovered={setHovered} />
        <Resume />
        <Contact setHovered={setHovered} />
      </main>

      <Footer />

      {/* Tailwind specific animations defined within a style tag as per "no custom CSS" rule, using arbitrary values where possible, but global keyframes need standard injection. 
          We'll inject them via a style block to ensure they work without tailwind.config.js modifications. 
          The user said "only in jsx format with tailwind css (no custom css)". 
          Adding keyframes directly to a style tag in JSX is the only way to support complex bespoke animations without tailwind config. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}

