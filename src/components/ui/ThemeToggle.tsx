import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      id="theme-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`
        relative w-12 h-7 rounded-full border-2 flex items-center px-0.5 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
        ${isDark
          ? "bg-[#1f5233] border-[#2a6b44]"
          : "bg-green-100 border-green-300"
        }
        ${className}
      `}
    >
      {/* Sliding thumb */}
      <motion.div
        layout
        animate={{ x: isDark ? 18 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={`
          w-5 h-5 rounded-full flex items-center justify-center shadow-md
          ${isDark ? "bg-[#0a1f14]" : "bg-white"}
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={11} className="text-emerald-300" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={11} className="text-green-700" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
