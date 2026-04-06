import Hero from './components/Hero'
import FeaturesBento from './components/FeaturesBento'

function App() {
  return (
    <div className="w-full min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-neon-blue/30 selection:text-neon-blue">
      {/* Target area for Phase 1 & 2 insertion */}
      <Hero />
      <FeaturesBento />
    </div>
  )
}

export default App
