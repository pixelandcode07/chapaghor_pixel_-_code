"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

interface Logo {
  name: string;
  text: string;
  color: string;
  font?: string;
}

const logos: Logo[] = [
  { name: "breezy", text: "☁️ breezy", color: "#6B7280" },
  { name: "attio", text: "❖ attio", color: "#111827" },
  {
    name: "PayPal",
    text: "PayPal",
    color: "#003087",
    font: "italic font-bold text-lg",
  },
  { name: "mparticle", text: "▨ mparticle", color: "#111827" },
  {
    name: "HubSpot",
    text: "HubSpot",
    color: "#FF7A59",
    font: "font-bold text-lg",
  },
  {
    name: "miro",
    text: "miro",
    color: "#050038",
    font: "font-bold text-2xl",
  },
];

export default function Client() {
  return (
    <section className="w-full bg-[#FDF4EE] py-5">
      <div className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex items-center">

       {/* Left Section */}
<div className="flex items-center gap-2 md:gap-4 shrink-0">
  <div className="w-10 h-10 md:w-16 md:h-16 3xl:w-24.5 3xl:h-24.5">
    <Image
      src="/images/hand_icon.png"
      alt="Handshake Icon"
      width={64}
      height={64}
      className="w-full h-full object-contain"
    />
  </div>

  <div>
    <h2 className="text-lg md:text-[32px] 3xl:text-[48px] font-extrabold leading-tight text-[#F05A28]">
      4,200+
    </h2>

    <p className="text-[10px] leading-3 md:text-[17px] 3xl:text-[25px] font-medium text-[#4A5D77]">
      Our Trusted
      <br className="md:hidden" />
      <span className="md:ml-1">Clients</span>
    </p>
  </div>
</div>

       {/* Marquee */}
<div
  className="flex-1 min-w-0 ml-2 md:ml-6 lg:ml-20"
  style={{
    maskImage:
      "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
  }}
>
  <Marquee
    speed={45}
    pauseOnHover
    autoFill
    gradient={false}
  >
    {logos.map((logo, index) => (
      <div key={index} className="mr-2 md:mr-4">
        <LogoCard logo={logo} />
      </div>
    ))}
  </Marquee>
</div>
      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-10 w-20 md:h-[54px] md:w-[150px] items-center justify-center rounded-[2px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
  <span
    className={`font-semibold ${
      logo.font || "text-[10px] md:text-base font-sans"
    }`}
    style={{ color: logo.color }}
  >
    {logo.name === "HubSpot" ? (
      <>
        HubSp<span className="text-[#FF7A59]">o</span>t
      </>
    ) : (
      logo.text
    )}
  </span>
</div>
  );
}