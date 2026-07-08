import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const teamMembers = [
    {
      image: `${import.meta.env.BASE_URL}blacc_ceo1.jpg`,
      name: "Joseph Blacc",
      role: "Founder & Head Farmer",
      description: "4th generation farmer with 5+ years experience"
    },
    {
      image: `${import.meta.env.BASE_URL}user.jpg`,
      name: "Pending",
      role: "Sustainability Director",
      description: "Specialist in organic farming practices"
    },
    {
      image: `${import.meta.env.BASE_URL}user.jpg`,
      name: "Pending",
      role: "Farm Operations",
      description: "Expert in livestock and crop management"
    }
  ];

  const farmImages = [
    {
      image: `${import.meta.env.BASE_URL}chicken.jpg`,
      title: "Sustainable Farming",
      caption: "Our eco-friendly methods preserve the land for future generations"
    },
    {
      image: `${import.meta.env.BASE_URL}products.jpg`,
      title: "Organic Produce",
      caption: "Chemical-free fruits and vegetables grown with care"
    },
    {
      image: `${import.meta.env.BASE_URL}goats.jpg`,
      title: "Cultivating Health",
      caption: "Our Priority in Livestock Management"
    }
  ];
  
  return (
    <section 
      id="story"
      className="py-20 relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}tractor.jpg)`
      }}
    >
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content with proper z-index */}
      <div className="container mx-auto px-6 lg:px-15 text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 [text-shadow:0_0_20px_rgba(255,255,255,0.5)]">
            Our <span className="text-green [text-shadow:0_0_10px_rgba(72,187,120,0.5)]">Story</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            For over four generations, the Blacc family has been dedicated to sustainable agriculture, 
            bringing fresh, organic produce to our community while nurturing the land we call home.
          </p>
        </motion.div>

        <div id="produce" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-green">Farm</span> in Action
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              See how we cultivate excellence from soil to harvest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {farmImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="team" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-green-400">Team</span>
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              The passionate individuals behind Blacc Farms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-white font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-white">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;