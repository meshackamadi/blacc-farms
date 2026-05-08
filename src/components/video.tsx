import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from 'lucide-react';

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-linear-to-b from-white to-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Experience <span className="text-green-800">Blacc Farms</span>
            </h2>
            <p className="text-lg text-earth/80 max-w-2xl mx-auto">
              Take a virtual tour of our sustainable farm and meet our dedicated team
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black group cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-green-800/20 to-earth/20"></div>
            
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Blacc Farms Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-farmlady"
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-full shadow-2xl transition-colors"
                  >
                    <Play size={48} fill="white" />
                  </motion.div>
                </motion.button>
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-earth/70 max-w-2xl mx-auto">
              Join us on a journey through our farm as we showcase our sustainable practices, 
              state-of-the-art facilities, and the passionate team behind every harvest.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 rounded-2xl bg-green-50 border border-green/20">
            <h4 className="text-2xl font-bold text-green-800 mb-2">360°</h4>
            <p className="text-earth/70">Complete Farm Tour</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-green-50 border border-green/20">
            <h4 className="text-2xl font-bold text-green-800 mb-2">HD</h4>
            <p className="text-earth/70">Crystal Clear Quality</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-green-50 border border-green/20">
            <h4 className="text-2xl font-bold text-green-800 mb-2">10m</h4>
            <p className="text-earth/70">Inspiring Journey</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
