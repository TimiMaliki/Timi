import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const brandName = "Timi.";
  const links = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/" },
    { name: "My Work", href: "/" },
    { name: "Contact me", href: "/" },
  ];

  const [open, isOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("Theme") === "dark";
  });

  useEffect(() => {
    const rootEl = window.document.documentElement;
    if (darkMode) {
      rootEl.classList.add("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      rootEl.classList.remove("dark");
      localStorage.setItem("Theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`absolute top-0 left-0  w-full z-50 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Desktop view */}

        {/* my name */}
        <div className={`brand text-2xl ovo-regular font-semibold ${darkMode ? "hover:text-blue-700 transition-all duration-300" : ""} cursor-pointer`}>
          {brandName}
        </div>
        {/* ------------------Nav Links -------------------*/}
        <div className="hidden md:flex ovo-regular justify-center space-x-8 border border-slate-50 px-7 p-4 rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.16)]">
          {links.map((nav, index) => (
            <a
              href={nav.href}
              key={index}
              className={`text-lg font-medium ${darkMode ? "hover:text-blue-700 transition-all duration-300" : ""}`}
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Light / Dark Mode and gitHub*/}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-xl transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className={`w-8 h-8 ${darkMode ? "text-blue-700" : "text-slate-900"}`} />
            ) : (
              <MoonIcon className={`w-8 h-8 ${darkMode ? "text-blue-700" : "text-slate-900"}`} />
            )}
          </button>

          {/* GitHub Contact */}

         <a href="https://github.com/TimiMaliki">
         <FaGithub className={`w-8 h-10 ${darkMode ? "text-blue-700" : "text-slate-900"}`} />
         </a>
        </div>

        {/* Mobile view */}

        <button onClick={() => isOpen(!open)} className="md:hidden">
          {open ? (
            <XMarkIcon className="w-8 h-8 text-slate-900" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu*/}

      {open && (
        <div className="md:hidden flex flex-col justify-center px-6 py-5 text-lg">
          {links.map((nav, index) => (
            <a
              href={nav.href}
              key={index}
              className="text-md font-medium  hover:text-slate-900 transition-all duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
