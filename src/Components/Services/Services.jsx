import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../fadein";
import {
  machinery,
  mechanized,
  poultry,
} from "../../imports";

const services = [
  {
    heading: "Supply of Agro-Allied Equipment, Machinery, Fertilizers, and Agrochemicals",
    body: "Gropropak Africa Ltd provides farmers, agribusinesses, and cooperatives with a comprehensive range of highquality agro-allied products designed to maximize productivity and efciency in modern farming.",
    img: machinery,
  },
  {
    heading: "Mechanized Farming and Large-Scale Crop Production",
    body: "Gropropak Africa Ltd specializes in modern mechanized farming, providing large-scale cultivation of both staple and cash crops with efficiency, precision, and sustainability.",
    img: mechanized,
  },
  {
    heading: "Poultry, Livestock, and Fishery Farming",
    body: "Gropropak Africa Ltd operates highly efcient poultry, livestock, and aquaculture systems designed to produce premium-quality animal protein for domestic and commercial markets.",
    img: poultry,
  },
];

const Services = () => {
  return (
    <section className="px-7 py-16 bg-gray-50 text-[#1d4c08]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-black">
          Our <span className="text-[#1d4c08]">Services</span>
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.heading}
                  className="w-full h-58 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.heading.split("&").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="text-black">{part.trim()}</span>
                        {i < arr.length - 1 && (
                          <span className="text-customRed"> & </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow">
                    {service.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/services"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-[#1d4c08] text-white font-semibold hover:scale-105 transition duration-300 shadow-md"
        >
          See all services
        </Link>
      </div>
    </section>
  );
};

export default Services;
