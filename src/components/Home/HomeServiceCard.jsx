const HomeServiceCard = (props) => {
  const { color, icon, label } = props;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateZ(20px)`;
    
    // Update glow position
    const glow = card.querySelector('.magnetic-glow');
    if (glow) {
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)';
    
    const glow = card.querySelector('.magnetic-glow');
    if (glow) {
      glow.style.left = '50%';
      glow.style.top = '50%';
    }
  };

  const handleClick = (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1000;
    `;
    
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div
      className={`${
        color === "blue"
          ? "bg-[url('/assets/images/shape-blue.webp')] group"
          : icon === "iot"
          ? "bg-[url('/assets/images/shape-white.webp')] group"
          : "bg-[url('/assets/images/shape-white.webp')] group"
      } bg-contain bg-no-repeat bg-center flex flex-col gap-2 justify-center items-center w-full h-[170px] pb-4 
      cursor-pointer transition-all duration-700 ease-out transform hover:-translate-y-3 
      hover:shadow-2xl hover:shadow-gray-400/30 relative 
      animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both`}
      style={{
        backgroundImage: color === "blue" 
          ? "url('/assets/images/shape-blue.webp')" 
          : "url('/assets/images/shape-white.webp')",
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Magnetic glow effect */}
      <div className="magnetic-glow absolute w-32 h-32 bg-gradient-radial from-white/20 via-blue-400/10 to-transparent rounded-full blur-xl transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
           style={{ left: '50%', top: '50%' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/60 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Background transition overlay with morphing effect */}
      <div 
        className={`absolute inset-0 bg-contain bg-no-repeat bg-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 transform group-hover:scale-110 ${
          color === "blue" || icon === "iot" 
            ? "bg-[url('/assets/images/shape-grey.webp')]" 
            : "bg-[url('/assets/images/shape-grey.webp')]"
        }`}
        style={{
          backgroundImage: "url('/assets/images/shape-grey.webp')"
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
      
      {/* Content container with enhanced 3D effects */}
      <div className="relative z-10 flex flex-col gap-3 justify-center items-center transform transition-all duration-400 ease-out group-hover:scale-110 group-hover:rotate-y-2" style={{ transformStyle: 'preserve-3d' }}>
        {/* Icon container with advanced 3D animations */}
        <div
          className={`flex justify-center items-center rounded-full w-16 h-16 p-2 transition-all duration-500 ease-out transform ${
            color === "blue"
              ? "bg-white group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600"
              : icon === "iot"
              ? "bg-purple-500 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500"
              : "bg-primary group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500"
          } group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-blue-500/30 relative group-hover:scale-110`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-0 group-hover:scale-125 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-full border border-white/20 scale-0 group-hover:scale-150 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100" />
          
          {/* Icon background glow effect with multiple layers */}
          <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-110 transition-transform duration-600 ease-out blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full scale-0 group-hover:scale-125 transition-transform duration-800 ease-out" />
          
          {/* Rotating gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-1 bg-white rounded-full" />
          
          {/* Default Image with enhanced transitions */}
          <img
            src={`/assets/icons/${icon}-blue.webp`}
            alt={`${label} icon`}
            className={`absolute transition-all duration-500 ease-out w-9 h-9 transform z-10 ${
              color === "white" || color === "blue"
                ? "opacity-100 group-hover:opacity-0 group-hover:scale-50 group-hover:-rotate-180 group-hover:blur-sm" 
                : "opacity-100 group-hover:opacity-0 group-hover:scale-50 group-hover:-rotate-180 group-hover:blur-sm"
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          />

          {/* Hover Image with enhanced transitions */}
          <img
            src={`/assets/icons/${icon}-blue.webp`}
            alt={`${label} hover icon`}
            className={`absolute transition-all duration-500 ease-out w-9 h-9 transform z-10 ${
              color === "white" || color === "blue"
                ? "opacity-0 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-360 group-hover:drop-shadow-lg"
                : "opacity-0 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-360 group-hover:drop-shadow-lg"
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          />

          {/* Sparkle effects */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                left: `${25 + i * 25}%`,
                top: `${25 + (i % 2) * 50}%`,
                animationDelay: `${i * 0.1}s`,
                animation: 'sparkle 1.5s ease-in-out infinite'
              }}
            />
          ))}
        </div>

        {/* Text with advanced animations and glow effects */}
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold text-center transition-all duration-500 ease-out transform relative ${
            color === "blue"
              ? "text-white group-hover:text-white"
              : "text-gray-900 group-hover:text-white"
          } group-hover:translate-y-1 group-hover:drop-shadow-xl group-hover:scale-105`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Text glow effect */}
          <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm">
            {label}
          </span>
          <span className="relative z-10">{label}</span>
        </p>
      </div>

      
    </div>
  );
};

export default HomeServiceCard;
