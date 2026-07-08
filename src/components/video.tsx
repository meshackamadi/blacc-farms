import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Users, Leaf, Clock, Award } from 'lucide-react';
import TextTypewriter from "./ui/the-typewriter";

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    { icon: MapPin, label: "360° Tour", description: "Explore every corner of our farm" },
    { icon: Users, label: "Meet the Team", description: "Get to know our passionate farmers" },
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
            state-of-the-art facilities, and meet the dedicated team committed to bringing you the freshest produce.
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-20"
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-black mb-6">Ready to Learn More?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
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