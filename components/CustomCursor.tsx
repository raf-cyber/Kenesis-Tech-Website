"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement
    const follower = document.querySelector(".cursor-follower") as HTMLElement

    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"

      setTimeout(() => {
        follower.style.left = e.clientX + "px"
        follower.style.top = e.clientY + "px"
      }, 100)
    }

    const addHoverEffect = () => {
      cursor.classList.add("cursor-grow")
    }

    const removeHoverEffect = () => {
      cursor.classList.remove("cursor-grow")
    }

    document.addEventListener("mousemove", moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .magnetic")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect)
      el.addEventListener("mouseleave", removeHoverEffect)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect)
        el.removeEventListener("mouseleave", removeHoverEffect)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  )
}
