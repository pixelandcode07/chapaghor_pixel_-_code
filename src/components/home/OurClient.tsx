// "use client";

// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// // ডেমো লোগো ডাটা
// const logos = [
//   { name: "breezy", text: "☁️ breezy", color: "#6B7280" },
//   { name: "attio", text: "❖ attio", color: "#111827" },
//   { name: "PayPal", text: "PayPal", color: "#003087", font: "italic font-bold text-lg" },
//   { name: "mparticle", text: "▨ mparticle", color: "#111827" },
//   { name: "HubSpot", text: "HubSpot", color: "#FF7A59", font: "font-bold text-lg" },
//   { name: "miro", text: "miro", color: "#050038", font: "font-bold text-2xl" },
// ];

// export default function OurClient() {
//   return (
//     <section className="w-full bg-[#FDF4EE] py-5">
//       <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex items-center justify-center">

//         {/* Left Side: Static Stats & Handshake Icon */}
//         <div className="flex items-center gap-4 z-10 shrink-0">
//           {/* Icon Container (Handshake + Shield) */}
//           <div className="w-14 h-14 md:w-16 md:h-16 3xl:w-24.5 3xl:h-24.5 text-[#F05A28]">
//             <Image
//               src="/images/hand_icon.png"
//               alt="Handshake Icon"
//               width={64}
//               height={64}
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Text Container */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-2xl md:text-[32px] 3xl:text-[48px] font-extrabold text-[#F05A28] leading-tight tracking-tight">
//               4,200+
//             </h2>
//             <p className="text-sm md:text-[17px] 3xl:text-[25px] text-[#4A5D77] font-medium mt-0.5">
//               Our Trusted Clients
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Animated Marquee Logos */}
//        <div
//   className="flex-1 ml-8 lg:ml-[254px]"
//   style={{
//     maskImage:
//       "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
//     WebkitMaskImage:
//       "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
//   }}
// >
//   <Marquee
//     speed={45}
//     pauseOnHover
//     autoFill
//     gradient={false}
//   >
//     {logos.map((logo, index) => (
//       <div key={index} className="mr-4">
//         <LogoCard logo={logo} />
//       </div>
//     ))}
//   </Marquee>
// </div>
//       </div>

     
//     </section>
//   );
// }

// // Logo Card Component
// function LogoCard({ logo }: { logo: any }) {
//   return (
//     // উচ্চতা 54px করা হয়েছে আপনার ইমেজের পরিমাপ অনুযায়ী
//     <div className="flex h-[54px] w-32 md:w-[150px] bg-white items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-[2px]">
//       {/* আপনার আসল লোগো ইমেজ ব্যবহার করতে নিচের কোড আনকমেন্ট করে Image ট্যাগটি ব্যবহার করুন:
//         <Image src={logo.src} alt={logo.name} width={120} height={40} className="object-contain" /> 
//       */}

//       {/* ডেমো টেক্সট লোগো */}
//       <span
//         className={`font-semibold ${logo.font || 'text-sm md:text-base font-sans'}`}
//         style={{ color: logo.color }}
//       >
//         {logo.name === 'HubSpot' ? (
//           <>HubSp<span className="text-[#FF7A59]">o</span>t</>
//         ) : (
//           logo.text
//         )}
//       </span>
//     </div>
//   );
// }


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

export default function OurClient() {
  return (
    <section className="w-full bg-[#FDF4EE] py-5">
      <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex items-center">

        {/* Left Section */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 3xl:w-24.5 3xl:h-24.5">
            <Image
              src="/images/hand_icon.png"
              alt="Handshake Icon"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-[32px] 3xl:text-[48px] font-extrabold text-[#F05A28] leading-tight">
              4,200+
            </h2>

            <p className="text-sm md:text-[17px] 3xl:text-[25px] text-[#4A5D77] font-medium">
              Our Trusted Clients
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="flex-1 min-w-0 ml-6 lg:ml-20"
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
              <div key={index} className="mr-4">
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
    <div className="flex h-[54px] w-32 md:w-[150px] items-center justify-center rounded-[2px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <span
        className={`font-semibold ${
          logo.font || "text-sm md:text-base font-sans"
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
