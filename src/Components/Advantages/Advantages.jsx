import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router";

const advantagesList = [
  "Comprehensive agricultural expertise and services under one roof.",
  "Strong partnerships with local and international stakeholders.",
  "Commitment to innovation and sustainable practices.",
  "Proven capacity in farming, processing, and distribution.",
  "Reliable, transparent, and customer-focused operations.",
];

const Advantages = () => {
  return (
    <div className="container mx-auto px-7 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-black">
        Why <span className="text-[#1d4c08]">Choose</span> Us?
      </h2>

      <ul className="space-y-6">
        {advantagesList.map((advantage, index) => (
          <li key={index} className="flex items-center">
            {/* Custom attractive bullet */}
            <CircleCheckBig className="mr-3 text-[#1d4c08] flex-shrink-0" />
            <p className="text-gray-700">{advantage}</p>
          </li>
        ))}
      </ul>
      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          to="/advantages"
          className="inline-block px-6 py-3 rounded-full bg-[#1d4c08] text-white font-semibold hover:scale-105 transition duration-300 shadow-md text-center"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Advantages;
