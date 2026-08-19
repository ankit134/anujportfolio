import { scrollSections } from '../../data/content'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgressRail() {
  const { progress, activeIndex } = useScrollProgress()

  return (
    <div className="progress" aria-hidden="true">
      <div className="line">
        <div className="activeLine" style={{ transform: `scaleY(${progress})` }} />
      </div>
      <div className="sections">
        {scrollSections.map((section, index) => (
          <div
            key={section.id}
            className={`${section.type}${index <= activeIndex ? ' is-passed' : ''}${index === activeIndex ? ' is-active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
