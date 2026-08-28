import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaUsers, FaHome, FaAward, FaShoppingCart, FaSearch, FaLeaf, FaBars, FaTimes, FaQuoteLeft, FaRoute, FaBullhorn, FaShoppingBasket, FaBlog, FaBookOpen, FaSeedling, FaQuestionCircle } from "react-icons/fa";
import { GiFarmTractor, } from "react-icons/gi";
import ThemeToggle from "./ui/ThemeToggle";

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dropdownContent = {
        About: [
            {
                icon: <GiFarmTractor />,
                label: "Our Story",
                href: "#story",
                description: "History & Mission of Blacc Farms"
            },
            {
                icon: <FaUsers />,
                label: "Our Team",
                href: "#team",
                description: "Meet the Blacc Farmers"
            },
            {
                icon: <FaAward />,
                label: "Certifications",
                href: "#certifications",
                description: "Organic & quality standards"
            },
            {
                icon: <FaQuoteLeft />,
                label: "Testimonies",
                href: "#testimonies",
                description: "Hear from our satisfied customers"
            }
        ],
        Visit: [
            {
                icon: <FaHome />,
                label: "Farm Store",
                href: "#farm store",
                description: "Location & hours"
            },
            {
                icon: <FaRoute />,
                label: "Farm Tours",
                href: "#farm tour",
                description: "Guided experiences"
            },
            {
                icon: <FaBullhorn />,
                label: "Events",
                href: "/visit#events",
                description: "Workshops & festivals"
            },
            {
                icon: <FaShoppingBasket />,
                label: "U-Pick",
                href: "/visit#upick",
                description: "Pick your own"
            },
        ],
        Learn: [
            {
                icon: <FaBlog />,
                label: "Blog",
                href: "#blog",
                description: "Farm updates & tips"
            },
            {
                icon: <FaBookOpen />,
                label: "Recipes",
                href: "/learn#recipes",
                description: "Seasonal recipes"
            },
            {
                icon: <FaSeedling />,
                label: "Growing Guide",
                href: "/learn#guide",
                description: "Gardening tips"
            },
            {
                icon: <FaQuestionCircle />,
                label: "FAQ",
                href: "/learn#faq",
                description: "Common questions"
            },
        ],
    };

    const mainNavItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about", hasDropdown: true },
        { label: "Visit", href: "/visit", hasDropdown: true },
        { label: "Learn", href: "/learn", hasDropdown: true },
        { label: "Contact", href: "#blog" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-[#0a1f14]/95 backdrop-blur-sm border-b border-green/10 dark:border-[#2a4a38] shadow-md dark:shadow-[0_2px_12px_rgba(0,20,0,0.4)]">
            {/* Top Info Bar for Business Hours */}
            <div className="bg-green-900 dark:bg-[#0d2818] text-white text-xs py-2 px-6 border-b border-green-800/50 dark:border-[#2a4a38]">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-2 font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-emerald-300 font-semibold">Open Today:</span>
                        <span>Mon–Sat: 8:00 AM – 6:00 PM | Sun: 10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-green-200 text-xs">
                        <span>📍 144 Port Harcourt Airport Road, Port Harcourt</span>
                        <span>📞 (+234) 0815-068-5110</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-15">
                <div className="flex justify-between items-center py-3 lg:py-4">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="focus:outline-none cursor-pointer shrink-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}blaccfarmlogo1.png`}
                            alt="Blacc Farms Logo"
                            className="h-12 w-30 lg:h-20 lg:w-60 object-contain drop-shadow-xl hover:drop-shadow-3xl transition-all duration-300 brightness-110"
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {mainNavItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => {
                                    if (item.hasDropdown) {
                                        setActiveDropdown(item.label);
                                    }
                                }}
                                onMouseLeave={() => {
                                    setActiveDropdown(null);
                                }}
                            >
                                {/* Navigation Item */}
                                <motion.a
                                    href={item.href}
                                    className={`
                                    flex items-center gap-2
                                    rounded-lg px-3 py-2
                                    font-medium
                                    transition-colors duration-200
                                    ${activeDropdown === item.label
                                            ? "bg-green-50 text-green-800 dark:bg-[#1a3a28] dark:text-white"
                                            : "text-gray-700 hover:bg-green-50 hover:text-green-800 dark:text-[#b8d4b8] dark:hover:bg-[#1a3a28] dark:hover:text-white"
                                        }
                                `}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{item.label}</span>

                                    {item.hasDropdown && (
                                        <FaChevronDown
                                            className={`text-[10px] transition-transform duration-300 ${activeDropdown === item.label
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    )}
                                </motion.a>

                                {/* Dropdown */}
                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 6,
                                                    scale: 0.98,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="
                                                absolute
                                                left-1/2
                                                top-full
                                                z-50
                                                mt-2
                                                w-[720px]
                                                -translate-x-1/2
                                                overflow-hidden
                                                rounded-2xl
                                                border
                                                border-gray-200/80
                                                bg-white
                                                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                                                dark:border-[#2a4a38]
                                                dark:bg-[#10291b]
                                                dark:shadow-[0_20px_60px_rgba(0,20,0,0.45)]
                                            "
                                            >
                                                {/* Accent */}
                                                <div className="h-1 bg-gradient-to-r from-green-800 via-emerald-500 to-lime-400" />

                                                <div className="grid grid-cols-[220px_1fr]">

                                                    {/* Intro */}
                                                    <div className="bg-green-50 p-6 dark:bg-[#0c2417]">
                                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 text-xl text-white shadow-md dark:bg-emerald-600">
                                                            <FaLeaf />
                                                        </div>

                                                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-green-700 dark:text-emerald-400">
                                                            {item.label}
                                                        </p>

                                                        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                                            Discover Blacc Farms
                                                        </h3>

                                                        <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9fbaa5]">
                                                            Explore our farm, our people, and
                                                            everything we grow and produce.
                                                        </p>

                                                        <a
                                                            href={item.href}
                                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition-all hover:gap-3 dark:text-emerald-400"
                                                        >
                                                            Explore {item.label}
                                                            <span>→</span>
                                                        </a>
                                                    </div>

                                                    {/* Dropdown Links */}
                                                    <div className="p-6">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {dropdownContent[
                                                                item.label as keyof typeof dropdownContent
                                                            ]?.map((dropdownItem, index) => (
                                                                <motion.a
                                                                    key={dropdownItem.label}
                                                                    href={dropdownItem.href}
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 8,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.2,
                                                                        delay: index * 0.04,
                                                                    }}
                                                                    className="
                                                                    group/item
                                                                    flex items-start gap-4
                                                                    rounded-xl
                                                                    border border-transparent
                                                                    p-4
                                                                    transition-all
                                                                    duration-200
                                                                    hover:border-green-100
                                                                    hover:bg-green-50
                                                                    dark:hover:border-[#315c43]
                                                                    dark:hover:bg-[#183a27]
                                                                "
                                                                >
                                                                    {/* Icon */}
                                                                    <div
                                                                        className="
                                                                        flex h-11 w-11 shrink-0
                                                                        items-center justify-center
                                                                        rounded-xl
                                                                        bg-green-100
                                                                        text-lg
                                                                        text-green-800
                                                                        transition-all duration-200
                                                                        group-hover/item:bg-green-800
                                                                        group-hover/item:text-white
                                                                        dark:bg-[#214b32]
                                                                        dark:text-emerald-400
                                                                        dark:group-hover/item:bg-emerald-600
                                                                        dark:group-hover/item:text-white
                                                                    "
                                                                    >
                                                                        {dropdownItem.icon}
                                                                    </div>

                                                                    {/* Text */}
                                                                    <div className="min-w-0 flex-1">
                                                                        <div className="flex items-center justify-between gap-2">
                                                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                                                {dropdownItem.label}
                                                                            </span>

                                                                            <span
                                                                                className="
                                                                                translate-x-[-4px]
                                                                                text-green-700
                                                                                opacity-0
                                                                                transition-all
                                                                                duration-200
                                                                                group-hover/item:translate-x-0
                                                                                group-hover/item:opacity-100
                                                                                dark:text-emerald-400
                                                                            "
                                                                            >
                                                                                →
                                                                            </span>
                                                                        </div>

                                                                        <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-[#8faa96]">
                                                                            {dropdownItem.description}
                                                                        </p>
                                                                    </div>
                                                                </motion.a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-700 dark:text-[#b8d4b8] hover:text-green-800 dark:hover:text-white transition-colors duration-300 relative"
                            aria-label="Search"
                        >
                            <FaSearch className="text-xl" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-700 dark:text-[#b8d4b8] hover:text-green-800 dark:hover:text-white transition-colors duration-300 relative"
                            aria-label="Shopping Cart"
                        >
                            <FaShoppingCart className="text-xl" />
                            <span className="absolute -top-2 -right-2 bg-green-800 dark:bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </motion.button>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        <motion.a
                            href="/shop"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-800 dark:bg-[#1f5233] hover:bg-green-700 dark:hover:bg-[#2a6b44] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Shop Now
                        </motion.a>
                    </div>

                    <motion.button
                        className="lg:hidden text-gray-700 dark:text-[#b8d4b8]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white dark:bg-[#0d2818] border-t border-green/10 dark:border-[#2a4a38] overflow-hidden"
                        >
                            <div className="px-6 py-6 space-y-4 max-h-96 overflow-y-auto">
                                {mainNavItems.map((item) => (
                                    <div key={item.label}>
                                        <motion.button
                                            className="flex items-center justify-between w-full text-gray-700 dark:text-[#b8d4b8] hover:text-green-800 dark:hover:text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-50 dark:hover:bg-[#1a3a28] transition-colors duration-300"
                                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>{item.label}</span>
                                            {item.hasDropdown && (
                                                <FaChevronDown className={`text-sm transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                            )}
                                        </motion.button>

                                        {item.hasDropdown && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-4 mt-2 space-y-2"
                                            >
                                                {dropdownContent[item.label as keyof typeof dropdownContent]?.map((dropdownItem) => (
                                                    <a
                                                        key={dropdownItem.label}
                                                        href={dropdownItem.href}
                                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-[#244f38] transition-colors duration-300 group"
                                                    >
                                                        <div className="text-green-700 dark:text-emerald-400 text-lg">
                                                            {dropdownItem.icon}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900 dark:text-[#f9fafb]">
                                                                {dropdownItem.label}
                                                            </div>
                                                            <div className="text-xs text-gray-600 dark:text-[#8aa88a]">
                                                                {dropdownItem.description}
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile: Theme Toggle + Shop Now */}
                                <div className="pt-4 border-t border-green/10 dark:border-[#2a4a38] flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600 dark:text-[#8aa88a] font-medium">
                                            Dark mode
                                        </span>
                                        <ThemeToggle />
                                    </div>
                                    <motion.a
                                        href="/shop"
                                        className="flex-1 block text-center bg-green-800 dark:bg-[#1f5233] hover:bg-green-700 dark:hover:bg-[#2a6b44] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Shop Now
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;