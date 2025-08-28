"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.",
      imageUrl: "/portfolio1.jpg",
      category: "Design",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.",
      imageUrl: "/portfolio2.jpg",
      category: "Development",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.",
      imageUrl: "/portfolio3.jpg",
      category: "Branding",
    },
    {
      id: 4,
      title: "Project Four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.",
      imageUrl: "/portfolio4.jpg",
      category: "Marketing",
    },
    {
      id: 5,
      title: "Project Five",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.",
      imageUrl: "/portfolio5.jpg",
      category: "Design",
    },
  ];

  // Initialize animations
  useEffect(() => {
    // Set initial active trail
    trailRefs.current[currentIndex]?.classList.add("active");

    // Animate the initial slide
    animateSlide(currentIndex);
  }, []);

  // Animate slide content
  const animateSlide = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const bg = card.querySelector(".bg");
    const title = card.querySelector("h1");
    const description = card.querySelector("p");
    const button = card.querySelector("button");

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

  // Slide navigation
  const slide = (condition: "increase" | "decrease") => {
    // Remove active from all trails
    trailRefs.current.forEach((trail) => trail?.classList.remove("active"));

    // Calculate new index
    const newIndex =
      condition === "increase"
        ? (currentIndex + 1) % portfolioItems.length
        : (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;

    // Update slider position
    if (sliderRef.current) {
      const translateX = `-${newIndex * (100 / portfolioItems.length)}%`;
      gsap.to(sliderRef.current, {
        x: translateX,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(newIndex);
          // Add active to current trail
          trailRefs.current[newIndex]?.classList.add("active");
          // Animate the new slide content
          animateSlide(newIndex);
        },
      });
    }
  };

  // Trail click handler
  const handleTrailClick = (index: number) => {
    if (index === currentIndex) return;

    // Remove active from all trails
    trailRefs.current.forEach((trail) => trail?.classList.remove("active"));

    // Update slider position
    if (sliderRef.current) {
      const translateX = `-${index * (100 / portfolioItems.length)}%`;
      gsap.to(sliderRef.current, {
        x: translateX,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(index);
          // Add active to clicked trail
          trailRefs.current[index]?.classList.add("active");
          // Animate the new slide content
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
      {/* Grid background from Services component */}
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading - left aligned */}
        <div className="mb-16 text-left">
          {/* <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 text-sm font-medium text-gray-300 border border-white/20 shimmer">
            OUR PORTFOLIO
          </div> */}
          <h2 className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="mt-6 text-2xl lg:text-3xl font-medium leading-relaxed text-gray-400 max-w-3xl">
            We showcase <span className="text-white">exceptional projects</span>{" "}
            to demonstrate our <span className="text-white">expertise</span>.
          </p>
        </div>

        {/* Portfolio Slider Container */}
        <div className="container relative overflow-hidden rounded-3xl">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="slider flex w-full h-[35rem]"
            style={{ width: `${portfolioItems.length * 100}%` }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="box w-full h-full grid grid-cols-2 items-center overflow-hidden relative"
                style={{ width: `${100 / portfolioItems.length}%` }}
              >
                {/* Background element */}
                <div className="bg absolute w-[55%] h-full bg-black/20 -left-[10%] skew-x-[7deg] origin-bottom-left p-8 pl-40">
                  <div className="absolute inset-0 bg-inherit skew-x-[10deg] pointer-events-none"></div>
                </div>

                {/* Details */}
                <div className="details z-10 col-span-1 p-10 pl-20">
                  <h1 className="text-4xl font-medium mb-2">{item.title}</h1>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <button className="px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition-all">
                    Check Now
                  </button>
                </div>

                {/* Illustration */}
                <div className="illustration col-span-1 flex justify-center">
                  <div className="inner relative h-64 w-48 rounded-3xl bg-white/20 skew-x-[-10deg] overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={{ filter: "grayscale(100%)" }}
                    />
                    <div className="absolute inset-0 bg-white/40 rounded-3xl transform translate-x-8 -translate-y-4"></div>
                    <div className="absolute inset-0 bg-white/40 rounded-3xl transform translate-x-4 -translate-y-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="prev absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-20 cursor-pointer opacity-20 hover:opacity-100 transition-all flex items-center justify-center"
            onClick={() => slide("decrease")}
            aria-label="Previous project"
          >
            <svg
              className="w-8 h-8"
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
            className="next absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-20 cursor-pointer opacity-20 hover:opacity-100 transition-all flex items-center justify-center"
            onClick={() => slide("increase")}
            aria-label="Next project"
          >
            <svg
              className="w-8 h-8"
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

          {/* Trail Indicators */}
          <div className="trail absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {portfolioItems.map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  trailRefs.current[index] = el;
                }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-gray-600"
                }`}
                onClick={() => handleTrailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .container {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
        }
        .slider {
          transition: transform 0.5s ease-in-out;
        }
        @media (max-width: 1000px) {
          .container {
            border-radius: 0;
          }
          .slider {
            height: 80vh;
          }
        }
        @media (max-width: 650px) {
          .box {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
          }
          .bg {
            width: 100%;
            left: 0;
            bottom: 0;
            height: 54%;
            transform: skewX(0deg);
          }
          .bg::before {
            width: 120%;
            bottom: 0;
            transform: skewX(0deg);
          }
          .details {
            grid-row: 2 / span 1;
            grid-column: 1 / -1;
            text-align: center;
            padding: 2rem;
            transform: translateY(-9rem);
          }
          .illustration {
            grid-row: 1 / span 1;
            grid-column: 1 / -1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .prev,
          .next {
            display: none;
          }
          .trail {
            bottom: 13%;
          }
          .inner {
            height: 16rem;
            width: 12rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSlider;
