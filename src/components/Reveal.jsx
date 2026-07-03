import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export default Reveal
