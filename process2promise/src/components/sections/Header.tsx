"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" }
    // { name: "Register", href: "#register" }
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-serif font-bold text-xl tracking-tighter text-white">
            PROCESS TO <span className="text-amber-500">PROMISE</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">
            Leadership Summit
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="hover:text-amber-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            // onClick={() => handleScroll("#register")}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-none"
          >
            <a
              href="https://meet.google.com/cbp-jjmw-mxt"
              target="_blank"
              rel="noopener"
            >
              JOIN LIVE
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Menu size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/5 flex flex-col items-center pt-12 gap-8 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="text-2xl font-serif text-white hover:text-amber-500"
              >
                {link.name}
              </button>
            ))}
            <Button
              // onClick={() => handleScroll("#register")}
              className="w-64 bg-amber-600 h-14 text-white rounded-none mt-4"
            >
              <a
                href="https://meet.google.com/cbp-jjmw-mxt"
                target="_blank"
                rel="noopener"
              >
                JOIN LIVE
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// <motion.header
//   initial={{ y: -100 }}
//   animate={{ y: 0 }}
//   className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md px-6 py-4"
// >
//   <div className="max-w-7xl mx-auto flex justify-between items-center">
//     <div className="flex flex-col">
//       <span className="font-serif font-bold text-xl tracking-tighter text-white">
//         PROCESS TO <span className="text-amber-500">PROMISE</span>
//       </span>
//       <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
//         Virtual Conference
//       </span>
//     </div>

//     <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
//       <button
//         onClick={() => document.getElementById("speakers")}
//         className="hover:text-amber-500 transition-colors"
//       >
//         Vision
//       </button>
//       <a href="#agenda" className="hover:text-amber-500 transition-colors">
//         Schedule
//       </a>
//       <button
//         onClick={() => document.getElementById("speakers")}
//         className="hover:text-amber-500 transition-colors"
//       >
//         Speakers
//       </button>
//     </nav>

//     <Button
//       variant="outline"
//       className="border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black rounded-none transition-all px-6"
//     >
//       <a href="bit.ly/3LOotcu" target="_blank">
//         Join Live
//       </a>
//     </Button>
//   </div>
// </motion.header>;
