'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface Logo {
  name: string;
  text: string;
  color: string;
  font?: string;
}

const logos: Logo[] = [
  { name: 'breezy', text: '☁️ breezy', color: '#6B7280' },
  { name: 'attio', text: '❖ attio', color: '#111827' },
  {
    name: 'PayPal',
    text: 'PayPal',
    color: '#003087',
    font: 'italic font-bold text-lg',
  },
  { name: 'mparticle', text: 'mparticle', color: '#111827' },
  {
    name: 'HubSpot',
    text: 'HubSpot',
    color: '#FF7A59',
    font: 'font-bold text-lg',
  },
  {
    name: 'miro',
    text: 'miro',
    color: '#050038',
    font: 'font-bold text-2xl',
  },
];

export default function Client() {
  return (
    <section className="w-full 3xl:h-30 flex items-center bg-[#FDF4EE] py-2.25 3xl:py-4.5 ">
      <div className="w-full flex items-center">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0 w-[116px] md:w-[233px] 3xl:w-[581px] pl-4.5 md:pl-8.5 3xl:pl-[100px]">
          <div className="w-8.5 h-8.5 md:w-11.5 md:h-11.5 3xl:w-24.5 3xl:h-24.5">
            <Image
              src="/images/hand_icon.png"
              alt="Handshake Icon"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-[10px] 3xl:mb[6px] md:text-[22px] 3xl:text-[40px] font-bold leading-tight text-[#F05A28]">
              4,200+
            </h2>

            <p className="text-[5px] leading-tight md:leading-3 md:text-[12px] 3xl:text-[21px] font-light text-[#4A5D77] md:mt-0">
              Our Trusted Clients
              {/* <br className="md:hidden" /> */}
              {/* <span className="md:ml-1">Clients</span> */}
            </p>
            {/* <p className="text-[10px] leading-3 md:text-[17px] 3xl:text-[25px] font-medium text-[#4A5D77]">
              Our Trusted
              <br className="md:hidden" />
              <span className="md:ml-1">Clients</span>
            </p> */}
          </div>
        </div>

        {/* Marquee */}
        <div
          className="flex-1 min-w-0  bg-white"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}>
          <Marquee speed={45} pauseOnHover autoFill gradient={false}>
            {logos.map((logo, index) => (
              <div key={index} className="mr-2 md:mr-4 ">
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
    <div className="flex  w-14 md:w-20 h-5.25 md:h-8.25 3xl:h-[57px] items-center justify-center rounded-[2px] ">
      <span
        className="font-semibold text-[10px] md:text-base"
        style={{ color: logo.color }}>
        {/* {logo.name === "HubSpot" ? (
          <>
            HubSp<span className="text-[#FF7A59]">o</span>t
          </>
        ) : (
          logo.text
        )} */}
        {logo.text}
      </span>
    </div>
  );
}
// function LogoCard({ logo }: { logo: Logo }) {
//   return (
//     <div className="flex  w-20 md:h-[54px] md:w-[150px] h-5.25 md:h-8.25 items-center justify-center rounded-[2px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
//       <span
//         className={`font-semibold ${
//           logo.font || "text-[10px] md:text-base font-sans"
//         }`}
//         style={{ color: logo.color }}
//       >
//         {logo.name === "HubSpot" ? (
//           <>
//             HubSp<span className="text-[#FF7A59]">o</span>t
//           </>
//         ) : (
//           logo.text
//         )}
//       </span>
//     </div>
//   );
// }
