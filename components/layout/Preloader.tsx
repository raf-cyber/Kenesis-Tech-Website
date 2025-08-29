"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [curtainPhase, setCurtainPhase] = useState<
    "start" | "wipe" | "logo" | "fadeOut" | "done"
  >("start");

  useEffect(() => {
    // Disable scrolling immediately
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const wipeTimer = setTimeout(() => setCurtainPhase("wipe"), 500);
    const logoTimer = setTimeout(() => setCurtainPhase("logo"), 1200);
    const fadeOutTimer = setTimeout(() => setCurtainPhase("fadeOut"), 3200);

    // Restore scrolling when fadeOut starts (so user can scroll while preloader fades out)
    const restoreScrollTimer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
    }, 3200);

    const doneTimer = setTimeout(() => setCurtainPhase("done"), 4000);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(restoreScrollTimer);
      clearTimeout(doneTimer);
      // Safety: restore overflow on unmount
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (curtainPhase === "done") return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden transition-opacity duration-700 ${
        curtainPhase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      data-preloader
      style={{ backgroundColor: "black" }}
    >
      {/* Logo fades in and then fades out */}
      <div
        className={`absolute flex items-center justify-center w-full h-full z-0 transition-opacity duration-700 ${
          curtainPhase === "logo"
            ? "opacity-100"
            : curtainPhase === "fadeOut"
            ? "opacity-0"
            : "opacity-0"
        }`}
      >
        <img
          src="/images/K&T-Logo.jpg"
          alt="Kenesis & Tech"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Lines moving slowly out of screen */}
      <div
        className="absolute left-0 w-full h-1 bg-white z-10 transition-transform duration-[5000ms] ease-out"
        style={{ transform: "translateY(-200vh)" }}
      />
      <div
        className="absolute left-0 w-full h-1 bg-white z-10 transition-transform duration-[5000ms] ease-out"
        style={{ transform: "translateY(200vh)" }}
      />
    </div>
  );
}
