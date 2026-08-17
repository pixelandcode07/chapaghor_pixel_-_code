// "use client";

// import { useState } from "react";
// import GraphicHeader from "./components/GraphicHeader";
// import GraphicCategory from "./components/GraphicCategory";
// import GraphicCard from "./components/GraphicCard";

// type GraphicResource = {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   className?: string;
//   premium?: boolean;
// };

// const resources: GraphicResource[] = [
//   {
//     id: 1,
//     title: "Stationery Design",
//     category: "Stationery",
//     image: "/promobanner/stationery.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 2,
//     title: "Food Menu Design",
//     category: "Social Media",
//     image: "/promobanner/food-menu.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 3,
//     title: "X-Stand Banner",
//     category: "X-Stand",
//     image: "/promobanner/x-stand.png",
//     className: "col-span-1 row-span-2",
//     premium: false,
//   },
//   {
//     id: 4,
//     title: "Packaging Mockup",
//     category: "Packaging",
//     image: "/promobanner/packaging.png",
//     className: "col-span-1 row-span-1",
//     premium: false,
//   },
//   {
//     id: 5,
//     title: "Certificate Design",
//     category: "Others",
//     image: "/promobanner/certificate.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 6,
//     title: "Chicken Restaurant",
//     category: "Social Media",
//     image: "/promobanner/chicken-black.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 7,
//     title: "Business Card",
//     category: "Business Card",
//     image: "/promobanner/business-card.png",
//     className: "col-span-1 row-span-1",
//     premium: false,
//   },
//   {
//     id: 8,
//     title: "Digital Marketing",
//     category: "Social Media",
//     image: "/promobanner/digital-marketing.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 9,
//     title: "Special Fried Chicken",
//     category: "Social Media",
//     image: "/promobanner/fried-chicken.png",
//     className: "col-span-2 row-span-1",
//     premium: false,
//   },
//   {
//     id: 10,
//     title: "Business Proposal",
//     category: "Stationery",
//     image: "/promobanner/business-proposal.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
//   {
//     id: 11,
//     title: "Food Menu",
//     category: "Social Media",
//     image: "/promobanner/food-menu-2.png",
//     className: "col-span-1 row-span-1",
//     premium: true,
//   },
// ];

// export default function GraphicResources() {
//   const [activeCategory, setActiveCategory] = useState("All Resources");

//   const filteredResources =
//     activeCategory === "All Resources"
//       ? resources
//       : resources.filter((resource) => resource.category === activeCategory);

//   return (
//     <section className="bg-[linear-gradient(to_bottom,#E5EEF999_0%,#FFFFFF_100%)] px-4 py-6 sm:px-6 lg:px-8">
//       <div className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto"
//       >
//         {/* Header */}
//         <GraphicHeader />

//         {/* Categories */}
//         <GraphicCategory
//           activeCategory={activeCategory}
//           onCategoryChange={setActiveCategory}
//         />

//         {/* Resource Grid */}
//         {/* <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[105px]"
//         >
//           {filteredResources.map((resource) => (
//             <GraphicCard key={resource.id} resource={resource} />
//           ))}
//         </div> */}
//         {/* Resource Grid */}
// <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:auto-rows-[70px] lg:grid-cols-6 lg:auto-rows-[90px] xl:grid-cols-12 xl:auto-rows-[68px] 1xl:auto-rows-[82px] 3xl:auto-rows-[105px]">
//   {filteredResources.map((resource) => (
//     <GraphicCard key={resource.id} resource={resource} />
//   ))}
// </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import GraphicHeader from "./components/GraphicHeader";
import GraphicCategory from "./components/GraphicCategory";
import GraphicCard from "./components/GraphicCard";
import LandingPageBtn from "../LandingPageBtn";

export type GraphicResource = {
  id: number;
  category: string;
  image: string;
  premium?: boolean;
};

const resources: GraphicResource[] = [
  {
    id: 1,
    category: "Stationery",
    image: "/promobanner/Image1.png",
    premium: true,
  },
  {
    id: 2,
    category: "Social Media",
    image: "/promobanner/Image2.jpg",
    premium: true,
  },
  {
    id: 3,
    category: "X-Stand",
    image: "/promobanner/Image3.jpg",
    premium: false,
  },
  {
    id: 4,
    category: "Packaging",
    image: "/promobanner/Image4.jpg",
    premium: false,
  },
  {
    id: 5,
    category: "Others",
    image: "/promobanner/Image5.jpg",
    premium: true,
  },
  {
    id: 6,
    category: "Social Media",
    image: "/promobanner/Image2.jpg",
    premium: true,
  },
  {
    id: 7,
    category: "Business Card",
    image: "/promobanner/Image7.png",
    premium: false,
  },
  {
    id: 8,
    category: "Social Media",
    image: "/promobanner/Image8.jpg",
    premium: true,
  },
  {
    id: 9,
    category: "Social Media",
    image: "/promobanner/Image9.jpg",
    premium: false,
  },
  {
    id: 10,
    category: "Stationery",
    image: "/promobanner/Image10.jpg",
    premium: true,
  },
  {
    id: 11,
    category: "Social Media",
    image: "/promobanner/Image11.jpg",
    premium: true,
  },
];

export default function GraphicResources() {
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const filteredResources =
    activeCategory === "All Resources"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  return (
    <section className="bg-[linear-gradient(to_bottom,#E5EEF999_0%,#FFFFFF_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="container-custom">
        <GraphicHeader />

        <GraphicCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-3 gap-2 auto-rows-[58px] md:grid-cols-4 xl:grid-cols-7 md:auto-rows-[70px] lg:auto-rows-[90px] xl:auto-rows-[68px] 1xl:auto-rows-[82px] 3xl:auto-rows-[105px]">
          {filteredResources.map((resource) => (
            <GraphicCard key={resource.id} resource={resource} />
          ))}
        </div>
        {/* Button Section */}
        <div className="flex justify-center mt-10 lg:mt-20">
          <LandingPageBtn />
        </div>
      </div>
    </section>
  );
}
