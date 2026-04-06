const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 mt-12 bg-void pt-16 pb-8">
      {/* Decorative top edge highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 relative p-2">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4 inline-block">
            沉浸式英语翻译助手
          </h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            这是一款专门为职场人士量身打造的急速英语翻译与查词工具。告别“看着眼熟却死活想不起意思”的生词痛点，在无痛查阅中自然提升外语词汇量。
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white/80 mb-4 tracking-wider text-sm">快捷导航</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a href="#" className="hover:text-neon-blue transition-colors duration-200">回到首页</a></li>
            <li><a href="#features" className="hover:text-neon-blue transition-colors duration-200">核心亮点介绍</a></li>
            <li><a href="https://github.com/janzlu/my-dictionary/releases/latest" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors duration-200">下载最新 Windows 版</a></li>
            <li><a href="https://github.com/janzlu/my-dictionary/releases/latest" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors duration-200">下载最新 MacOS 版</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white/80 mb-4 tracking-wider text-sm">开源与讨论</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <a href="https://github.com/janzlu/my-dictionary" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition-colors duration-200 flex items-center gap-2">
                <svg className="w-5 h-5 text-white/40 group-hover:text-neon-purple transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub 开源主页
              </a>
            </li>
            <li>
              <a href="https://github.com/janzlu/my-dictionary/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                提交建议与 Issues
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
        <p>© {new Date().getFullYear()} Immersive Dictionary App. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Crafted with passion using React & Tailwind V4</p>
      </div>
    </footer>
  );
};

export default Footer;
