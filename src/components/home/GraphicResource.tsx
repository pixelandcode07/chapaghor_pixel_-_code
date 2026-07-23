import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Download,
  CircleCheck,
} from "lucide-react";

type GraphicResource = {
  id: number;
  title: string;
  image: string;
  downloads: number;
};

const resources: GraphicResource[] = [
  {
    id: 1,
    title: "LETTERHEAD",
    image: "/graphic-resources/letterhead.jpg",
    downloads: 135,
  },
  {
    id: 2,
    title: "BUSINESS CARD",
    image: "/graphic-resources/business-card.jpg",
    downloads: 135,
  },
  {
    id: 3,
    title: "LETTERHEAD",
    image: "/graphic-resources/letterhead.jpg",
    downloads: 135,
  },
  {
    id: 4,
    title: "BUSINESS CARD",
    image: "/graphic-resources/business-card.jpg",
    downloads: 135,
  },
  {
    id: 5,
    title: "LETTERHEAD",
    image: "/graphic-resources/letterhead.jpg",
    downloads: 135,
  },
  {
    id: 6,
    title: "ENVELOPE",
    image: "/graphic-resources/envelope.jpg",
    downloads: 135,
  },
  {
    id: 7,
    title: "INNER COLOUR MUG",
    image: "/graphic-resources/mug.jpg",
    downloads: 135,
  },
  {
    id: 8,
    title: "ENVELOPE",
    image: "/graphic-resources/envelope.jpg",
    downloads: 135,
  },
  {
    id: 9,
    title: "INNER COLOUR MUG",
    image: "/graphic-resources/mug.jpg",
    downloads: 135,
  },
  {
    id: 10,
    title: "ENVELOPE",
    image: "/graphic-resources/envelope.jpg",
    downloads: 135,
  },
];

export default function GraphicResource() {
  return (
    <section className="py-20">
      <div className="container mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">
          <p className="uppercase tracking-[2px] text-[#5E7290] text-sm">
            Professional Quality
          </p>

          <h2 className="text-[42px] font-bold text-[#4527A0] uppercase leading-none">
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
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Top */}

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">

                <CircleCheck
                  size={18}
                  strokeWidth={1.8}
                />

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

                <Download
                  size={16}
                  className="text-white"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}