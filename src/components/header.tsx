import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaShoppingCart, FaSearch, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { GiFarmTractor, GiFruitBowl, GiChicken } from "react-icons/gi";
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
                icon: <GiChicken />,
                label: "Our Team",
                href: "#team",
                description: "Meet the Blacc Farmers"
            },
            {
                icon: <FaLeaf />,
                label: "Certifications",
                href: "#certifications",
                description: "Organic & quality standards"
            },
            {
                icon: <FaLeaf />,
                label: "Testimonies",
                href: "#testimonies",
                description: "Hear from our satisfied customers"
            }
        ],
        Products: [
            { icon: <GiFruitBowl />, label: "Fresh Produce", href: "#produce", description: "Fruits & vegetables" },
            { icon: <GiChicken />, label: "Livestock", href: "#produce", description: "Meat & poultry" },
            { icon: <FaLeaf />, label: "Dairy & Eggs", href: "#produce", description: "Fresh daily" },
            { icon: <FaLeaf />, label: "Seasonal Specials", href: "#produce", description: "What's in season" },
            { icon: <FaLeaf />, label: "Farm Boxes", href: "#produce", description: "Subscription boxes" },
        ],
        Visit: [
            { icon: <FaLeaf />, label: "Farm Store", href: "#farm store", description: "Location & hours" },
            { icon: <FaLeaf />, label: "Farm Tours", href: "#farm tour", description: "Guided experiences" },
            { icon: <FaLeaf />, label: "Events", href: "/visit#events", description: "Workshops & festivals" },
            { icon: <FaLeaf />, label: "U-Pick", href: "/visit#upick", description: "Pick your own" },
        ],
        Learn: [
            { icon: <FaLeaf />, label: "Blog", href: "#blog", description: "Farm updates & tips" },
            { icon: <FaLeaf />, label: "Recipes", href: "/learn#recipes", description: "Seasonal recipes" },
            { icon: <FaLeaf />, label: "Growing Guide", href: "/learn#guide", description: "Gardening tips" },
            { icon: <FaLeaf />, label: "FAQ", href: "/learn#faq", description: "Common questions" },
        ],
    };

    const mainNavItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about", hasDropdown: true },
        { label: "Products", href: "/products", hasDropdown: true },
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

                    <nav className="hidden lg:flex items-center space-x-1">
                        {mainNavItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <motion.a
                                    href={item.href}
                                    className="flex items-center space-x-1 text-gray-700 dark:text-[#b8d4b8] hover:text-green-800 dark:hover:text-white transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-green-50 dark:hover:bg-[#1a3a28]"
                                    onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.label : null)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />}
                                </motion.a>

                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-[#1a3a28] rounded-xl shadow-xl dark:shadow-[0_8px_32px_rgba(0,20,0,0.4)] border border-green/10 dark:border-[#2a4a38] overflow-hidden z-50"
                                                onMouseEnter={() => setActiveDropdown(item.label)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-[#f9fafb] mb-4 flex items-center gap-2">
                                                        <span className="text-green-800 dark:text-emerald-400">{item.label}</span>
                                                    </h3>
                                                    <div className="grid gap-2">
                                                        {dropdownContent[item.label as keyof typeof dropdownContent]?.map((dropdownItem, index) => (
                                                            <motion.a
                                                                key={dropdownItem.label}
                                                                href={dropdownItem.href}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-[#244f38] transition-colors duration-300 group/item"
                                                            >
                                                                <div className="text-green-700 dark:text-emerald-400 text-lg mt-1 group-hover/item:scale-110 transition-transform duration-300">
                                                                    {dropdownItem.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-semibold text-gray-900 dark:text-[#f9fafb] group-hover/item:text-green-800 dark:group-hover/item:text-emerald-300 transition-colors duration-300">
                                                                        {dropdownItem.label}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600 dark:text-[#8aa88a]">
                                                                        {dropdownItem.description}
                                                                    </div>
                                                                </div>
                                                            </motion.a>
                                                        ))}
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