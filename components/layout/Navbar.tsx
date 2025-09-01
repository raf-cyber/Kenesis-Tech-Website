"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }
      });
    });
    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="navbar-content w-full px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative">
            <img
              src="/images/K&T-Logo.jpg"
              alt="Kenesis & Tech Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full border border-gray-700"
            />
            <div className="absolute inset-0 rounded-full border border-white opacity-30"></div>
          </div>
          {/* Hide text on mobile */}
          <h1 className="hidden md:block text-lg sm:text-xl font-bold text-white tracking-tight">
            Kenesis & Tech
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-white">
          {["Home", "Services", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-px bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Contact + Hamburger */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="#contact"
            className="px-5 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition hidden md:block"
            whileHover={{
              y: -2,
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ y: 0 }}
          >
            Contact Us
          </motion.a>

          {/* Hamburger (Mobile only) */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              className="relative w-8 h-8"
              animate={menuOpen ? "open" : "closed"}
              variants={{
                open: { scale: 0.95 },
                closed: { scale: 1 },
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Button background */}
                <motion.div
                  className="absolute inset-0 bg-black border border-gray-700 rounded-lg"
                  animate={{
                    boxShadow: menuOpen
                      ? "inset 0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.1)"
                      : "inset 0 2px 4px rgba(0,0,0,0.4), 0 0 4px rgba(255,255,255,0.05)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hamburger / X icon */}
                <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                  <motion.div
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={
                      menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={{ opacity: menuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={
                      menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-black border-t border-gray-800"
          >
            <motion.div
              className="flex flex-col items-center py-5 text-white"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
            >
              {["Home", "Services", "FAQ", "Contact Us"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="w-full py-3 text-center font-medium hover:bg-gray-900 transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
