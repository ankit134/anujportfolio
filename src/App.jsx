import BootLoader from './components/shell/BootLoader'
import FrameScreen from './components/shell/FrameScreen'
import CustomCursor from './components/shell/CustomCursor'
import ViewportShadow from './components/shell/ViewportShadow'
import NoiseOverlay from './components/shell/NoiseOverlay'
import BackgroundStage from './components/shell/BackgroundStage'
import HeroSection from './components/sections/HeroSection'
import SpecialtySection from './components/sections/SpecialtySection'
import CaseStudiesSection from './components/sections/CaseStudiesSection'
import InfoColumnsSection from './components/sections/InfoColumnsSection'
import ClosingSection from './components/sections/ClosingSection'
import { useHeroScrollFx } from './hooks/useHeroScrollFx'

function App() {
  useHeroScrollFx()

  return (
    <>
      <BootLoader />
      <CustomCursor />
      <NoiseOverlay />
      <ViewportShadow />
      <BackgroundStage />
      <FrameScreen />

      <div className="scroll-stage">
        <HeroSection />
        <SpecialtySection />
        <CaseStudiesSection />
        <InfoColumnsSection />
        <ClosingSection />
      </div>
    </>
  )
}

export default App
