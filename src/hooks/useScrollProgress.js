import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'specialty',
  'work',
  'project-0',
  'project-1',
  'project-2',
  'project-3',
  'info',
]

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? window.scrollY / max : 0
      setProgress(pct)

      const mid = window.scrollY + window.innerHeight * 0.35
      let current = 0

      SECTION_IDS.forEach((id, index) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) current = index
      })

      setActiveIndex(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { progress, activeIndex }
}
