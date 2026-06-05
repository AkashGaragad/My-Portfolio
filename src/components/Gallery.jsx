import React from 'react';
import Reveal from './Reveal';
import pahalImg from '../../assets/pahal.jpeg';
import bagalkotImg from '../../assets/Bagalkot.jpeg';
import bagalkot2Img from '../../assets/bagalkot2.jpeg';
import hubliImg from '../../assets/hubli.jpeg';
import belagaviImg from '../../assets/belagavi.jpeg';
import convocationImg from '../../assets/convocation.jpeg';
import degreeImg from '../../assets/degree.jpeg';

const Gallery = ({ setHovered }) => {
  return (
    <section id="gallery" className="w-full py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">Hackathons & <span className="text-zinc-600">Events.</span></h2>
        </Reveal>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            {h: 'h-64', title: 'Pahal Hackathon – Sangli', role: 'Secured 1st Prize', img: pahalImg},
            {h: 'h-96', title: 'Wave 3.0 Hackathon', role: 'Bagalkot - Participant', img: bagalkotImg},
            {h: 'h-80', title: 'IndiaNext Hackathon', role: 'Mumbai - Top 30 teams in India', img: bagalkot2Img},
            {h: 'h-96', title: 'Hack Arena Hackathon', role: 'Hubballi - Participant', img: hubliImg},
            {h: 'h-64', title: 'TechNova Event', role: 'Belagavi - Secured 3rd Prize', img: belagaviImg},
            {h: 'h-80', title: 'Ekathva 3.0 Hackathon', role: 'Ballari - Secured 3rd Prize', img: bagalkotImg}, // fallback as ballari.jpeg does not exist
            {h: 'h-80', title: 'Convocation Day', role: 'Convocation', img: convocationImg},
            {h: 'h-80', title: 'End Of BCA Degree', role: 'End Of BCA Degree', img: degreeImg},
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div 
                className={`relative w-full ${item.h} rounded-xl overflow-hidden group mb-6 break-inside-avoid bg-zinc-900`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-bold tracking-wide">{item.title}</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
