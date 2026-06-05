import React from 'react';
import profileImg from '../../assets/Profileimage.jpeg';

const Navigation = ({ scrolled, activeSection, setHovered, scrollTo }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'py-4 bg-zinc-950/70 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => scrollTo('home')}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white transition-colors duration-300 shrink-0">
            <img src={profileImg} alt="Akash" className="w-full h-full object-cover" />
          </div>
          <div className="relative text-xl font-bold tracking-tighter">
            <span className="relative z-10">AKASH</span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {['About', 'Skills', 'Projects', 'Gallery', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`relative group overflow-hidden ${activeSection === item.toLowerCase() ? 'text-white' : 'text-zinc-400 hover:text-white transition-colors duration-300'}`}
            >
              <span className="relative z-10">{item}</span>
              {activeSection === item.toLowerCase() && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </div>
        
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => {/* Toggle mobile menu */}}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
