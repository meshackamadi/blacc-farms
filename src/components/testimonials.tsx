import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sydney Christopher Jnr",
    role: "Head Chef",
    company: "Green Table Restaurant",
    content:
      "The quality of produce from Blacc Farms is unmatched. Our dishes have never tasted better since we switched to their organic vegetables.",
    rating: 5,
    image: `${import.meta.env.BASE_URL}chris1.jpg`,
  },
  {
    name: "Meshack Amadi",
    role: "Nutritionist",
    company: "Wellness Specialist",
    content:
      "I recommend Blacc Farms to all my clients. Knowing exactly where our food comes from and how it's grown makes all the difference.",
    rating: 4,
    image: `${import.meta.env.BASE_URL}meshbg.png`,
  },
  {
    name: "Sarah Johnson",
    role: "CSA Member",
    company: "Family of Four",
    content:
      "Our weekly box from Blacc Farms has transformed how our family eats. The kids actually ask for vegetables now!",
    rating: 5,
    image: `${import.meta.env.BASE_URL}user.jpg`,
  },
  {
    name: "Solomon Obijuru",
    role: "Sustainability Lead",
    company: "EcoVest Capital",
    content:
      "Blacc Farms sets the gold standard for sustainable agriculture. Their commitment to regenerative farming is inspiring.",
    rating: 4,
    image: `${import.meta.env.BASE_URL}user.jpg`,
  },
  {
    name: "Sele Beulah",
    role: "Food Blogger",
    company: "Farm to Fork",
    content:
      "Featureing Blacc Farms produce in my recipes has been a game-changer. The flavor profile is simply superior to store-bought.",
    rating: 5,
    image: `${import.meta.env.BASE_URL}user.jpg`,
  },
  {
    name: "Pepple Jedidiah",
    role: "Store Manager",
    company: "Fresh Market Co-op",
    content:
      "Our customers consistently rate Blacc Farms produce as the best in store. The shelf life and freshness are outstanding.",
    rating: 4,
    image: `${import.meta.env.BASE_URL}user.jpg`,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "fill-sun text-sun"
            : "fill-gray-200 dark:fill-[#2a4a38] text-gray-200 dark:text-[#2a4a38]"
        }
      />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setActiveIndex((prev) => (prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage));
  };

  const prevPage = () => {
    setActiveIndex((prev) => (prev - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage));
  };

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + itemsPerPage);

  return (
    <section id="testimonies" className="py-24 relative overflow-hidden bg-cream dark:bg-[#0d2818]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(135,169,107,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(10,50,30,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,80,30,0.2),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-15 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sage/10 dark:bg-emerald-900/40 text-sage dark:text-emerald-400 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-[#f9fafb] mb-4">
            What Our <span className="text-green dark:text-emerald-400">Community</span> Says
          </h2>
          <p className="text-lg text-earth/70 dark:text-[#8aa88a] max-w-2xl mx-auto">
            Hear from the farmers, chefs, and families who trust Blacc Farms for
            their produce.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-[#1a3a28] shadow-xl dark:shadow-[0_8px_32px_rgba(0,20,0,0.4)] hover:shadow-2xl transition-all duration-500 border border-green/10 dark:border-[#2a4a38]"
              >
                <div className="flex justify-center pt-8">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white dark:border-[#2a4a38] shadow-[0_20px_45px_rgba(0,0,0,0.18)] ring-1 ring-green/15 dark:ring-[#2a4a38] bg-linear-to-br from-sage/20 via-green/10 to-white dark:from-[#1a3a28] dark:to-[#244f38]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="relative p-8 pt-6 text-center">
                <Quote
                  size={32}
                  className="absolute right-6 top-6 text-sage/10 dark:text-emerald-800/40 group-hover:text-sage/20 dark:group-hover:text-emerald-700/60 transition-colors duration-300"
                />

                <div className="mb-5">
                  <StarRating rating={t.rating} />
                </div>

                <p className="text-earth/80 dark:text-[#b8d4b8] leading-relaxed mb-6 text-[15px]">
                  "{t.content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-sage to-green flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 ring-4 ring-white dark:ring-[#1a3a28]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-black dark:text-[#f9fafb] text-sm">
                      {t.name}
                    </h4>
                    <p className="text-xs text-earth/60 dark:text-[#8aa88a]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                className="p-2.5 rounded-full bg-white dark:bg-[#1a3a28] border border-green/10 dark:border-[#2a4a38] shadow-sm hover:shadow-md hover:border-green/30 dark:hover:border-emerald-600 transition-all duration-300 text-earth/60 dark:text-[#8aa88a] hover:text-green dark:hover:text-emerald-400"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i * itemsPerPage)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      Math.floor(activeIndex / itemsPerPage) === i
                        ? "bg-green dark:bg-emerald-500 w-8"
                        : "bg-gray-300 dark:bg-[#2a4a38] hover:bg-gray-400 dark:hover:bg-[#3a5a48]"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                className="p-2.5 rounded-full bg-white dark:bg-[#1a3a28] border border-green/10 dark:border-[#2a4a38] shadow-sm hover:shadow-md hover:border-green/30 dark:hover:border-emerald-600 transition-all duration-300 text-earth/60 dark:text-[#8aa88a] hover:text-green dark:hover:text-emerald-400"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
