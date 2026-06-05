import React from 'react';
import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';

const Projects = ({ setHovered }) => {
  return (
    <section id="projects" className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm text-zinc-500 uppercase tracking-[0.3em] font-medium mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured <br/> <span className="text-zinc-500">Projects.</span></h3>
          </div>
          <button 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex items-center gap-3 text-sm uppercase tracking-widest font-semibold hover:text-white transition-colors"
          >
            View Archive 
            <span className="p-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </Reveal>

      <div className="flex flex-col gap-24 md:gap-32">
        {[
          {
            id: "01",
            title: "Resume Screening & Ranking System",
            category: "Python & Machine Learning",
            desc: "An automated screening tool that extracts skills, education, and experience from resumes using NLP techniques (NLTK, spaCy) and ranks them based on job descriptions.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
          },
          {
            id: "02",
            title: "Machine Learning Solutions",
            category: "Data Science & NLP",
            desc: "Predictive modeling and data preprocessing solutions developed during internship, utilizing libraries like NumPy, Pandas, and Scikit-learn for real-world datasets.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          },
          {
            id: "03",
            title: "Interactive Developer Portfolio",
            category: "React & Tailwind CSS",
            desc: "A premium, responsive developer portfolio showing personal journey and achievements. Built with high performance and Web3Forms contact integration.",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070&auto=format&fit=crop"
          },
          {
            id: "04",
            title: "Network Diagnostics Dashboard",
            category: "IT Support Concept",
            desc: "A mock dashboard representing network connectivity, hardware diagnostics, and workstation status reports for IT support departments.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
          }
        ].map((project, i) => (
          <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}>
            <div className="w-full md:w-3/5 perspective-1000">
              <Reveal delay={100}>
                <div 
                  className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-700 hover:rotate-x-2 hover:-rotate-y-2 hover:scale-[1.02] shadow-2xl shadow-black/50 border border-white/5"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  
                  {/* Hover overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <span className="text-white text-sm uppercase tracking-widest font-bold">View</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <Reveal delay={300}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">{project.id}</span>
                  <span className="h-[1px] w-12 bg-white/20"></span>
                  <span className="text-sm text-zinc-400 uppercase tracking-widest">{project.category}</span>
                </div>
                <h4 className="text-4xl font-bold mb-6 group-hover:text-white transition-colors">{project.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">{project.desc}</p>
                
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:gap-4 transition-all pb-2 border-b border-white/20 hover:border-white w-max">
                  Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
