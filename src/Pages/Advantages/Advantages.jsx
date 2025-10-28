import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const advantagesList = [
  "Comprehensive agricultural expertise and services under one roof.",
  "Strong partnerships with local and international stakeholders.",
  "Commitment to innovation and sustainable practices.",
  "Proven capacity in farming, processing, and distribution.",
  "Reliable, transparent, and customer-focused operations.",
];

const strategies = [
  {
    title: "Expansion of Mechanized and Industrial Farming Operations: ",
    body: "We aim to increase the scale and efficiency of crop and livestock production through advanced mechanization, modern farm management practices, and optimized resource utilization.",
  },
  {
    title:
      "Strategic Investment in Agro-Processing and Manufacturing Facilities:",
    body: " By developing processing plants and manufacturing units, we add value to raw agricultural produce, improve product quality, reduce post-harvest losses, and create competitive products for local and international markets.",
  },
  {
    title: "Building Strong Export Partnerships for African Produce:",
    body: "We focus on establishing reliable trade relationships with international buyers, exporters, and distributors to ensure that African agricultural products gain access to premium markets worldwide.",
  },
  {
    title: "Integration of Digital Tools and Smart Farming Technologies:",
    body: "We leverage modern digital solutions such as precision farming tools, farm management software, and data analytics to optimize production, monitor performance, and make informed operational decisions.",
  },
  {
    title: "Continuous Training and Capacity Building for Farmers and Staff:",
    body: "We prioritize human capital development through training programs, workshops, and knowledge-sharing initiatives, ensuring that farmers and employees are equipped with the latest skills, techniques, and best practices in modern agribusiness.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // staggered animation
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Advantages = () => {
  return (
    <div className="container mx-auto px-5 py-16">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold mb-12 text-center text-[#1b4808]"
      >
        Why Choose Us?
      </motion.h2>

      {/* Advantages list */}
      <ul className="space-y-6 mb-12">
        {advantagesList.map((advantage, index) => (
          <li key={index} className="flex items-start">
            <CircleCheckBig className="mr-3 text-[#1b4808] flex-shrink-0 mt-1" />
            <p className="text-gray-700">{advantage}</p>
          </li>
        ))}
      </ul>

      {/* Legacy & Leadership side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 p-6 rounded-2xl mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-[#1b4808] mb-3 tracking-wide">
            OUR LEGACY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Gropropak Africa Ltd is committed to leaving a lasting legacy of
            agricultural transformation across Africa. Our work goes beyond
            production and trade; we aim to empower farmers, create sustainable
            employment opportunities, and establish resilient food security
            systems that benet communities and national economies. By
            integrating modern farming techniques, agro-processing, value chain
            development, and responsible trade practices, we are building a
            foundation for long-term agricultural growth, innovation, and
            prosperity that will positively impact generations to come.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#1b4808] mb-3 tracking-wide">
            LEADERSHIP
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The leadership team at Gropropak Africa Ltd is composed of visionary
            professionals with extensive expertise in agriculture, agribusiness,
            trade, and corporate governance. Each leader brings decades of
            combined experience, guiding the company with strategic foresight,
            operational excellence, and innovative thinking. Our leaders are
            committed to fostering sustainable growth, strengthening market
            linkages, and ensuring the highest standards of quality, safety, and
            efciency across all operations. With their guidance, Gropropak
            Africa Ltd continues to build a culture of excellence, integrity,
            and impact, positioning the company as a trusted partner for
            farmers, investors, and stakeholders in the African agricultural
            sector.
          </p>
        </div>
      </div>

      {/* Strategies */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1b4808] mb-6 tracking-wide">
          STRATEGIES FOR GROWTH AND SUCCESS
        </h2>
        <p className="text-gray-700 mb-6">
          Gropropak Africa Ltd employs a multi-faceted strategy to drive
          sustainable growth, strengthen market presence, and enhance
          agricultural productivity across Africa. Key strategies include:
        </p>

        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              custom={index}
              variants={cardVariants}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white shadow-md"
            >
              <h4 className="text-lg font-semibold text-[#1b4808] mb-2">
                {strategy.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{strategy.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-700 mt-6">
          Through these strategies, Gropropak Africa Ltd strengthens its
          competitive edge, promotes sustainable agriculture, and drives
          economic growth while empowering farmers and communities.
        </p>
      </div>

      {/* Craftsmanship */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1b4808] mb-4 tracking-wide">
          CRAFTSMANSHIP AND QUALITY
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Gropropak Africa Ltd, we are dedicated to excellence in every facet
          of our operations. From farm production to agro-processing, equipment
          supply, and distribution, we ensure that all products and services
          meet the highest standards of quality and reliability. We achieve this
          by leveraging premium inputs, advanced machinery, and modern
          technology, combined with skilled personnel and globally recognized
          best practices. Our rigorous quality control systems, adherence to
          regulatory standards, and commitment to continuous improvement
          guarantee that every product delivered and service rendered provides
          lasting value to our clients, partners, and stakeholders. By
          maintaining uncompromising standards in craftsmanship and quality,
          Gropropak Africa Ltd builds trust, strengthens its brand reputation,
          and ensures sustainable success across all areas of agribusiness.
        </p>
      </div>
    </div>
  );
};

export default Advantages;
