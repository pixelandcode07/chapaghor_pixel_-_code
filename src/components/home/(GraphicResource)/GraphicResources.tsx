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
    <section className="bg-[linear-gradient(to_bottom,#E5EEF999_0%,#FFFFFF_100%)] px-4 py-3.75 md:py-13.5 xl:py-7.5 3xl:py-10.5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <GraphicHeader />

        <GraphicCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-3 gap-2  md:grid-cols-4 xl:grid-cols-7 auto-rows-[65px] md:auto-rows-[80px] lg:auto-rows-[100px] xl:auto-rows-[90px] 1xl:auto-rows-[100px] 3xl:auto-rows-[120px]">
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
