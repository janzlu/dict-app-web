import { motion } from 'framer-motion';

const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 relative z-10 overflow-hidden">
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `radial-gradient(ellipse at center, transparent 40%, var(--color-void) 100%), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 48px 48px, 48px 48px',
            backgroundPosition: 'center center'
          }}
        ></div>
        <div className="absolute top-1/4 -left-[200px] w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-[200px] w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[120px]"></div>
      </div>
      {/* ================= END BACKGROUND ================= */}

      {/* ================= CONTENT ================= */}
      <div className="text-center mb-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">强大不止于表，<span className="text-neon-blue">更懂阅读的你。</span></h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">我们厌倦了“花里胡哨的弹窗”。在此为你呈现的是一款专注阅读、极度安静的强大辅助工具。</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        
        {/* Core Feature 1: Engine (Span 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:col-span-2 glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl group-hover:bg-neon-blue/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-neon-blue opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-3 text-white">瞬间闪译，告别排版错乱</h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                遇到长难句或专业文章？只需轻轻选中，无论有多少乱七八糟的换行符，它都能智能帮你铺平并瞬间翻译。而且它非常聪明：只翻译外语，绝不打乱纯中文文档！
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Feature 2: Fallback (Span 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-1 glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute top-0 left-0 -ml-10 -mt-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl group-hover:bg-emerald-400/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-emerald-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-3 text-white">永不断网的翻译体验</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                内置了脱机可用的大型词库。哪怕你在火车上遇到网络极差、连不上翻译接口的情况，它也会自动无感切换到本地备用模式。拒绝任何烦人的报错弹窗。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Feature 3: Analytics Cockpit (Span 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-1 glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-neon-purple opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-3 text-white">全息数据仪表盘</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                新增 365 天记忆热力图与 7 日压力统计。背后的 SQLite 原子级追踪让每一滴汗水都肉眼可见，把枯燥的背词变成赛博朋克级的成就收集。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Feature 4: SM-2 Algorithm (Span 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="md:col-span-2 glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-amber-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-4 opacity-70">
                <span className="px-3 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold font-mono">Space 翻面</span>
                <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">1/2/3/4 指控评星</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">键盘大师：零中断背词神经系统</h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                彻底摆脱鼠标！在 V1.8.0 的暗黑闪卡模式下，您可以像黑客敲代码一样，通过左手区的指位物理反馈进行快速评分。盲控算法评估，让您的记忆心流毫无阻滞。
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesBento;
