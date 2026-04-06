import { motion } from 'framer-motion';

const VideoShowcase = () => {
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

          {/* Video Player */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden cursor-pointer group/player">
            {/* 
              TODO: Place your actual video file in public/assets/demo.mp4 
              and uncomment the <video> tag below.
            */}
            
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/player:opacity-100 transition-opacity duration-500"
              src="/demo.mp4"
            >
              您的浏览器不支持 HTML5 视频，请更新浏览器。
            </video>

            {/* Fallback Text / Placeholder Setup if video is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/80 to-[#1c1c2e]/80 -z-10">
               <svg className="w-16 h-16 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <p className="text-white/30 font-mono text-sm tracking-wider uppercase">Loading Demo Footage...</p>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoShowcase;
