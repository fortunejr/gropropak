import React from "react";
import { Target, Eye, CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

const aimsandobj = [
  "To acquire, develop, and share expertise in modern agribusiness.",
  "To serve as financiers and facilitators of agricultural growth.",
  "To manufacture and distribute farm equipment, inputs, and agro-allied products.",
  "To process raw produce into finished goods for local and international markets.",
  "To promote export and import of agricultural products and commodities.",
  "To engage in sustainable farming practices, livestock breeding, and fisheries.",
];

const corevalues = [
  "Innovation – Embracing modern technology and best practices.",
  "Integrity – Conducting business with honesty and accountability.",
  "Excellence – Delivering quality solutions across our operations.",
  "Sustainability – Promoting eco-friendly and long-term practices.",
  "Partnership – Building strong collaborations with stakeholders.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-[#f0f9f2] py-12">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full max-w-3xl px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b4808]">
              About <span className="text-[#3a6b0d]">GROPROPAK AFRICA LTD</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mt-2">
              Gropropak Africa Ltd is a modern agribusiness and agro-allied company
              established to transform agriculture into a sustainable,
              technology-driven, and profitable enterprise across Africa. With a
              diversified portfolio that spans farming, processing, manufacturing,
              equipment supply, and trading, we empower farmers, drive food
              security, and create wealth through agricultural innovation.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {[
            {
              icon: <Target className="w-6 h-6 text-[#1b4808]" />,
              title: "MISSION STATEMENT",
              desc: "To revolutionize agriculture in Africa by providing innovative solutions, high-quality products, and sustainable practices that enhance productivity, food security, and economic growth.",
            },
            {
              icon: <Eye className="w-6 h-6 text-[#1b4808]" />,
              title: "VISION STATEMENT",
              desc: "To become Africa’s leading agribusiness powerhouse, recognized for excellence in farming, processing, manufacturing, and global agricultural trade.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-xl font-bold text-[#1b4808]">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Aims & Objectives */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#1b4808]"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Aims & Objectives
          </motion.h2>
          <ul className="space-y-3">
            {aimsandobj.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-gray-800 text-base sm:text-lg"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CircleCheckBig className="flex-shrink-0 w-5 h-5 text-[#3a6b0d]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#1b4808]"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {corevalues.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white rounded-lg shadow p-4 gap-3"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-[#3a6b0d] text-white font-bold px-3 py-2 rounded-full flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-800 text-sm sm:text-base">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
