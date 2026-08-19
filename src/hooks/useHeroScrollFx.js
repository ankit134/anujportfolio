import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useHeroScrollFx() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.style.setProperty('--hero-scale', '1')
      document.documentElement.style.setProperty('--hero-opacity', '1')
      document.documentElement.style.setProperty('--hero-blur', '0px')
      document.documentElement.style.setProperty('--footer-opacity', '1')
      return
    }

    const onScroll = () => {
      const vh = window.innerHeight
      const progress = Math.min(1, window.scrollY / (vh * 0.85))

      document.documentElement.style.setProperty(
        '--hero-scale',
        String(1 - progress * 0.08),
      )
      document.documentElement.style.setProperty(
        '--hero-opacity',
        String(Math.max(0, 1 - progress * 1.2)),
      )
      document.documentElement.style.setProperty(
        '--hero-blur',
        `${progress * 6}px`,
      )
      document.documentElement.style.setProperty(
        '--footer-opacity',
        String(Math.max(0.2, 1 - progress * 0.5)),
      )
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])
}
