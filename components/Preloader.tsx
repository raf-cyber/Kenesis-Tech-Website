"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader-container">
      <div className="preloader-logo">
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
        <div className="preloader-face">
          <span className="preloader-letter">K</span>
        </div>
      </div>
      <h2 className="preloader-text">Kenesis & Tech</h2>
      <div className="preloader-progress">
        <div className="preloader-progress-bar"></div>
      </div>
      <div className="preloader-dots">
        <div className="preloader-dot"></div>
        <div className="preloader-dot"></div>
        <div className="preloader-dot"></div>
      </div>
    </div>
  )
}
