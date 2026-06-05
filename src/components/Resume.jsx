import React from 'react';
import Reveal from './Reveal';

const Resume = () => {
  return (
    <section id="resume" className="w-full py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <Reveal>
        <div className="text-center mb-20">
          <h2 className="text-sm text-zinc-500 uppercase tracking-[0.3em] font-medium mb-4">Experience & Education</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Journey.</span></h3>
        </div>
      </Reveal>

      <div className="space-y-16">
        <div className="relative border-l border-white/10 pl-8 md:pl-0 md:border-none">
          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {[
            { year: "Jan 2026 - Apr 2026", title: "Python & Machine Learning Intern", company: "Vivaansha Systems Pvt Ltd", side: "left" },
            { year: "2024 - Present", title: "Open Source Developer", company: "Self-directed Projects", side: "right" },
            { year: "2023 - 2026", title: "Bachelor of Computer Applications (BCA)", company: "KLE Society's College of BCA Mahalingapur, Bagalkot University", side: "left" },
            { year: "2022 - 2023", title: "XII – Commerce with Computer Science", company: "SBH Government PU College Yadahalli", side: "right" },
            { year: "2021 - 2022", title: "X – SSLC", company: "Government High School Belagali", side: "left" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className={`relative mb-12 md:mb-24 w-full md:w-1/2 ${item.side === 'left' ? 'md:pr-16 md:ml-0 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'} text-left group`}>
                {/* Dot */}
                <div className={`absolute top-0 ${item.side === 'left' ? '-left-10 md:-right-[5px] md:left-auto' : '-left-10 md:-left-[5px]'} w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-500 group-hover:border-white group-hover:bg-white transition-colors duration-300 z-10`}></div>
                
                <span className="text-sm text-zinc-500 font-mono tracking-wider">{item.year}</span>
                <h4 className="text-2xl font-bold mt-2 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all">{item.title}</h4>
                <p className="text-zinc-400">{item.company}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={400}>
        <div className="mt-20 space-y-6">
          <h4 className="text-2xl font-bold mb-6 text-center">Professional Certifications</h4>
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                title: "Google AI Essentials", 
                issuer: "Google | Coursera", 
                desc: "Covers fundamental concepts of artificial intelligence, practical applications of AI tools, and prompt engineering.",
                link: "https://www.coursera.org/verify/CHR2QS2IMD6O"
              },
              { 
                title: "The Bits and Bytes of Computer Networking", 
                issuer: "Google | Coursera", 
                desc: "Covers networking technologies, TCP/IP protocols, network services (DNS, DHCP), and routing.",
                link: "https://www.coursera.org/verify/0EDQWYCEO4YU"
              },
              { 
                title: "Technical Support Fundamentals", 
                issuer: "Google | Coursera", 
                desc: "Covers customer support, hardware diagnostics, operating systems, networking, and security concepts.",
                link: "https://www.coursera.org/verify/JC77ADN2UFN3"
              },
            ].map((cert, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/20 transition-all duration-300">
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
                  <p className="text-zinc-500 text-xs mb-2 font-mono">{cert.issuer}</p>
                  <p className="text-zinc-400 text-sm">{cert.desc}</p>
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (cert.link.includes("YOUR_")) {
                      e.preventDefault();
                      alert(`Please configure the credential link for "${cert.title}" in src/components/Resume.jsx`);
                    }
                  }}
                  className="shrink-0 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest transition-colors text-center text-white"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Resume;
