import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig, Leaf, Tractor, Factory } from "lucide-react";

const advantagesList = [
  "Comprehensive agricultural expertise and services under one roof.",
  "Strong partnerships with local and international stakeholders.",
  "Commitment to innovation and sustainable practices.",
  "Proven capacity in farming, processing, and distribution.",
  "Reliable, transparent, and customer-focused operations.",
];

const strategies = [
  {
    icon: <Tractor className="w-8 h-8 text-white" />,
    title: "Mechanized & Industrial Farming",
    body: "Increase crop and livestock efficiency using advanced mechanization and modern farm management practices.",
    bg: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    icon: <Factory className="w-8 h-8 text-white" />,
    title: "Agro-Processing & Manufacturing",
    body: "Develop processing plants to add value, reduce post-harvest losses, and create competitive products.",
    bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Export Partnerships",
    body: "Establish reliable trade relationships to bring African agricultural products to global premium markets.",
    bg: "bg-gradient-to-r from-green-600 to-green-800",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Smart Farming Technologies",
    body: "Leverage digital solutions and precision farming tools to optimize production and monitor performance.",
    bg: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Training & Capacity Building",
    body: "Prioritize human capital development through workshops, training, and knowledge-sharing initiatives.",
    bg: "bg-gradient-to-r from-yellow-400 to-yellow-500",
  },
];

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Advantages = () => {
  return (
    <div className="bg-[#f0faf4] py-20">
      <div className="container mx-auto px-5">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-center text-[#1b4808] mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Gropropak Africa?
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 w-32 h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.h2>

        {/* Advantages Animated List */}
        <motion.ul className="grid md:grid-cols-2 gap-8 mb-20">
          {advantagesList.map((adv, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CircleCheckBig className="text-green-600 w-8 h-8 mt-1" />
              <p className="text-gray-800 text-lg font-medium">{adv}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Strategies Section */}
        <motion.h3
          className="text-4xl font-bold text-[#1b4808] mb-8 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Strategies for Growth
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`${strategy.bg} p-6 rounded-3xl shadow-lg flex flex-col gap-4 cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                {strategy.icon}
                <h4 className="text-white text-xl font-bold">{strategy.title}</h4>
              </div>
              <p className="text-white">{strategy.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Craftsmanship Section */}
        <motion.div
          className="mt-20 p-10 bg-gradient-to-r from-green-50 to-green-100 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-[#1b4808] mb-4">Craftsmanship & Quality</h3>
          <p className="text-gray-800 leading-relaxed text-lg">
            At Gropropak Africa Ltd, excellence is at the core of every operation. From farm production
            to agro-processing, equipment supply, and distribution, we ensure all products and services
            meet the highest quality standards. We leverage advanced machinery, skilled personnel, and
            modern technology to guarantee sustainable success and lasting value for all stakeholders.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Advantages;
