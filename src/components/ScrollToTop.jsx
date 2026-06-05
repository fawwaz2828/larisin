import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

const NAV_OFFSET = 84 // fixed navbar height

// On route change: scroll to the hash target (offset for the navbar) if present,
// otherwise to the top. Routes through the ScrollSmoother instance when active,
// and falls back to native scrolling when it isn't (reduced-motion).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Wait a frame so the new route's DOM (e.g. #fitur) is mounted.
    const id = requestAnimationFrame(() => {
      const smoother = ScrollSmoother.get()

      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          if (smoother) {
            smoother.scrollTo(el, true, `top ${NAV_OFFSET}px`)
          } else {
            const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
          return
        }
      }

      if (smoother) smoother.scrollTo(0, false)
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })

    return () => cancelAnimationFrame(id)
  }, [pathname, hash])

  return null
}
