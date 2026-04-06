import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import FeaturesBento from './components/FeaturesBento'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-neon-blue/30 selection:text-neon-blue">
      {/* Target area for Phase 1 & 2 insertion */}
      <Hero />
      <VideoShowcase />
      <FeaturesBento />
      <Footer />
    </div>
  )
}

export default App
