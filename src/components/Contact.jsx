import React, { useState } from 'react';
import Reveal from './Reveal';
import { MailIcon, GithubIcon, LinkedinIcon, XIcon } from './Icons';

const Contact = ({ setHovered }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_access_key_here' || accessKey.trim() === '') {
      setStatus('error');
      setStatusMessage('Web3Forms Access Key is not configured. Please check your .env file.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Form Submission',
          from_name: formData.name || 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('An error occurred while sending the message. Please check your network connection and try again.');
    }
  };

  return (
    <section id="contact" className="w-full py-32 px-6 md:px-12 bg-zinc-900/50 border-t border-white/5 relative overflow-hidden">
      {/* Background glow for contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's create something <span className="italic font-light text-zinc-400">extraordinary.</span></h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
              I'm currently available for full-time roles, freelance projects, and creative collaborations.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:akashgaragad2005@gmail.com" className="flex items-center gap-4 text-xl group w-max" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span className="relative overflow-hidden">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">akashgaragad2005@gmail.com</span>
                  <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-blue-400">akashgaragad2005@gmail.com</span>
                </span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { Icon: GithubIcon, href: "https://github.com/AkashGaragad" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/akash-garagad" },
                { Icon: XIcon, href: "https://x.com/AkashGaragad" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href !== '#' ? '_blank' : undefined} rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-zinc-950/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent disabled:opacity-50" 
                placeholder="Name" 
                required 
              />
              <label htmlFor="name" className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-400 pointer-events-none uppercase tracking-widest font-semibold">Your Name</label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent disabled:opacity-50" 
                placeholder="Email" 
                required 
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-400 pointer-events-none uppercase tracking-widest font-semibold">Email Address</label>
            </div>
            
            <div className="relative group">
              <textarea 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none disabled:opacity-50" 
                placeholder="Message" 
                required
              ></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-400 pointer-events-none uppercase tracking-widest font-semibold">Tell me about you</label>
            </div>
            
            {statusMessage && (
              <div className={`p-4 rounded-xl border text-sm font-medium ${
                status === 'success' 
                  ? 'bg-emerald-950/30 border-emerald-500/20 text-emerald-400' 
                  : 'bg-rose-950/30 border-rose-500/20 text-rose-400'
              }`}>
                {statusMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              onMouseEnter={() => setHovered(true)} 
              onMouseLeave={() => setHovered(false)}
              className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full relative overflow-hidden group"
            >
              <span className="relative z-10">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              {status !== 'submitting' && (
                <div className="absolute inset-0 bg-blue-500 transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 mix-blend-multiply"></div>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
