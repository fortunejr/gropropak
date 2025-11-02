import React from "react";
import { Target, Eye, CircleCheckBig } from "lucide-react";
import { cac } from "../../imports";

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

const About = () => {
  return (
    <div className="bg-customBlue">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        {/* About Section */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full max-w-3xl px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              About{" "}
              <span className="text-[#1b4808]">GROPROPAK AFRICA LTD</span>
            </h2>
            <p className="text-black text-sm sm:text-base leading-relaxed">
              Gropropak Africa Ltd is a modern agribusiness and agro-allied
              company established to transform agriculture into a sustainable,
              technology-driven, and profitable enterprise across Africa. With
              a diversified portfolio that spans farming, processing,
              manufacturing, equipment supply, and trading, we are committed
              to empowering farmers, driving food security, and creating
              wealth through agricultural innovation.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-12 mb-12 bg-gray-100 p-6 rounded-xl">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-[#1b4808] w-6 h-6" />
              <h2 className="text-lg sm:text-xl font-bold text-black tracking-wide">
                MISSION STATEMENT
              </h2>
            </div>
            <p className="text-black text-sm sm:text-base leading-relaxed">
              To revolutionize agriculture in Africa by providing innovative
              solutions, high-quality products, and sustainable practices that
              enhance productivity, food security, and economic growth.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-[#1b4808] w-6 h-6" />
              <h2 className="text-lg sm:text-xl font-bold text-black tracking-wide">
                VISION STATEMENT
              </h2>
            </div>
            <p className="text-black text-sm sm:text-base leading-relaxed">
              To become Africa’s leading agribusiness powerhouse, recognized for
              excellence in farming, processing, manufacturing, and global
              agricultural trade.
            </p>
          </div>
        </div>

        {/* Aims & Objectives */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
            Aims & Objectives
          </h2>
          <ul className="list-disc list-inside space-y-3 text-black text-sm sm:text-base">
            {aimsandobj.map((item, index) => (
              <li key={index} className="leading-relaxed flex items-center">
                <CircleCheckBig className="mr-3 text-[#1b4808] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black">
            CORE VALUES
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {corevalues.map((value, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded-lg overflow-hidden"
              >
                <div
                  className={`px-4 py-3 text-white font-bold text-lg ${
                    index % 2 === 0 ? "bg-[#1b4808]" : "bg-black"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-3 text-sm sm:text-base text-black font-medium">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
