<<<<<<< HEAD
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface GraphicResource {
  id: number;
  title: string;
  category: string;
  image: string;
  className?: string;
  premium?: boolean;
}

interface GraphicCardProps {
  resource: GraphicResource;
}

export default function GraphicCard({
  resource,
}: GraphicCardProps) {
  return (
    <div
      className={`
        group relative
        overflow-hidden
        rounded-lg
        bg-gray-200
        ${resource.className ?? ""}
      `}
    >
      {/* Image */}
      <Image
        src={resource.image}
        alt={resource.title}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Premium Badge */}
      {resource.premium && (
        <div className="absolute left-1.5 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#ffbd16] text-[8px] text-white shadow">
          ★
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-full p-3">
          <p className="text-xs font-semibold text-white">
            {resource.title}
          </p>

          <Button
            size="sm"
            className="mt-2 h-7 rounded-full bg-white px-3 text-[10px] text-gray-800 hover:bg-gray-100"
          >
            View Resource
          </Button>
        </div>
      </div>
    </div>
  );
=======
// "use client";

// import Image from "next/image";
// import { GraphicResource } from "../GraphicResources";

// interface GraphicCardProps {
//   resource: GraphicResource;
// }

// const layoutClasses: Record<number, string> = {
//   1: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 xl:col-span-1 xl:row-span-2",
//   2: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2",
//   3: "hidden md:block md:col-span-1 md:row-span-4 xl:col-span-1 xl:row-span-4",
//   4: "hidden md:block md:col-span-2 md:row-span-2 xl:col-span-1 xl:row-span-2",
//   5: "hidden md:block md:col-span-1 md:row-span-2 xl:col-span-2 xl:row-span-2",
//   6: "col-span-2 row-span-2 md:col-span-2 md:row-span-3 xl:col-span-2 xl:row-span-2",
//   7: "col-span-2 row-span-2 md:col-span-2 md:row-span-3 xl:col-span-1 xl:row-span-2",
//   8: "hidden xl:block xl:col-span-3 xl:row-span-2",
//   9: "col-span-4 row-span-3 md:hidden xl:block xl:col-span-3 xl:row-span-3",
//   10: "hidden xl:block xl:col-span-2 xl:row-span-3",
//   11: "hidden xl:block xl:col-span-2 xl:row-span-3",
// };

// export default function GraphicCard({ resource }: GraphicCardProps) {
//   const layoutClass = layoutClasses[resource.id] ?? "";

//   return (
//     <div
//       className={`group relative min-h-0 overflow-hidden rounded-lg bg-gray-200 ${layoutClass}`}
//     >
//       <Image
//         src={resource.image}
//         alt={resource.category}
//         fill
//         sizes="(max-width: 639px) 50vw, (max-width: 1023px) 25vw, (max-width: 1535px) 25vw, 20vw"
//         className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//       />

//       {resource.premium && (
//         <div className="absolute left-2 top-1.5 z-10 ">
//           <svg
//             width="28"
//             height="28"
//             viewBox="0 0 28 28"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="14" cy="14" r="14" fill="black" fill-opacity="0.23" />
//             <path
//               d="M14.4016 7.77783L10.4323 13.7317L5.47073 9.76246L7.45536 19.6856H21.3478L23.3324 9.76246L18.3708 13.7317L14.4016 7.77783Z"
//               fill="#F09F33"
//             />
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import {
  Copy,
  Download,
  Heart,
} from "lucide-react";
import { GraphicResource } from "../GraphicResources";
import { GraphicDonwloadIcon, GraphicHeartIcon, GraphiCloneIcon } from "@/components/custom/icons";

interface GraphicCardProps {
  resource: GraphicResource;
}

const layoutClasses: Record<number, string> = {
  1: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 xl:col-span-1 xl:row-span-2",
  2: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2",
  3: "hidden md:block md:col-span-1 md:row-span-4 xl:col-span-1 xl:row-span-4",
  4: "hidden md:block md:col-span-2 md:row-span-2 xl:col-span-1 xl:row-span-2",
  5: "hidden md:block md:col-span-1 md:row-span-2 xl:col-span-2 xl:row-span-2",
  6: "col-span-2 row-span-2 md:col-span-2 md:row-span-3 xl:col-span-2 xl:row-span-2",
  7: "col-span-2 row-span-2 md:col-span-2 md:row-span-3 xl:col-span-1 xl:row-span-2",
  8: "hidden xl:block xl:col-span-3 xl:row-span-2",
  9: "col-span-4 row-span-3 md:hidden xl:block xl:col-span-3 xl:row-span-3",
  10: "hidden xl:block xl:col-span-2 xl:row-span-3",
  11: "hidden xl:block xl:col-span-2 xl:row-span-3",
};

export default function GraphicCard({ resource }: GraphicCardProps) {
  const layoutClass = layoutClasses[resource.id] ?? "";

  return (
    <div
      className={`group relative min-h-0 overflow-hidden rounded-lg ${layoutClass}`}
    >
      {/* Image — always full card */}
      <Image
        src={resource.image}
        alt={resource.category}
        fill
        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 25vw, (max-width: 1535px) 25vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Dark Hover Overlay */}
      <div className="absolute inset-0 bg-[#10283A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Premium Crown */}
      {resource.premium && (
        <div className="absolute left-2 top-1.5 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="black" fillOpacity="0.23" />
            <path
              d="M14.4016 7.77783L10.4323 13.7317L5.47073 9.76246L7.45536 19.6856H21.3478L23.3324 9.76246L18.3708 13.7317L14.4016 7.77783Z"
              fill="#F09F33"
            />
          </svg>
        </div>
      )}

      {/* Top Right Actions */}
      <div className="absolute right-2 top-1.5 z-10 flex items-center gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 cursor-pointer"
        >
          <GraphiCloneIcon className="w-4 h-4 p-px" />
        </button>

        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 cursor-pointer"
        >
           <GraphicHeartIcon className="w-4 h-4 p-px" />
        </button>

        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 cursor-pointer"
        >
           <GraphicDonwloadIcon className="w-5 h-5 p-px" />
        </button>
        {/* <GraphiCloneIcon/> */}
        {/* <GraphicHeartIcon/>
        <GraphicDonwloadIcon/> */}
      </div>

      {/* Category Name */}
      <div className="absolute bottom-5 left-3 z-10 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-white md:text-base">
          {resource.category}
        </h3>
      </div>
    </div>
  );
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
}