import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-zinc-950 text-center relative z-10">
      <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium">
        © {new Date().getFullYear()} Akash. Portfolio. <span className="mx-2">|</span> Designed & Built with <span className="text-red-500 animate-pulse">♥</span>
      </p>
    </footer>
  );
};

export default Footer;
