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
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: " Zubies — Fashion Website",
      description:
        "A sleek eCommerce platform with stylish UI and smooth shopping flow.",
      videoUrl: "/videos/Portfolio-1.mp4",
      category: "Design",
      link: "convaai.vercel.app",
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
      title: "Caulfield High — 1970’s Gallery",
      description: "A digital gallery capturing high school life in the 1970s.",
      videoUrl: "/videos/Portfolio-3.mp4",
      category: "Branding",
      link: "https://hypermind-chi.vercel.app/",
    },
    {
      id: 4,
      title: "SmartCoding — LMS Platform",
      description: "An LMS for coding courses with seamless learning & sales.",
      videoUrl: "/videos/Portfolio-4.mp4",
      category: "Marketing",
      link: "https://scc-courses-main.vercel.app/",
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

  return (
    <section
      className="section-transition non-hero-section py-20 relative"
      id="portfolio"
    >
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="mt-6 text-lg sm:text-xl lg:text-3xl font-medium leading-relaxed text-gray-400 max-w-3xl">
            We showcase <span className="text-white">exceptional projects</span>{" "}
            to demonstrate our <span className="text-white">expertise</span>.
          </p>
        </div>
        <div className="container relative overflow-hidden rounded-3xl">
          <div
            ref={sliderRef}
            className="slider flex w-full h-[30rem] sm:h-[35rem]"
            style={{ width: `${portfolioItems.length * 100}%` }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="box w-full h-full grid grid-cols-1 sm:grid-cols-2 items-center overflow-hidden relative"
                style={{ width: `${100 / portfolioItems.length}%` }}
              >
                <div className="bg absolute w-full sm:w-[55%] h-[50%] sm:h-full bg-black/20 left-0 sm:-left-[10%] skew-x-0 sm:skew-x-[7deg] origin-bottom-left p-6 sm:p-8 sm:pl-40">
                  <div className="absolute inset-0 bg-inherit sm:skew-x-[10deg] pointer-events-none"></div>
                </div>
                <div className="details z-10 col-span-1 p-6 sm:p-10 sm:pl-20 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  {item.link ? (
                    <a
                      href={
                        item.link.startsWith("http")
                          ? item.link
                          : `https://${item.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition-all"
                    >
                      Check Now
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2 bg-gray-600 text-white rounded-full cursor-not-allowed"
                    >
                      Check Now
                    </button>
                  )}
                </div>
                <div className="illustration col-span-1 flex justify-center items-center">
                  <div className="inner group relative h-56 w-64 sm:h-64 sm:w-80 rounded-3xl bg-white/20 sm:skew-x-[-10deg] overflow-hidden transition-transform duration-300 scale-100 hover:scale-110">
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
          <button
            className="prev absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 w-10 sm:w-12 h-16 sm:h-20 cursor-pointer opacity-20 hover:opacity-100 transition-all flex items-center justify-center sm:flex"
            onClick={() => slide("decrease")}
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.898 91"
            >
              <path
                d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                transform="translate(0 91) rotate(-90)"
                fill="#fff"
              />
            </svg>
          </button>
          <button
            className="next absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 w-10 sm:w-12 h-16 sm:h-20 cursor-pointer opacity-20 hover:opacity-100 transition-all flex items-center justify-center sm:flex"
            onClick={() => slide("increase")}
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.898 91"
            >
              <path
                d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                transform="translate(56.898) rotate(90)"
                fill="#fff"
              />
            </svg>
          </button>
          <div className="trail absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4">
            {portfolioItems.map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  trailRefs.current[index] = el;
                }}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-gray-600"
                }`}
                onClick={() => handleTrailClick(index)}
              />
            ))}
          </div>
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
      `}</style>
    </section>
  );
};

export default PortfolioSlider;
