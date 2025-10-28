import React from "react";
import { img10 } from "../../imports";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import FadeIn from "../fadein";
import {
  Tractor,
  Sprout,
  Fish,
  Factory,
  FlaskRound,
} from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-7 lg:px-20 py-14 lg:py-20 bg-[#b7db6e]">
      <FadeIn duration={100}>
        <div className="lg:flex items-center">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              className="w-full object-cover pr-2 lg:h-full slide-in-blurred-bottom rounded-3xl"
              src={img10}
              alt="about image"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2 lg:pl-10 flex flex-col justify-center h-full text-center lg:text-left">
            <h2 className="font-bold text-3xl mt-7 lg:mt-0 lg:text-5xl">
              About <span className="text-[#1d4c08]">Gropropak Africa Ltd</span>
            </h2>

            <div className="lg:text-xl mt-6 space-y-4">
              <p className="font-semibold">
                Gropropak Africa Ltd is a forward-thinking agribusiness enterprise
                dedicated to transforming Africa’s agricultural sector through
                technology, innovation, and sustainable value-chain development.
              </p>

              <FadeIn>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <Tractor className="w-6 h-6 text-[#1d4c08]" />
                    <span>
                      <strong>Agro-Allied Supplies</strong> 
                    </span>
                  </li>

                  <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <Sprout className="w-6 h-6 text-[#1d4c08]" />
                    <span>
                      <strong>Mechanized & Large-Scale Farming</strong>
                    </span>
                  </li>

                  <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <Fish className="w-6 h-6 text-[#1d4c08]" />
                    <span>
                      <strong>Livestock & Aquaculture</strong>
                    </span>
                  </li>

                  <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <Factory className="w-6 h-6 text-[#1d4c08]" />
                    <span>
                      <strong>Agro-Processing & Value Addition</strong>
                    </span>
                  </li>

                  <li className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <FlaskRound className="w-6 h-6 text-[#1d4c08]" />
                    <span>
                      <strong>Fertilizer & Cereal Production</strong>
                    </span>
                  </li>
                </ul>
              </FadeIn>
            </div>

            {/* Button */}
            <div className="pt-7 flex justify-center lg:justify-start">
              <Link to="/about">
                <button className="flex items-center gap-3 bg-[#1d4c08] px-5 py-3 rounded-full font-bold text-white hover:bg-[#8db937] hover:text-[#1d4c08] transition hover:scale-105">
                  Read More <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
