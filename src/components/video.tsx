import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, HeartHandshake, Users, Leaf, Clock, Award } from 'lucide-react';
import TextTypewriter from "./ui/the-typewriter";

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    { icon: MapPin, label: "360° Tour", description: "Explore every corner of our farm" },
    { icon: HeartHandshake, label: "Our Farm Family", description: "Meet the passionate hands nourishing our local community" },
    { icon: Leaf, label: "Sustainability", description: "See our eco-friendly practices" },
  ];

  const highlights = [
    { number: "50+", label: "Acres of Premium Land", icon: Leaf },
    { number: "100%", label: "Organic Certified", icon: Award },
    { number: "24/7", label: "Farm Monitoring", icon: Clock },
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "500+", label: "Happy Families", icon: Users },
    { number: "99%", label: "Customer Satisfaction", icon: Award },
    { number: "365", label: "Days of Harvesting", icon: Leaf },
  ];

  return (
    <section id="farm tour" className="py-24 bg-linear-to-b from-white via-cream to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-15">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Virtual Farm Tour
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            <TextTypewriter duration={3} className="inline-block">
              Experience Blacc Farms Up Close
            </TextTypewriter>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Take an immersive virtual journey through our sustainable farm. Discover our organic farming methods, 
            community-centered values, and meet the warm, dedicated farm family nourishing our neighborhood with fresh produce.
          </p>
        </motion.div>

        {/* Main Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black group cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-green-800/20 to-earth/20 z-5"></div>
            
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Blacc Farms Virtual Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={`${import.meta.env.BASE_URL}farmlady.jpg`}
                  alt="Blacc Farms tour preview"
                  className="absolute inset-0 w-full h-full object-cover z-1"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60 group-hover:via-black/50 transition-all duration-300 z-5"></div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center z-20"
                  aria-label="Play video"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-green-800 hover:bg-green-700 text-white p-8 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <Play size={56} fill="white" />
                  </motion.div>
                </motion.button>

                {/* Video Duration Badge */}
                <div id="farm store" className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-lg z-20 font-semibold">
                  12:45
                </div>
              </>
            )}
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-3">A Journey Through Our Farm</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              In this comprehensive tour, you'll walk through our sustainable farming operations, learn about our 
              organic certification process, and discover the innovative techniques we use to grow the highest quality produce 
              while protecting the environment for future generations.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-linear-to-br from-green-50 to-white border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <div id="certifications" className="bg-green-100 p-4 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">{feature.label}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Marquee Section */}
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 bg-linear-to-r from-green-800 to-green-700 text-white py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-6 lg:px-15 container mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Farm Highlights</h3>
          </motion.div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * highlights.length] }}
              transition={{
                duration: highlights.length * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 md:gap-12 px-6 lg:px-15"
            >
              {[...highlights, ...highlights].map((item, index) => (
                <motion.div
                  key={`${item.label}-${index}`}
                  className="shrink-0 text-center min-w-64"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{item.number}</div>
                  <p className="text-green-100 text-lg">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-green-800 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-green-700 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Call to Action & Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16"
        >
          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-linear-to-r from-green-900 via-green-800 to-emerald-900 text-white shadow-2xl relative overflow-hidden border border-green-700/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-5 text-left">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md shrink-0">
                  <Clock className="w-10 h-10 text-emerald-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Farm Store & Visitor Hours</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">We're Open For Visitors</h4>
                  <div className="space-y-1 text-green-100 text-sm">
                    <p><span className="font-semibold text-white">Monday – Saturday:</span> 8:00 AM – 6:00 PM</p>
                    <p><span className="font-semibold text-white">Sunday:</span> 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <motion.a
                  href="#farm store"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-400 hover:bg-emerald-300 text-green-950 px-6 py-3 rounded-full font-bold text-center text-sm transition-all duration-300 shadow-md"
                >
                  Visit Farm Store
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-black mb-6">Ready to Experience Blacc Farms?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                Schedule a Tour
              </motion.a>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-green-700 px-8 py-4 rounded-full font-semibold border-2 border-green-700 transition-all duration-300"
              >
                Shop Our Products
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;