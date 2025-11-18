import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  machinery,
  mechanized,
  poultry,
  agroprocessing,
  comission,
  fertilizer,
  exportss,
  general
} from "../../imports";

const services = [
  {
    heading: "Supply of Agro-Allied Equipment, Machinery, Fertilizers, and Agrochemicals",
    body: "Gropropak Africa Ltd provides farmers, agribusinesses, and cooperatives with a comprehensive range of highquality agro-allied products designed to maximize productivity and efciency in modern farming. Our offerings include farm implements, tractors, harvesters, planters, irrigation systems, storage equipment, and other essential machinery tailored for small, medium, and large-scale farms. We also supply essential agricultural inputs such as fertilizers, agrochemicals, pesticides, herbicides, and livestock feeds, carefully sourced to meet both local and international quality standards. Each product undergoes strict quality assurance checks to ensure reliability, durability, and pesticides, herbicides, and livestock feeds, carefully sourced to meet both local and international quality standards. Each product undergoes strict quality assurance checks to ensure reliability, durability, and compliance with relevant regulations. Our approachemphasizes safety, proper handling, and timely delivery. We provide technical guidance and support for equipment operation, maintenance, and optimal usage of agrochemicals and fertilizers to ensure maximum yield and effciency. By combining trusted sourcing, certified products, and expert support, GROPROPAK Africa Ltd ensures that farmers and agribusinesses have access to the right tools and inputs to succeed in modern, competitive agriculture.",
    img: machinery,
  },
  {
    heading: "Mechanized Farming and Large-Scale Crop Production",
    body: "Gropropak Africa Ltd specializes in modern mechanized farming, providing large-scale cultivation of both staple and cash crops with efficiency, precision, and sustainability. Our operations cover all stages of crop production, including land preparation, planting, crop management, irrigation, pest and disease control, and harvesting. We utilize advanced machinery such as tractors, planters, harvesters, and precision farming equipment, operated by highly skilled personnel trained to optimize productivity while minimizing waste. Our approach integrates modern farming techniques, soil testing, crop rotation, and sustainable practices to improve soil health, increase yields, and reduce environmental impact.",
    img: mechanized,
  },
  {
    heading: "Poultry, Livestock, and Fishery Farming",
    body: "Gropropak Africa Ltd operates highly efficient poultry, livestock, and aquaculture systems designed to produce premium-quality animal protein for domestic and commercial markets. Our operations cover the full value chain, including farm design, breeding, feeding, health management, biosecurity, and harvesting. In poultry, we manage both broiler and layer production using modern housing systems, optimized feeding regimes, and vaccination schedules to ensure high productivity and minimal mortality. Our livestock programs include cattle, goats, sheep, and pigs, managed with proper grazing, nutrition, veterinary care, and disease prevention measures. Our aquaculture systems are designed for sustainable ash production, with careful attention to water quality management, feed optimization, disease control, and stocking density. All operations are supported by veterinary expertise, technical guidance, and monitoring systems to ensure animal welfare, food safety, and consistent product quality. By integrating modern farming practices, strict biosecurity protocols, and professional management, Gropropak Africa Ltd delivers reliable, high-quality animal protein while promoting sustainable and profitable farming.",
    img: poultry,
  },
  {
    heading: "Agro-Processing and Value Chain Development",
    body: "Gropropak Africa Ltd specializes in transforming raw agricultural produce into high-quality, market-ready products through efcient agro-processing and value chain development. Our operations cover cleaning, grading, milling, packaging, and branding of crops and other farm products to meet domestic and international market standards. We integrate smallholder and commercial farmers into our value chain, providing them with access to technical support, inputs, and guaranteed market linkages. Using modern processing equipment, strict quality control measures, and certified standards, we ensure that every product delivered is safe, durable, and of superior quality. Our structured distribution channels and marketing strategies connect farmers, processors, and buyers, reducing post-harvest losses and increasing profitability across the agricultural value chain. By combining innovation, technology, and strategic partnerships, Gropropak Africa Ltd maximizes value for all stakeholders while promoting sustainable agricultural practices.",
    img: agroprocessing,
  },
  {
    heading: "Fertilizer and Cereal Production",
    body: "Gropropak Africa Ltd engages in the production and supply of high-quality blended fertilizers and processed cereals, including maize, rice, sorghum, and wheat, to support sustainable and productive farming. Our fertilizer production involves custom formulations tailored to the specific nutrient requirements of various crops, ensuring optimal soil health and crop yield. In cereal production, we process raw grains through cleaning, grading, milling, and packaging while maintaining strict adherence to food safety and hygiene standards. Each batch undergoes rigorous quality checks to guarantee purity, nutritional value, and consistency, meeting both local and international market requirements. By combining modern manufacturing processes, technical expertise, and certified quality assurance systems, Gropropak Africa Ltd ensures that farmers and agribusinesses receive reliable inputs and processed grains that enhance productivity, reduce post-harvest losses, and deliver high-quality products to consumers.",
    img: fertilizer,
  },
  {
    heading: "Export and Import of Agricultural Products, Timber, and Charcoal",
    body: "Gropropak Africa Ltd is actively engaged in the export and import of agricultural commodities and forest products, including timber and charcoal, connecting local producers to international markets. Our operations cover the full trade cycle, including sourcing highquality products, conducting quality grading, packaging for safe transport, and managing logistics to ensure timely delivery. We strictly comply with all relevant local and international regulations, including sanitary and phytosanitary standards, to guarantee that all products meet legal and quality requirements. By maintaining transparent documentation, traceability, and adherence to sustainability practices where applicable, we ensure responsible and reliable trading. Through strategic partnerships with farmers, cooperatives, exporters, and buyers, Gropropak Africa Ltd creates value for stakeholders by expanding market access, enhancing product quality, and facilitating profitable trade across borders.",
    img: exportss,
  },
  {
    heading: "Commission Agency and Manufacturers’ Representation",
    body: "Gropropak Africa Ltd serves as a trusted agent and representative for agricultural equipment manufacturers, input suppliers, and commodity traders, helping them expand their reach and establish a strong presence in local and regional markets. Our role includes market development, promoting products, managing sales channels, and ensuring consistent after-sales support to maintain customer satisfaction and loyalty. We leverage our deep understanding of the agricultural sector, strong network of farmers and agribusinesses, and professional marketing strategies to create demand, facilitate transactions, and build long-term business relationships. By acting as a reliable intermediary, Gropropak Africa Ltd ensures that both manufacturers and end-users benefit from efficient product distribution, technical guidance, and responsive service, ultimately enhancing market access and profitability for all stakeholders.",
    img: comission,
  },
  {
    heading: "General Trading, Distribution, and Merchandising",
    body: "Gropropak Africa Ltd operates a comprehensive trading and distribution network that handles both wholesale and retail supply of agricultural goods, agro-allied products, and general merchandise. Our operations include sourcing high-quality products from reliable suppliers, managing inventory across strategically located warehouses, and ensuring timely delivery to clients nationwide. We employ efficient supply chain management systems, transparent pricing policies, and robust logistics solutions to guarantee that products reach customers safely, promptly, and in optimal condition. By combining professional merchandising, market intelligence, and customer-focused service, Gropropak Africa Ltd ensures consistent availability of essential goods, strengthens market access for producers, and delivers value to both urban and rural customers across Nigeria and beyond.",
    img: general,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-[#f7f9f4] text-[#1b4808] relative">

      {/* Subtle leaf texture overlay */}
      <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="inline-block px-8 py-4 text-3xl lg:text-4xl font-extrabold tracking-wide text-[#1b4808] text-custom">
            Our Services
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-md border border-green-900/10">
                  <img
                    src={service.img}
                    alt={service.heading}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-[#0f3010] leading-snug mb-4">
                  {service.heading.split("&").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span>{part.trim()}</span>
                      {i < arr.length - 1 && (
                        <span className="text-[#8db937] font-semibold"> & </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>

                <div className="h-1 w-24 bg-[#8db937] rounded-full mb-5"></div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4e8f22] mt-1 flex-shrink-0 text-xl" />

                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    {service.body}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
