"use client"

import { useEffect } from "react"

export default function ScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector(".scroll-progress") as HTMLElement
      if (!scrollProgress) return

      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      scrollProgress.style.width = scrollPercent + "%"
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return <div className="scroll-progress"></div>
}
