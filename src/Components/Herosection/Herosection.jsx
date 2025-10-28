import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import "./herosection.css";
import { heroimg } from "../../imports";

const leftContent = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6 + index * 0.2, ease: "easeOut" },
  }),
};

const Herosection = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat kenburns-top pointer-events-none z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      ></div>

      {/* Dark green overlay using brand color */}
      <div className="absolute inset-0 bg-[#1b4808]/85 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-7 lg:px-10 pt-20 lg:py-40 py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="p-5 lg:mx-20 text-center lg:text-center"
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[#8db937] font-bold tracking-wide">
            GROPROPAK AFRICA LTD
          </p>

          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-normal pb-6 drop-shadow-lg">
            Transforming Agriculture Across Africa Through Innovation, Technology, and Sustainable Agribusiness Solutions
          </h1>

          <p className="text-white text-base lg:text-lg opacity-95 max-w-2xl mx-auto">
            A vision to revolutionize Africa’s agricultural landscape, bridging the gap between traditional farming and modern agribusiness practices.
          </p>

          {/* CTA Buttons */}
          <div className="pt-9 flex flex-col lg:flex-row justify-center items-center gap-4">
            <motion.a
              target="_blank"
              href="https://wa.me/2349091112210"
              rel="noreferrer"
              variants={buttonVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-[70%] lg:w-auto"
            >
              <button className="w-full lg:w-auto rounded-full flex gap-2 items-center justify-center bg-[#8db937] px-6 py-4 lg:px-8 lg:py-4 font-bold text-white cursor-pointer hover:bg-[#163706] transition text-base lg:text-base hover:scale-105 shadow-md">
                <FaWhatsapp size={24} />
                Chat us
              </button>
            </motion.a>

            <motion.a
              href="mailto:info@gropropakafrica.com"
              variants={buttonVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-[70%] lg:w-auto"
            >
              <button className="w-full lg:w-auto rounded-full flex gap-2 items-center justify-center border-2 border-[#8db937] text-white hover:bg-[#8db937] hover:text-white px-6 py-4 lg:px-8 lg:py-4 font-bold cursor-pointer transition text-base lg:text-base hover:scale-105 shadow-md">
                <MdOutlineMail size={24} />
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
