"use client";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section
      className="section-transition non-hero-section py-12 md:py-20 relative"
      id="contact"
    >
      {/* Grid background from Services component */}
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl float-animation-reverse"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {/* Left Column - Contact Information */}
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Transforming Vision into Reality
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-lg md:text-xl">
            Ready to bring your digital vision to life? Let's discuss how we can
            help you build something extraordinary.
          </p>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white text-base md:text-lg">
                  Email
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  kenesisntech@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white text-base md:text-lg">
                  Phone
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  +92 337 0494059
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white text-base md:text-lg">
                  Location
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  17 CCA 1, DHA Rahbar, Sector 1
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Contact Form */}
        <div className="service-card p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md text-white shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-white/50 transition w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-white/50 transition w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-white/50 transition"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-white/50 transition"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-white/50 transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bw-button btn-glow magnetic text-base md:text-lg py-3 px-4"
            >
              <span className="flex items-center justify-center">
                Send Message
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </form>
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
        .bw-button {
          background-color: white;
          color: black;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bw-button:hover {
          color: white;
        }
        .bw-button:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          z-index: -1;
          transition: transform 0.3s ease;
          transform: scaleX(0);
          transform-origin: left;
        }
        .bw-button:hover:before {
          transform: scaleX(1);
        }
        .btn-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-animation-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
