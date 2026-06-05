import React from 'react';
import Reveal from './Reveal';
import { ExternalLinkIcon } from './Icons';

const Hero = ({ setHovered, scrollTo }) => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-start justify-center flex-1 w-full">
        <Reveal delay={100}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-zinc-300">
            <span className="relative flex h-2 w-2 inline-block mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
        </Reveal>
        
        <Reveal delay={300}>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-6">
            SOFTWARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">DEVELOPER.</span>
          </h1>
        </Reveal>
        
        <Reveal delay={500}>
          <p className="max-w-xl text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-12">
            BCA Graduate & Python/Web Developer. Building robust applications, implementing machine learning models, and solving complex problems with code.
          </p>
        </Reveal>
        
        <Reveal delay={700}>
          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => scrollTo('projects')}
              className="relative px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-zinc-300 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
            </button>
            <button 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => scrollTo('contact')}
              className="relative px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold tracking-wide overflow-hidden group hover:border-white/50 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </Reveal>
      </div>
    
    </section>
  );
};

export default Hero;
