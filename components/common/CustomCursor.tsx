"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const preloader = document.querySelector("[data-preloader]");
    if (!preloader) {
      setPreloaderActive(false);
    } else {
      const observer = new MutationObserver(() => {
        if (!document.querySelector("[data-preloader]")) {
          setPreloaderActive(false);
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = document.querySelector(".cursor") as HTMLElement;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`cursor fixed w-4 h-4 rounded-full bg-white z-[10000] pointer-events-none transition-opacity duration-300 ${
        preloaderActive ? "opacity-0" : "opacity-100"
      }`}
    ></div>
  );
}
