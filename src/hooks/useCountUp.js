import { useEffect, useRef, useState } from 'react'

// Animates from 0 to the numeric part of `value` once the element scrolls into
// view, preserving any non-numeric prefix/suffix (e.g. "25+", "2027").
export function useCountUp(value, duration = 1200) {
  const match = String(value).match(/\d+/)
  const target = match ? parseInt(match[0], 10) : null
  const [display, setDisplay] = useState(target === null ? value : String(value).replace(/\d+/, '0'))
  const ref = useRef(null)
  const played = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * target)
            setDisplay(String(value).replace(/\d+/, String(current)))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, target, duration])

  return [ref, display]
}
