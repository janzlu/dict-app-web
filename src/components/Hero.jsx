import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const [os, setOs] = useState('Windows');
  const heroRef = useRef(null);

  // Mouse parallax state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], ["2%", "-2%"]); // Move opposite to mouse
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], ["2%", "-2%"]);
  const blobX = useTransform(smoothMouseX, [-0.5, 0.5], ["-30%", "30%"]); // Follow mouse
  const blobY = useTransform(smoothMouseY, [-0.5, 0.5], ["-30%", "30%"]);

  useEffect(() => {
    // Client-side execution logic for OS checking
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Mac')) {
      setOs('Mac');
    } else {
      setOs('Windows');
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Dynamic Background Image Parallax */}
      <motion.div 
        className="absolute w-[110%] h-[110%] -top-[5%] -left-[5%] bg-cover bg-center opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/assets/hero_bg.png')", 
          filter: "blur(2px)",
          x: bgX,
          y: bgY
        }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void pointer-events-none"></div>

      {/* Background Neon Blob Following Mouse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div 
          className="w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none"
          style={{ x: blobX, y: blobY }}
        ></motion.div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 pointer-events-auto">
        
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wide text-neon-blue uppercase backdrop-blur-md">
          v1.5.0 正式版现已发布
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
          工作中无意识积累词汇量<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mt-2 block pb-2">
            沉浸式英语即时翻译助手
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 font-medium leading-relaxed">
          这是一款为职场人量身打造的急速<strong className="text-white">英语翻译与查词</strong>工具。专门解决工作中“看着眼熟却死活想不起意思”的生词痛点。无需切换窗口，选中长难句即刻秒翻，遇到生词自动打包装进词库。让你在没有任何“背单词打卡”压力的情况下，自然提升词汇量。
        </p>

        {/* Dynamic CTA Buttons based on OS */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="https://github.com/janzlu/my-dictionary/releases/latest" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            {os === 'Mac' ? (
              <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                 {/* Apple Icon */}
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            ) : (
               <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                {/* Windows Icon */}
                <path d="M0 93.6l183.6-25.3v177.4H0V93.6zm203.6-28L448 32v213.7H203.6V65.6zM0 265.8h183.6v177.4L0 417.9V265.8zm203.6 0H448v213.7l-244.4-33.6V265.8z"/>
              </svg>
            )}
            Download for {os}
            
            {/* Subtle glow behind the button */}
            <div className="absolute inset-0 rounded-xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </a>

          <a href="#features" className="px-8 py-4 rounded-xl glass-panel text-white font-medium hover:bg-white/10 transition-colors duration-300">
            了解核心亮点
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
