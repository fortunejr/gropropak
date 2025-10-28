import { BoxIcon, Globe, Ship, Warehouse } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <div className="bg-[#1d4c08] py-10 pb-16 h-12">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="text-white font-semibold text-lg tracking-wide"
      >
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <BoxIcon />
          Agro-Processing
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Ship />
          Global Shipping of Agricultural Products
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Warehouse />
          Fertilizer and Cereal Production
        </h2>
        <h2 className="stats-font mx-8 flex items-center gap-2">
            <Globe />
          Supply Chain Experts
        </h2>
      </Marquee>
    </div>
  );
}
