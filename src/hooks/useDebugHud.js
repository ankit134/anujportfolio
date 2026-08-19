import { useEffect, useState } from 'react'

export function useDebugHud() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [scroll, setScroll] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const start = performance.now()

    const onMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0
      setScroll(pct)
    }

    const tick = () => {
      setTime(((performance.now() - start) / 1000).toFixed(1))
      frame = requestAnimationFrame(tick)
    }

    let frame = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return { cursor, scroll, time }
}
