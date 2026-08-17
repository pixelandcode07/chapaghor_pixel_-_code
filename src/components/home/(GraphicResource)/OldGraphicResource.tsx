import Image from "next/image";
import Link from "next/link";
import { Clock3, Download, CircleCheck } from "lucide-react";

type GraphicResource = {
  id: number;
  title: string;
  imageUrl: string;
  downloads: number;
};

const resources: GraphicResource[] = [
  { id: 1, title: "Business Card", downloads: 120, imageUrl: "/our-service/Bcard.png" },
  { id: 2, title: "Letterhead", downloads: 120, imageUrl: "/our-service/letter.jpg" },
  { id: 3, title: "Envelope", downloads: 120, imageUrl: "/our-service/envolap.jpg" },
  { id: 4, title: "Mug", downloads: 120, imageUrl: "/our-service/mug.jpg" },
  { id: 5, title: "Photo Frame", downloads: 120, imageUrl: "/our-service/frame.png" },
  { id: 6, title: "Business Card", downloads: 120, imageUrl: "/our-service/Bcard.png" },
  { id: 7, title: "Letterhead", downloads: 120, imageUrl: "/our-service/letter.jpg" },
  { id: 8, title: "Envelope", downloads: 120, imageUrl: "/our-service/envolap.jpg" },
  { id: 9, title: "Mug", downloads: 120, imageUrl: "/our-service/mug.jpg" },
  { id: 10, title: "Photo Frame", downloads: 120, imageUrl: "/our-service/frame.png" },
  { id: 11, title: "Photo Frame", downloads: 120, imageUrl: "/our-service/frame.png" },
  { id: 12, title: "Photo Frame", downloads: 120, imageUrl: "/our-service/frame.png" },
];

export default function GraphicResource() {
  return (
    <section className="py-17">
      <div className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto px-2 md:px-0">
         {/* Title Section */}
            <div className=" flex flex-col items-center justify-center">
                <h4 className="text-[#012C60] text-[16px] md:text-[20px] xl:text-[22px] 3xl:text-[33px] leading-normal font-light uppercase">
                     Professional Quality
                </h4>
                <h2 className="text-[#511B95] text-[20px] md:text-[32px] xl:text-[31px] 3xl:text-[48px] leading-normal font-normal uppercase">
                    Graphic Resources
                </h2>
            </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-6">
          {resources.map((item) => (
            <Link
              href="/"
              key={item.id}
              className="group relative w-[314px] aspect-[314/357] overflow-hidden rounded-xl"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Top */}

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                <CircleCheck size={18} strokeWidth={1.8} />

                <div className="flex items-center gap-1 text-xs">
                  <Clock3 size={12} />
                  {item.downloads}
                </div>
              </div>

              {/* Bottom */}

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-r from-[#FF4D00] to-[#5A2BE2] px-4 py-3">
                <h3 className="text-white font-semibold uppercase text-sm">
                  {item.title}
                </h3>

                <Download size={16} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
