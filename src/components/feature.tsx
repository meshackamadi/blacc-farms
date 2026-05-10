import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, TreePine, Tractor, Carrot
} from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Organic Farming",
    description: "100% organic practices without harmful pesticides",
    icon: <TreePine className="text-green text-xl " />,
  },
  {
    title: "Sustainable Methods",
    description: "Eco-friendly techniques that protect our environment",
    icon: <Sprout className="text-green text-xl" />,
  },
  {
    title: "Fresh Produce",
    description: "Farm-fresh vegetables delivered to your doorstep",
    icon: <Carrot className="text-green text-xl" />,
  },
  {
    title: "Expert Farmers",
    description: "Decades of experience in sustainable agriculture",
    icon: <Tractor className="text-green text-xl" />,
  },
];

const Feature: React.FC = () => {
  return(
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose <span className="text-green-800"> Blacc Farms? </span> 
            </h2>
            <p className="text-lg text-earth/80 max-w-2xl mx-auto">
              Discover what makes our sustainable farming practices and fresh produce
              the preferred choice for health-conscious families.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/farmlady.jpg"
                alt="Blacc farming"
                className="w-full h-auto object-cover max-h-[500px] md:max-h-[400px] lg:max-h-[500px]"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ x: 20 }}
                className="flex items-start gap-4 p-6 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-green-800 transition-all duration-300 group border border-green/10 cursor-pointer">
                <div className="bg-green/10 p-3 rounded-full group-hover:bg-green/20 transition-colors duration-300 ">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-earth/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
        <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm">Explore More</span>
            <div className="w-6 h-10 border-2 border-earth/30 rounded-full text-white flex justify-center">
              <div className="w-1 h-3 bg-sage rounded-full mt-2"></div>
            </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-cream to-transparent">
      </div>

      {/*<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
        <div className="text-center ">
          <h4 className="text-earth/70 mb-2">
            Started in
          </h4>
          <p className="text-5xl font-bold text-black mb-1"> 
            2025
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-earth/70 mb-2">
            Acres Farmed
          </h4>
          <p className="text-5xl font-bold text-black mb-1">
            10+
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-earth/70">
            Families Served
          </h4>
          <p className="text-5xl font-bold text-black mb-1"> 
            500+
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-earth/70">
            Team Size
          </h4>
          <p className="text-5xl font-bold text-black mb-1"> 
            10
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Feature;