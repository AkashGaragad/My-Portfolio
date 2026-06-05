import React from 'react';
import Reveal from './Reveal';
import profileImg from '../../assets/Profileimage.jpeg';

const About = ({ setHovered }) => {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-5 relative group">
          <Reveal>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10"
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}>
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent z-10 mix-blend-multiply"></div>
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl font-black opacity-20">IMAGE</div>
              <img src={profileImg} alt="Akash" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-zinc-950 border border-white/10 rounded-xl backdrop-blur-xl animate-[bounce_5s_ease-in-out_infinite]">
              <p className="text-4xl font-bold text-white mb-1">BCA</p>
              <p className="text-sm text-zinc-400">Graduate 2026</p>
            </div>
          </Reveal>
        </div>
        
        <div className="md:col-span-7 md:pl-12">
          <Reveal>
            <h2 className="text-sm text-zinc-500 uppercase tracking-[0.3em] font-medium mb-4">About Me</h2>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
              I build scalable software solutions and design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">efficient</span> systems.
            </h3>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
              As a BCA graduate and Python/Web Developer, I bridge the gap between logic and real-world implementation. I have hands-on experience in software development and machine learning, with a passion for troubleshooting complex systems.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
              My hackathon achievements and academic performance reflect a standard of quality, analytical thinking, and collaboration. I thrive on creating digital products that are optimized for speed, scalability, and user accessibility.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-bold mb-1">6</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">Hackathons</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1">8.9</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">BCA CGPA</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1">100%</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">Dedicated</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
