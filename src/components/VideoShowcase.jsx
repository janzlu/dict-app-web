import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically load all screenshots from the video-pic folder
const imageModules = import.meta.glob('../assets/video-pic/*.png', { eager: true });
const images = Object.values(imageModules).map(mod => mod.default || mod);

const VideoShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 py-12 px-4 max-w-6xl mx-auto flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl group relative"
      >
        {/* Glow behind video */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
        
        {/* Mock OS Window Frame */}
        <div className="relative bg-[#0d0d12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          {/* OS Header Bar */}
          <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-xs text-white/40 font-mono tracking-widest uppercase">Lumina Highlights</div>
          </div>

          {/* Slideshow Player */}
          <div className="relative aspect-video bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer group/player">
            
            {images.length > 0 ? (
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={index}
                  src={images[index]}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain opacity-85 group-hover/player:opacity-100 transition-opacity duration-500"
                  alt="Lumina Feature Highlight"
                />
              </AnimatePresence>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/80 to-[#1c1c2e]/80 -z-10">
                 <svg className="w-16 h-16 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
                 <p className="text-white/30 font-mono text-sm tracking-wider uppercase">Loading Screenshots...</p>
              </div>
            )}
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoShowcase;
