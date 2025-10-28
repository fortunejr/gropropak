import React from "react";
import { logo } from "../../imports";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-10">
          {/* Logo and Description */}
          <div className="lg:w-1/4">
            <Link to={"/"}>
              <img
                className="h-14 mb-4 bg-white p-2 rounded-lg"
                src={logo}
                alt="LumiGrid logo"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              Gropropak Africa Ltd stands as a beacon of agricultural
              transformation, innovation, and sustainable growth in Africa.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/4">
            <h2 className="font-bold text-white pb-3 pt-7 lg:pt-0">
              Contact Information
            </h2>
            <p className="text-white text-sm">
              📍 Nwachukwu & Compound, New Phase of Umuobe, Behind Grail Message
              Centre; Opobo Road, Obingwa Aba, Abia State, Nigeria.
            </p>
            <a href="mailto:growpropakafricaltdjk@gmail.com">
              <p className="text-white text-sm mt-2">
                📧 growpropakafricaltdjk@gmail.com
              </p>
            </a>
            <a href="tel:+2349091112210">
              <p className="flex items-center gap-3 text-white mt-2">
                <MdPhone className="text-white text-sm" />
                <span> +234-909-111-2210</span>
              </p>
            </a>
            <a href="tel:+2348163647971">
              <p className="flex items-center gap-3 text-white">
                <MdPhone className="text-white text-sm" />
                <span> +234-816-364-7971</span>
              </p>
            </a>
          </div>

          {/* Map */}
          {/* <div className="lg:w-1/4 w-full h-64 lg:h-48 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1755958888439!6m8!1m7!1sGxBfeXwJPVOXsq1t1D71Ng!2m2!1d5.567936549623464!2d5.79700192865511!3f208.2!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}

          {/* Social Icons */}
          <div className="lg:w-1/4 pt-7 lg:pt-0">
            <h2 className="font-bold text-white pb-3">Follow Us</h2>
            <div className="flex items-center gap-4 text-white">
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaFacebook size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaInstagram size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-10 text-white">
          &copy; {year} GROPROPAK AFRICA LTD
        </p>
        <p className="text-center text-[9px] mt-10 text-blue-400">
          Built by{" "}
          <a href="https://xmotivotechnologies.com/" target="_blank">
            xMotivo Technologies Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
