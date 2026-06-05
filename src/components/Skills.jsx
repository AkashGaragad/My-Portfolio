import React from 'react';
import Reveal from './Reveal';

const Skills = ({ setHovered }) => {
  return (
    <section id="skills" className="w-full py-32 bg-zinc-900/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Capabilities.</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">My technical and creative arsenal designed to build the next generation of web applications.</p>
        </Reveal>
      </div>
      
      {/* Animated Marquee */}
      <div className="relative flex overflow-x-hidden whitespace-nowrap py-10 group">
        <div className="animate-[marquee_20s_linear_infinite] flex space-x-16 items-center">
          {['Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'HTML5 & CSS3', 'Tailwind CSS', 'Git & GitHub', 'Machine Learning', 'IT Support', 'Troubleshooting'].map((skill, i) => (
            <div key={i} className="flex items-center space-x-16">
              <span className="text-5xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-default uppercase">
                {skill}
              </span>
              <span className="text-3xl text-zinc-700">✧</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="absolute top-10 animate-[marquee2_20s_linear_infinite] flex space-x-16 items-center">
          {['Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'HTML5 & CSS3', 'Tailwind CSS', 'Git & GitHub', 'Machine Learning', 'IT Support', 'Troubleshooting'].map((skill, i) => (
            <div key={`dup-${i}`} className="flex items-center space-x-16">
              <span className="text-5xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-default uppercase">
                {skill}
              </span>
              <span className="text-3xl text-zinc-700">✧</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Software Development", desc: "Building clean, structured, and efficient applications using Python, JavaScript, React.js, and Node.js." },
          { title: "Machine Learning & NLP", desc: "Implementing predictive models, natural language processing (NLP) text analysis, and data preprocessing." },
          { title: "IT Support & Troubleshooting", desc: "Diagnosing hardware and software issues, configuring networks, and supporting desktop systems." }
        ].map((skill, i) => (
          <Reveal key={i} delay={i * 200}>
            <div 
              className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 to-zinc-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{skill.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
