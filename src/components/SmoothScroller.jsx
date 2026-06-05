import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// Wraps the scrollable page content and applies GSAP inertia smooth-scroll.
// The sticky navbar lives OUTSIDE this wrapper (ScrollSmoother transforms the
// content, which would break position:sticky).
export default function SmoothScroller({ children }) {
  useEffect(() => {
    // Native scroll is better for reduced-motion users — skip smoothing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2, // seconds of "catch-up" — higher = smoother/slower
        effects: true, // enables data-speed / data-lag parallax attributes
        smoothTouch: 0, // disable on touch devices; native feels better there
      })
    })

    return () => ctx.revert() // cleanup: reverts the smoother + its ScrollTriggers
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
