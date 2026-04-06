import { motion } from 'framer-motion';

const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">硬核到底，<span className="text-neon-blue">不留余地。</span></h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">我们厌倦了“卡通单词卡”。在此为你呈现的是由纯粹算法与高阶工程堆叠出的四维架构。</p>
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
            <h3 className="text-2xl font-bold mb-3 text-white">3000 字符重度心流劫持 (Deep NLP Flat)</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              全局宿主机剪贴板底层嗅探。无论多深奥的学术论文或长篇研报，一键复制瞬间碾平所有排版换行。
              <strong className="text-white">中英文自适应降噪</strong>算法，自动绕过中文区域，做到严明剥离后的单体混排直译。不切出阅读视口，保持 100% 心流。
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
            <h3 className="text-xl font-bold mb-3 text-white">三级防震架构 (Triple Fallback)</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              从本地 0ms 响应 SQLite 脱机矩阵，越级至神经网络，最后兜底跨区域 `ECONNRESET` 熔断网关 (MyMemory)。绝不断网报错。
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
            <h3 className="text-xl font-bold mb-3 text-white">LWW CRDT 原生零库同步</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              没有任何高昂的订阅勒索。内嵌去中心化“最后写入者胜 (LWW)”极客校验规则。完美接驳 OneDrive/iCloud 进行全终端静默时间戳差分融合。
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
            <h3 className="text-2xl font-bold mb-3 text-white">逆转衰变的 SuperMemo-2 法则</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              完全内置于 SQLite 层级的时空微积分引擎。根据你的遗忘阈值（E-Factor）精准狙击下一次遗忘点。配合底层欧几里德几何向量引擎 (Euclidean Delta) 重构的原生无缝飞牌拖拽，实现最高效率的记忆屠宰。
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesBento;
