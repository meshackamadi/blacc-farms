import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, TreePine, Tractor, Carrot
} from 'lucide-react';
import TypewriterText from "./TypewriterText";

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
  const [typewriterComplete, setTypewriterComplete] = React.useState(false);

  const handleTypewriterComplete = () => {
    setTypewriterComplete(true);
  };

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
            <TypewriterText
              text="Why Choose Blacc Farms?"
              speed={75}
              loop={true}
              loopDelay={3000}
              onComplete={handleTypewriterComplete}
              className="text-4xl md:text-5xl font-bold text-black mb-6 min-h-14 md:min-h-15"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8"
            >
              <p className="text-lg text-earth/80 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                We believe in <span className="font-semibold text-earth">sustainable agriculture</span> that nourishes both
                <br className="hidden sm:block" />
                your family and the earth. Our <span className="font-semibold text-earth">premium, certified organic produce</span> is
                <br className="hidden sm:block" />
                cultivated with integrity, delivering uncompromising quality and freshness.
              </p>
            </motion.div>
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
                src={`${import.meta.env.BASE_URL}farmlady.jpg`}
                alt="Blacc farming"
                className="w-full h-auto object-cover max-h-125 md:max-h-100 lg:max-h-125"
              />
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
    </section>
  );
};

export default Feature;