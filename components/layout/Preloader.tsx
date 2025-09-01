"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [curtainPhase, setCurtainPhase] = useState<
    "start" | "wipe" | "logo" | "fadeOut" | "done"
  >("start");

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const wipeTimer = setTimeout(() => setCurtainPhase("wipe"), 500);
    const logoTimer = setTimeout(() => setCurtainPhase("logo"), 1200);
    const fadeOutTimer = setTimeout(() => setCurtainPhase("fadeOut"), 3200);

    const restoreScrollTimer = setTimeout(() => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }, 3200);

    const doneTimer = setTimeout(() => setCurtainPhase("done"), 4000);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(restoreScrollTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  if (curtainPhase === "done") return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        curtainPhase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "black",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
      data-preloader
    >
      {/* Logo fades in/out */}
      <div
        className={`absolute flex items-center justify-center w-full h-full transition-opacity duration-700 ${
          curtainPhase === "logo" ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/images/K&T-Logo.jpg"
          alt="Kenesis & Tech"
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
        />
      </div>
    </div>
  );
}
