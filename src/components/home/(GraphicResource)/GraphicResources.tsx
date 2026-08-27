<<<<<<< HEAD
"use client";

import { useState } from "react";
import GraphicHeader from "./components/GraphicHeader";
import GraphicCategory from "./components/GraphicCategory";
import GraphicCard from "./components/GraphicCard";

type GraphicResource = {
  id: number;
  title: string;
  category: string;
  image: string;
  className?: string;
  premium?: boolean;
};

const resources: GraphicResource[] = [
  {
    id: 1,
    title: "Stationery Design",
    category: "Stationery",
    image: "/resources/stationery.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 2,
    title: "Food Menu Design",
    category: "Social Media",
    image: "/resources/food-menu.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 3,
    title: "X-Stand Banner",
    category: "X-Stand",
    image: "/resources/x-stand.png",
    className: "col-span-1 row-span-2",
    premium: false,
  },
  {
    id: 4,
    title: "Packaging Mockup",
    category: "Packaging",
    image: "/resources/packaging.png",
    className: "col-span-1 row-span-1",
    premium: false,
  },
  {
    id: 5,
    title: "Certificate Design",
    category: "Others",
    image: "/resources/certificate.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 6,
    title: "Chicken Restaurant",
    category: "Social Media",
    image: "/resources/chicken-black.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 7,
    title: "Business Card",
    category: "Business Card",
    image: "/resources/business-card.png",
    className: "col-span-1 row-span-1",
    premium: false,
  },
  {
    id: 8,
    title: "Digital Marketing",
    category: "Social Media",
    image: "/resources/digital-marketing.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 9,
    title: "Special Fried Chicken",
    category: "Social Media",
    image: "/resources/fried-chicken.png",
    className: "col-span-2 row-span-1",
    premium: false,
  },
  {
    id: 10,
    title: "Business Proposal",
    category: "Stationery",
    image: "/resources/business-proposal.png",
    className: "col-span-1 row-span-1",
    premium: true,
  },
  {
    id: 11,
    title: "Food Menu",
    category: "Social Media",
    image: "/resources/food-menu-2.png",
    className: "col-span-1 row-span-1",
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
      <div className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto"
      >
        {/* Header */}
        <GraphicHeader />

        {/* Categories */}
        <GraphicCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Resource Grid */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[105px]"
        >
          {filteredResources.map((resource) => (
            <GraphicCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
=======
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
    image: "/promobanner/Image11.jpg",
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
    <section className="bg-[linear-gradient(to_bottom,#E5EEF999_0%,#FFFFFF_100%)] px-2 py-3.75 md:py-13.5 xl:py-7.5 3xl:py-10.5">
      
      <div className="container-custom">
        <GraphicHeader />

        <GraphicCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-3 gap-x-[15px] gap-y-[13px] md:grid-cols-4 xl:grid-cols-7 auto-rows-[65px] md:auto-rows-[80px] lg:auto-rows-[100px] xl:auto-rows-[90px] 1xl:auto-rows-[100px] 3xl:auto-rows-[120px]">
          {filteredResources.map((resource) => (
            <GraphicCard key={resource.id} resource={resource} />
          ))}
        </div>
        {/* Button Section */}
        <div className="flex justify-center mt-10">
          <LandingPageBtn />
        </div>
      </div>
    </section>
  );
}
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
