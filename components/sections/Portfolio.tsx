"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  link?: string;
}
const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLButtonElement | null)[]>([]); // Changed to HTMLButtonElement
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "SmartCoding — LMS Platform",
      description: "An LMS for coding courses with seamless learning & sales.",
      videoUrl: "/videos/Portfolio-4.mp4",
      category: "Marketing",
      link: "https://scc-courses-main.vercel.app/",
    },
    {
      id: 2,
      title: "DevFolio",
      description: "A clean, professional portfolio for a software engineer.",
      videoUrl: "/videos/Portfolio-2.mp4",
      category: "Development",
      link: "https://tmalikdev.vercel.app",
    },
    {
      id: 3,
      title: "Caulfield High — 1970's Gallery",
      description: "A digital gallery capturing high school life in the 1970s.",
      videoUrl: "/videos/Portfolio-3.mp4",
      category: "Branding",
      link: "https://hypermind-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Zubies — Fashion Website",
      description:
        "A sleek eCommerce platform with stylish UI and smooth shopping flow.",
      videoUrl: "/videos/Portfolio-1.mp4",
      category: "Design",
      link: "convaai.vercel.app",
    },
    {
      id: 5,
      title: "Spin — Interactive Sphere",
      description:
        "A fun 3D sphere experience designed for smooth interaction.",
      videoUrl: "/videos/Portfolio-5.mp4",
      category: "Design",
      link: "https://threed-sphere.vercel.app/",
    },
  ];
  useEffect(() => {
    trailRefs.current[currentIndex]?.classList.add("active");
    animateSlide(currentIndex);
  }, []);
  const animateSlide = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const bg = card.querySelector(".bg");
    const title = card.querySelector("h2");
    const description = card.querySelector("p");
    const button = card.querySelector("a, button");
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });
    if (bg) tl.fromTo(bg, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 });
    if (description)
      tl.fromTo(description, { opacity: 0 }, { opacity: 1 }, "-=0.3");
    if (title)
      tl.fromTo(
        title,
        { opacity: 0, y: "30px" },
        { opacity: 1, y: "0px" },
        "-=0.3"
      );
    if (button)
      tl.fromTo(
        button,
        { opacity: 0, y: "-40px" },
        { opacity: 1, y: "0px" },
        "-=0.8"
      );
  };
  const slide = (condition: "increase" | "decrease") => {
    trailRefs.current.forEach((trail) => trail?.classList.remove("active"));
    const newIndex =
      condition === "increase"
        ? (currentIndex + 1) % portfolioItems.length
        : (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    if (sliderRef.current) {
      const translateX = `-${newIndex * (100 / portfolioItems.length)}%`;
      gsap.to(sliderRef.current, {
        x: translateX,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(newIndex);
          trailRefs.current[newIndex]?.classList.add("active");
          animateSlide(newIndex);
        },
      });
    }
  };
  const handleTrailClick = (index: number) => {
    if (index === currentIndex) return;
    trailRefs.current.forEach((trail) => trail?.classList.remove("active"));
    if (sliderRef.current) {
      const translateX = `-${index * (100 / portfolioItems.length)}%`;
      gsap.to(sliderRef.current, {
        x: translateX,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(index);
          trailRefs.current[index]?.classList.add("active");
          animateSlide(index);
        },
      });
    }
  };
  // 👇 Swipe gestures for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        slide("increase");
      }
      if (touchEndX - touchStartX > 50) {
        slide("decrease");
      }
    };
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex]);
  return (
    <section
      className="section-transition non-hero-section py-12 md:py-20 relative"
      id="portfolio"
    >
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 md:mb-12 lg:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-3xl font-medium leading-relaxed text-gray-400 max-w-3xl">
            We showcase <span className="text-white">exceptional projects</span>{" "}
            to demonstrate our <span className="text-white">expertise</span>.
          </p>
        </div>
        <div className="container relative overflow-hidden rounded-2xl md:rounded-3xl">
          <div
            ref={sliderRef}
            className="slider flex w-full min-h-[28rem] sm:min-h-[30rem] md:h-[35rem] lg:h-[40rem]"
            style={{ width: `${portfolioItems.length * 100}%` }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="box w-full h-full grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden relative"
                style={{ width: `${100 / portfolioItems.length}%` }}
              >
                <div className="bg absolute w-full md:w-[55%] h-[40%] md:h-full bg-black/20 left-0 md:-left-[10%] skew-x-0 md:skew-x-[7deg] origin-bottom-left p-4 md:p-8 md:pl-40">
                  <div className="absolute inset-0 bg-inherit md:skew-x-[10deg] pointer-events-none"></div>
                </div>
                <div className="details z-10 col-span-1 p-6 md:p-10 md:pl-20 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-3 md:mb-4">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-400 mb-5 md:mb-6">
                    {item.description}
                  </p>
                  {item.link ? (
                    <a
                      href={
                        item.link.startsWith("http")
                          ? item.link
                          : `https://${item.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-white text-black rounded-full hover:opacity-80 transition-all text-base font-medium"
                    >
                      Check Now
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-3 bg-gray-600 text-white rounded-full cursor-not-allowed text-base font-medium"
                    >
                      Check Now
                    </button>
                  )}
                </div>
                <div className="illustration col-span-1 flex justify-center items-center p-4 md:p-0">
                  <div className="inner group relative h-56 w-64 md:h-64 md:w-80 rounded-2xl md:rounded-3xl bg-white/20 md:skew-x-[-10deg] overflow-hidden transition-transform duration-300 scale-100 hover:scale-105">
                    {item.link ? (
                      <a
                        href={
                          item.link.startsWith("http")
                            ? item.link
                            : `https://${item.link}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Visit ${item.title} project`}
                      >
                        <span className="sr-only">
                          Visit {item.title} project
                        </span>
                      </a>
                    ) : null}
                    <div className="absolute inset-0 w-full h-full">
                      <video
                        src={item.videoUrl}
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Enhanced for Mobile */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4 md:px-6 z-20">
            {/* Prev Button */}
            <button
              className="prev flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white cursor-pointer transition-all duration-300 hover:bg-white/20 active:scale-95"
              onClick={() => slide("decrease")}
              aria-label="Previous project"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Trail Indicators */}
            <div className="trail flex gap-3 md:gap-4">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  ref={(el) => {
                    trailRefs.current[index] = el; // Now correctly typed as HTMLButtonElement
                  }}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  onClick={() => handleTrailClick(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="next flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white cursor-pointer transition-all duration-300 hover:bg-white/20 active:scale-95"
              onClick={() => slide("increase")}
              aria-label="Next project"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Project Counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium z-20">
            {currentIndex + 1} / {portfolioItems.length}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center mt-6 text-gray-400 text-sm">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            ></path>
          </svg>
          Swipe to navigate
        </div>
      </div>
      <style jsx>{`
        .grid-bg {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
        .container {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
        }
        .slider {
          transition: transform 0.5s ease-in-out;
        }
        /* Make sure navigation controls are above everything */
        .prev,
        .next,
        .trail {
          position: relative;
          z-index: 30;
        }
      `}</style>
    </section>
  );
};
export default PortfolioSlider;
