import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight} from "react-icons/fa";
import { TextRotate } from "./ui/text-rotate";

const Hero: React.FC = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-16"
            style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}broiler.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute top-40 left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-60 h-60 bg-sun/10 rounded-full blur-3xl"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left"
                    >
                                                <div className="mb-6">
                                                    <h2 className="sr-only">Hero</h2>
                                                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                                                        <div className="inline-block mr-3">From Our</div>
                                                        <TextRotate
                                                            texts={["Fields", "Gardens", "Pastures"]}
                                                            rotationInterval={3000}
                                                            mainClassName="inline-block text-white"
                                                            initial={{ y: "100%" }}
                                                            animate={{ y: 0 }}
                                                            exit={{ y: "-120%" }}
                                                            staggerDuration={0.02}
                                                        />
                                                        <div>
                                                            <span className="block">To Your Table</span>
                                                        </div>
                                                    </div>
                                                </div>

                        <p className="text-xl text-white mb-8 max-w-xl">
                            Experience the taste of truly sustainable farming.
                            Fresh, organic produce and humanely raised livestock
                            delivered straight from our family farm to your home.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#1f5233" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-800 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 cursor-pointer"
                            >
                                Shop Fresh Produce
                                <FaArrowRight className="text-sm" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#1f5233" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-800 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 cursor-pointer"
                            >
                                Schedule a Tour
                                <FaArrowRight className="text-sm" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>    
            </div>
        </section>
    );
};

export default Hero;