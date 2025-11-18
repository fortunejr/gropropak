import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    { number: 75, label: "Trusted Partners & Clients" },
    { number: 1000, label: "Poultry, Livestock & Fishes Farmed" },
    { number: 25, label: "Skilled Workers & Experts" },
  ];

  return (
    <section className="py-16 px-6 flex justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#1f4d0c] to-[#376b1a] rounded-3xl shadow-xl p-12 relative overflow-hidden">

        {/* Light leaf texture overlay */}
        <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <div
                key={index}
                ref={ref}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-10 px-6 border border-white/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h2 className="text-5xl lg:text-6xl font-extrabold text-[#f6d86b] drop-shadow-sm">
                  {inView ? <CountUp end={stat.number} duration={2.2} /> : 0}+
                </h2>

                <p className="mt-4 text-lg text-white/95 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
