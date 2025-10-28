import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    { number: 75, label: "Trusted Partners & Clients" },
    { number: 1000, label: "Poultry, Livestock & Fishes farmed" },
    { number: 25, label: "Skilled Workers & Experts" },
  ];

  return (
    <section className="py-6 flex justify-center px-4">
      <div className="bg-[#3a751f] rounded-2xl px-10 py-10 max-w-5xl w-full text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-12 gap-5">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <div
                key={index}
                ref={ref}
                className="transform transition duration-500 hover:scale-105 bg-green-950/25 rounded-xl px-5 py-4 "
              >
                <h2 className="stats-font lg:text-5xl text-4xl font-extrabold text-yellow-400">
                  {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}+
                </h2>
                <p className="mt-3 text-lg text-white tracking-wide font-medium">
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
