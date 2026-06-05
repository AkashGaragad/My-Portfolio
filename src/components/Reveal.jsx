import React, { useState, useEffect, useRef } from 'react';

const Reveal = ({ children, width = 'w-full', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
      <div
        className={`absolute inset-0 bg-white z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right ${
          isVisible ? 'scale-x-0' : 'scale-x-100'
        }`}
        style={{ transitionDelay: `${delay + 100}ms` }}
      />
    </div>
  );
};

export default Reveal;
