import { motion } from 'framer-motion';

const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="text-center mb-16 px-4">
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
          
          <div className="relative z-10 h-full flex flex-col justify-end pt-32">
            <h3 className="text-2xl font-bold mb-3 text-white">长难句一键秒翻 (无缝阅读)</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              无论多长的英文段落，甚至是中英混排的文章，只要轻轻复制，悬浮窗都会<strong className="text-white">自动跳过中文，仅翻译外语部分。</strong>
              它甚至会自动帮你把断行的烂排版铺平。全程不干扰你的视线，保护你的阅读心流。
            </p>
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
          
          <div className="relative z-10 h-full flex flex-col justify-end pt-32">
            <h3 className="text-xl font-bold mb-3 text-white">永不断网的翻译体系</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              内建了脱机可用的大型生词库。即便遇到国内偶尔连不上翻译服务器的情况，底层逻辑也会自动为你无感切换到备用节点，拒绝报错弹窗。
            </p>
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
          
          <div className="relative z-10 h-full flex flex-col justify-end pt-32">
            <h3 className="text-xl font-bold mb-3 text-white">完全免费的多端同步</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              不再为云同步支付月费。你只需使用自己原有的 iCloud 或是 OneDrive 目录，所有单词本数据就会在你的所有设备间自动融合防丢。
            </p>
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
          
          <div className="relative z-10 h-full flex flex-col justify-end pt-32">
            <div className="flex items-center gap-4 mb-4 opacity-70">
              <span className="px-3 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold font-mono">忘记</span>
              <span className="px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-bold font-mono">困难</span>
              <span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold font-mono">良好</span>
              <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">简单</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">战胜遗忘的记忆曲线</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              内置了世界闻名的 SuperMemo-2 科学复习体系。你可以用顺滑的拖拽手势给小卡片进行反馈打分，程序会自动计算出最适合你的“下一次复习节拍”，不浪费一星半点时间去复习那些你已经掌握的词。
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesBento;
