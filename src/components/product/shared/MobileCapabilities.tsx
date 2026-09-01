// src/components/product/shared/MobileCapabilities.tsx

import Image from "next/image";

const capabilities = [
  {
    id: 1,
    title: "Offset Printing",
    desc: "High volume\nbest quality",
    icon: "/capabilities/offset.png", // আপনার আইকনের অরিজিনাল পাথ এখানে বসাবেন
  },
  {
    id: 2,
    title: "Digital Printing",
    desc: "Short run\nfast & sharp",
    icon: "/capabilities/digital.png",
  },
  {
    id: 3,
    title: "Large Format",
    desc: "Banners, posters\n& signage",
    icon: "/capabilities/large-format.png",
  },
  {
    id: 4,
    title: "Finishing",
    desc: "Lamination, Cutting\n& binding",
    icon: "/capabilities/finishing.png",
  },
  {
    id: 5,
    title: "Bulk Order",
    desc: "Special discount\nfor bulk order",
    icon: "/capabilities/bulk-order.png",
  },
  {
    id: 6,
    title: "Fast Delivery",
    desc: "On-time delivery\nnationwide",
    icon: "/capabilities/fast-delivery.png",
  },
];

export default function MobileCapabilities() {
  return (
    <section 
      className="
        w-full 
        bg-white 
        py-[24px] 
        px-[10px] 
        rounded-[12px] 
        
        /* শুধুমাত্র মোবাইলে শো করবে, md বা তার ওপরে হাইড থাকবে */
        block 
        md:hidden 
      "
    >
      {/* Title */}
      <h2 className="text-center font-bold text-[13px] tracking-[0.5px] mb-[20px] text-[#1B2130]">
        OUR <span className="text-[#FF5A1F]">PRINTING</span> CAPABILITIES
      </h2>

      {/* Grid Layout (3 Columns) */}
      <div className="grid grid-cols-3 gap-y-[24px]">
        {capabilities.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex flex-col items-center text-center px-[4px]
              /* প্রথম ও দ্বিতীয় কলামের ডানপাশে বর্ডার (দাগ) দেওয়ার জন্য */
              ${index % 3 !== 2 ? "border-r border-[#EAEAEC]" : ""}
            `}
          >
            {/* Icon */}
            <div className="h-[35px] flex items-center justify-center mb-[8px]">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain w-auto h-full"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-[10px] text-[#1B2130] leading-tight mb-[4px]">
              {item.title}
            </h3>

            {/* Description (whitespace-pre-line দিয়ে লাইন ব্রেক করা হয়েছে) */}
            <p className="text-[8px] text-[#757575] leading-[1.2] whitespace-pre-line">
              {item.desc}
            </p>

            {/* Bottom Orange Dash (ইমেজের মতো ছোট্ট কমলা দাগ) */}
            <div className="w-[12px] h-[1px] bg-[#FF5A1F] mt-[6px] rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}