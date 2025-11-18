import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_kf80s0g", "template_waassmf", form.current, {
        publicKey: "nK6b5sNutEBmb4Jfn",
      })
      .then(
        () => {
          alert(
            "Your message has been sent successfully, we will get back shortly!"
          );
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="bg-green-50 py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-center text-[#1b4808] mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-center mb-12 text-gray-700 text-lg lg:px-60"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reach out to us for expert guidance and support in modern agribusiness.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-3xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#1b4808]">Get in Touch</h3>
            <div className="space-y-6 text-gray-800 text-sm">
              <p className="flex items-start gap-4">
                <MdLocationOn className="text-green-600 text-3xl mt-1" />
                <span>
                  <strong>Address:</strong> Nwachukwu & Compound, New Phase of Umuobe,
                  Behind Grail Message Centre; Opobo Road, Obingwa Aba, Abia State, Nigeria.
                </span>
              </p>
              <p className="flex items-center gap-4">
                <MdEmail className="text-green-600 text-2xl" />
                <a href="mailto:growpropakafricaltdjk@gmail.com" className="hover:underline">
                  growpropakafricaltdjk@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-4">
                <MdPhone className="text-green-600 text-2xl" />
                <a href="tel:+2349091112210" className="hover:underline">
                  +234-909-111-2210
                </a>
              </p>
              <p className="flex items-center gap-4">
                <MdPhone className="text-green-600 text-2xl" />
                <a href="tel:+2348163647971" className="hover:underline">
                  +234-816-364-7971
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-3xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-green-600 text-white font-bold px-6 py-3 rounded-xl w-full hover:bg-green-700 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
