import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Menu, X } from 'lucide-react';

const HeroLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Projects', 'Expertise', 'Studio', 'Insights'];
  const mobileMenuItems = [...navItems, 'Reach Out'];

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
    },
  };

  const hamburgerLineVariants = {
    closed: {
      y: 0,
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const bottomLineVariants = {
    closed: {
      y: 0,
      opacity: 1,
    },
    open: {
      rotate: -90,
      y: 0,
      opacity: 1,
    },
  };

  const menuBackdropVariants = {
    closed: {
      opacity: 0,
      pointerEvents: 'none' as const,
    },
    open: {
      opacity: 1,
      pointerEvents: 'auto' as const,
    },
  };

  const menuContentVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      y: 32,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const buttonVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.55,
      },
    },
  };

  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="px-6 md:px-12 lg:px-16 py-5 md:py-6 flex justify-between items-center">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-12">
            <span className="text-white font-semibold text-lg tracking-tight font-sans">Atelier</span>
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Links + Buttons */}
          <div className="flex items-center gap-6">
            <a href="#" className="hidden md:block text-white/80 hover:text-white text-sm font-light transition-colors duration-200">
              Reach Out
            </a>
            <button className="hidden md:block bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
              Let's Talk
            </button>

            {/* Hamburger Menu */}
            <motion.button
              className="md:hidden relative w-6 h-5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              animate={isMenuOpen ? 'open' : 'closed'}
            >
              <motion.div
                className="absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full"
                variants={hamburgerVariants}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute top-2 left-1 w-4 h-0.5 bg-white rounded-full"
                variants={hamburgerLineVariants}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-0.5 bg-white rounded-full"
                variants={bottomLineVariants}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-xl flex flex-col"
              variants={menuBackdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Mobile Menu Header */}
              <div className="px-6 md:px-12 lg:px-16 py-5 md:py-6 flex justify-between items-center">
                <span className="text-white font-semibold text-lg tracking-tight font-sans">Atelier</span>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="relative w-6 h-6"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <motion.div
                className="flex-1 flex flex-col items-center justify-center space-y-0"
                variants={menuContentVariants}
                initial="closed"
                animate="open"
              >
                {mobileMenuItems.map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-4xl sm:text-5xl font-instrument-serif text-white border-b border-white/10 py-4 px-6 text-center hover:pl-4 transition-all duration-200 w-full"
                    variants={menuItemVariants}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile Menu Footer */}
              <motion.div
                className="px-6 pb-6 w-full"
                variants={buttonVariants}
                initial="closed"
                animate="open"
              >
                <button className="w-full bg-white text-black rounded-full py-4 font-medium hover:bg-white/90 transition-colors">
                  Let's Talk
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center">
          <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl">
            UX <span className="italic">and</span> APP
            <br />
            DESIGN <span className="italic">for</span> BOLD
            <br />
            VENTURES
          </h1>

          <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
            We shape digital products that define brands
            <br className="hidden sm:block" />
            and unlock exponential growth.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Button */}
            <motion.button
              className="flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Cases
              <motion.div
                className="group-hover:translate-x-0.5 transition-transform"
                animate={{ x: 0 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className="flex items-center gap-2 border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Reel
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
