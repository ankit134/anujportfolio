import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function completeBoot(setContentHidden, setHidden) {
  setContentHidden(true)
  window.setTimeout(() => {
    setHidden(true)
    document.body.classList.remove('loader-active')
    document.documentElement.classList.remove('boot-loading')
  }, 600)
}

export function useBootLoader() {
  const reducedMotion = usePrefersReducedMotion()
  const [progress, setProgress] = useState(reducedMotion ? 100 : 0)
  const [hidden, setHidden] = useState(false)
  const [contentHidden, setContentHidden] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    document.body.classList.add('loader-active')

    if (reducedMotion) {
      completeBoot(setContentHidden, setHidden)
      return
    }

    let value = 0
    const interval = window.setInterval(() => {
      value += Math.random() * 18 + 8
      if (value >= 100) {
        value = 100
        window.clearInterval(interval)
        completeBoot(setContentHidden, setHidden)
      }
      setProgress(Math.min(100, Math.round(value)))
    }, 120)

    return () => window.clearInterval(interval)
  }, [reducedMotion])

  return { progress, hidden, contentHidden }
}
