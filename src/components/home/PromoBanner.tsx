import Image from "next/image";

const banners = [
  {
    id: 1,
    bg: "bg-[#F77443]",
    buttonBg: "bg-white",
    buttonText: "text-[#F77443]",
  },
  {
    id: 2,
    bg: "bg-[#2381E6]",
    buttonBg: "bg-[#5BE229]",
    buttonText: "text-white",
  },
];

export default function PromoBanner() {
  return (
    <section className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`relative flex h-[387px] items-center overflow-hidden rounded-[28px] ${banner.bg}`}
        >
          {/* Content */}
          <div className="z-10 pl-10">
            <h2 className="font-inter text-[47.63px] font-bold leading-none uppercase tracking-normal text-white">
              20% OFF DURING THE <br /> WEEKEND
            </h2>

            <button
              className={`mt-10 rounded-full px-10 py-7 font-inter text-[35.72px] font-bold leading-none tracking-normal transition-transform duration-300 hover:scale-105 ${banner.buttonBg} ${banner.buttonText}`}
            >
              Get Now
            </button>
          </div>

          {/* Image */}
          <div className="absolute -right-15 -bottom-30 h-full w-[55%]">
            <Image
              src="/promobanner/mugs.png"
              alt="Mugs"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      ))}
    </section>
  );
}