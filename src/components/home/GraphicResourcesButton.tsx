import Image from "next/image";

export default function GraphicResourcesButton() {
  return (
    <div className="fixed right-0 top-1/3 -translate-y-1/2 z-50">
      {/* Replace href with your actual link or onClick handler.
        Using group and hover effects for a smooth slide-left animation.
      */}
      <a
        href="#graphic-resources"
        className="group flex flex-col items-center gap-3 bg-[#FD7034] text-white py-5 px-2.5 rounded-l-[10px] shadow-lg border-l border-t border-b border-white/10 transition-all duration-300  cursor-pointer"
        // hover:-translate-x-1
        aria-label="Graphic Resources"
      >
        {/* Top Icon */}
        {/* <GraphicIcon/> */}
        <Image
          src="/nav-logo/graphic2.png"
          alt="Graphic Resources"
          width={25}
          height={27}
          className="w-full h-full object-contain"
        />
        {/* Vertical Text reading from Bottom to Top */}
        <span className="[writing-mode:vertical-rl] rotate-180 font-bold tracking-widest text-xs sm:text-sm uppercase select-none">
          Graphic Resources
        </span>
      </a>
    </div>
  );
}
