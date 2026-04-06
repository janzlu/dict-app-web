import { motion } from 'framer-motion';

const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 relative z-10 overflow-hidden">
      {/* Ambient Background Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `radial-gradient(circle at center, transparent 20%, var(--color-void) 100%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 48px 48px, 48px 48px',
            backgroundPosition: 'center center'
          }}
        ></div>
        <div className="absolute top-1/4 -left-[200px] w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-[200px] w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="text-center mb-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">强大不止于表，<span className="text-neon-blue">更懂阅读的你。</span></h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">我们厌倦了“花里胡哨的弹窗”。在此为你呈现的是一款专注阅读、极度安静的强大辅助工具。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        
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
              <h3 className="text-2xl font-bold mb-3 text-white">即点即译，生词无感入库</h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                无论多长的中英混排文章，或是工作中遇到的晦涩术语，在这个极轻的悬浮窗里查过之后，如果是生词将<strong className="text-white">全自动悄悄进入你的个人词库</strong>。曾经查过的熟词也能瞬时调出记录，将查阅、翻译与捕获无缝合一。
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
          <div className="absolute top-0 left-0 -ml-10 -mt-10 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-neon-purple opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-3 text-white">永不断网的翻译体系</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                内建了脱机可用的大型生词库。即便遇到国内偶尔连不上翻译服务器的情况，底层逻辑也会自动为你无感切换到备用节点，拒绝报错弹窗。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Feature 3: CRDT Sync (Span 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-1 glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-3 text-white">完全免费的多端同步</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                不再为云同步支付月费。你只需使用自己原有的 iCloud 或是 OneDrive 目录，所有单词本数据就会在你的所有设备间自动融合防丢。
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
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <svg className="w-16 h-16 text-neon-purple opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-4 opacity-70">
                <span className="px-3 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold font-mono">忘记</span>
                <span className="px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-bold font-mono">困难</span>
                <span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold font-mono">良好</span>
                <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">简单</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">碎片闪卡，真正“无痛”记忆</h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                抛弃一切必须强制打卡的紧迫感。利用上班喝咖啡的间隙，随意切出卡盘点击<strong className="text-white">随机播放</strong>。依托于背后的科学算法，你只需顺着直觉反馈，程序就会在关键时刻帮你彻底转化掉那些“看着眼熟又忘了”的单词。
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesBento;
