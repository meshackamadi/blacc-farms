import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { TextRotate } from "./ui/text-rotate";
import { PrimaryButton } from "./ui/PrimaryButton";
const heroBgUrl = `${window.location.origin}${import.meta.env.BASE_URL}broiler.webp`;

const Hero: React.FC = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28"
            style={{
                backgroundImage: `url(${heroBgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute top-40 left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl will-change-transform"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-60 h-60 bg-sun/10 rounded-full blur-3xl will-change-transform"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
                    >
                        <div className="mb-6 w-full max-w-[min(100%,56rem)]">
                            <h2 className="sr-only">Hero</h2>
                            <div className="flex w-full flex-col gap-2 text-[clamp(1.55rem,5.8vw,5rem)] font-bold leading-[0.92] tracking-tight text-white text-balance sm:gap-3">
                                <div className="flex flex-nowrap items-baseline justify-center gap-3 lg:justify-start">
                                    <span className="whitespace-nowrap">From Our</span>
                                    <span className="relative inline-flex h-[1em] min-w-[6.4ch] overflow-hidden">
                                        <TextRotate
                                            texts={["Fields", "Gardens", "Pastures"]}
                                            rotationInterval={3000}
                                            mainClassName="inline-flex whitespace-nowrap"
                                            splitLevelClassName="inline-flex"
                                            elementLevelClassName="inline-block"
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "-100%" }}
                                            staggerDuration={0.02}
                                        />
                                    </span>
                                </div>
                                <span className="block whitespace-nowrap">To Your Table</span>
                            </div>
                        </div>

                        <p className="text-xl text-white mb-8 max-w-xl">
                            Experience the taste of truly sustainable farming.
                            Fresh, organic produce and humanely raised livestock
                            delivered straight from our family farm to your home.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <PrimaryButton icon={<FaArrowRight />}>
                                Shop Fresh Produce
                            </PrimaryButton>
                            <PrimaryButton icon={<FaArrowRight />}>
                                Schedule a Tour
                            </PrimaryButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;