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
