import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import "./herosection.css";
import { heroimg } from "../../imports";

// Animation for text block
const leftContent = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  },
};

// Fade + scale for buttons
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5 + index * 0.2, ease: "easeOut" }
  }),
};

const Herosection = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.55]"
        style={{ backgroundImage: `url(${heroimg})` }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#163706]/90 via-[#1b4808]/80 to-[#1b4808]/70" />

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 py-28 lg:py-40">
        
        <motion.div
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Tagline */}
          <p className="text-[#9ecf4c] font-semibold tracking-widest mb-3 text-sm lg:text-base">
            GROPROPAK AFRICA LTD
          </p>

          {/* Heading */}
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-snug drop-shadow-2xl mb-6">
            Transforming Agriculture Across Africa Through Innovation, Technology, and Sustainable Agribusiness Solutions
          </h1>

          {/* Subtext */}
          <p className="text-white/95 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A vision to revolutionize Africa’s agricultural landscape, bridging 
            the gap between traditional farming and modern agribusiness practices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 pt-10">
            
            {/* WHATSAPP BUTTON */}
            <motion.a
              href="https://wa.me/2349091112210"
              target="_blank"
              rel="noreferrer"
              variants={buttonVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-auto"
            >
              <button className="flex items-center justify-center w-full lg:w-auto gap-2 bg-[#8db937] hover:bg-[#7fba2f] text-white font-bold px-7 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                <FaWhatsapp size={22} />
                Chat us
              </button>
            </motion.a>

            {/* EMAIL BUTTON */}
            <motion.a
              href="mailto:info@gropropakafrica.com"
              variants={buttonVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-auto"
            >
              <button className="flex items-center justify-center w-full lg:w-auto gap-2 border-2 border-[#8db937] text-white hover:bg-[#8db937] hover:text-white font-bold px-7 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                <MdOutlineMail size={22} />
                Email us
              </button>
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Herosection;
