import React, { useState, useEffect } from 'react';

const PortofolioBanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * 360
    }));
    setParticles(newParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + Math.cos(particle.direction) * particle.speed) % 100,
        y: (particle.y + Math.sin(particle.direction) * particle.speed) % 100
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div 
      className="relative h-screen w-full bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.5)`
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/30 rotate-45 animate-spin"  style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-blue-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-600/20 to-transparent rotate-12 animate-pulse" />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-between px-16">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6">
            {/* Glitch effect text */}
            <div className="relative">
              <h1 className="text-7xl font-black text-white tracking-tight leading-none">
                DWI
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse">
                  PRASETIA
                </span>
              </h1>
              {/* Glitch layers */}
              <h1 className="absolute top-0 left-0 text-7xl font-black text-blue-500/20 tracking-tight leading-none animate-ping"
                  style={{ animationDuration: '2s' }}>
                DWI
                <span className="block">PRASETIA</span>
              </h1>
            </div>

            {/* Subtitle with typewriter effect */}
            <div className="relative overflow-hidden">
              <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed">
                Crafting digital experiences that push boundaries and challenge conventions
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent  translate-x-[-100%] animate-pulse"  style={{ animationDuration: '3s' }} />
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6 pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-none overflow-hidden hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">VIEW WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-blue-500/50 text-blue-400  font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">CONTACT</span>
                <div className="absolute inset-0 bg-blue-500/5 scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Interactive element */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Main circle with glassmorphism */}
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-700/20  backdrop-blur-sm border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute inset-8 bg-gradient-to-tl from-blue-600/10 to-transparent  backdrop-blur-md border border-blue-400/20 rounded-full" />
              </div>
              
              {/* Inner rotating elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-blue-400/40 rounded-full animate-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full  animate-bounce shadow-lg shadow-blue-500/50" style={{ animationDuration: '2s' }} />
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-blue-500/50" />
                <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-600/50" />
                <div className="absolute top-1/2 -left-2 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-blue-400/50" />
              </div>
            </div>

            {/* Floating text elements */}
            <div className="absolute -top-8 -left-8 text-blue-400/60 font-mono text-sm animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              &lt;code/&gt;
            </div>
            <div className="absolute -bottom-8 -right-8 text-blue-500/60 font-mono text-sm animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              {'{design}'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-400/80">
        <span className="text-sm font-light mb-2">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default PortofolioBanner;