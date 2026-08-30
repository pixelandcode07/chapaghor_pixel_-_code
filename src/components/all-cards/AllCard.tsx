"use client";

import { useEffect, useState } from "react";
import { fetchAllCards, AllCard as AllCardType } from "@/lib/all-cards";
import AllDynamicCards from "./AllDynamicCards";

export default function AllCard() {
  const [cards, setCards] = useState<AllCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await fetchAllCards();
        setCards(data);
      } catch (error) {
        console.error("Failed to load cards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCards();
  }, []);

  if (isLoading) {
    return (
      <section className="w-full">
        <div className="container-custom py-10 text-center">
          Loading...
        </div>
      </section>
    );
  }

  return (
  <section>
      <div
      className="
        w-full
        px-[20px] pt-[20px] pb-0
        md:px-[30px] md:pt-[25px] md:pb-0
        lg:px-[32px] lg:pt-[27px] lg:pb-0
        xl:px-[32px] xl:pt-[27px] xl:pb-0
        1xl:px-[63px] 1xl:pt-[30px] 1xl:pb-0
        3xl:px-[51px] 3xl:pt-[41px] 3xl:pb-0
        
      "
    >
      <div className=" border-2 rounded-[30px] shadow-[2.03px_2.03px_7.93px_0px_#0000001A]">


        {/* Title + Search */}
        <div
          className="container-custom
            mt-[20px]
            md:mt-[24px]
            lg:mt-[26px]
            xl:mt-[29px]
            1xl:mt-[33px]
            3xl:mt-[58px]
          "
        >
          <div className="flex items-center justify-between gap-5">
            <h1
              className="
                font-normal
                text-[#1B2130]
                text-[24px]
                md:text-[26px]
                lg:text-[28px]
                xl:text-[32px]
                1xl:text-[35px]
                3xl:text-[48px]
                leading-none
              "
            >
              Custom Offset Printing
            </h1>

            {/* Search will come here */}
          </div>
        </div>

        {/* Cards */}
        <div
          className="container-custom
            py-[25px]
            md:py-[30px]
            lg:py-[34px]
            xl:py-[37px]
            1xl:py-[40px]
            3xl:py-[50px]
          "
        >
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              xl:grid-cols-6
              gap-x-[12px]
              gap-y-[25px]
              md:gap-x-[16px]
              md:gap-y-[30px]
              lg:gap-x-[18px]
              lg:gap-y-[34px]
              xl:gap-x-[17px]
              xl:gap-y-[39px]
              1xl:gap-x-[18px]
              1xl:gap-y-[43px]
              3xl:gap-x-[26px]
              3xl:gap-y-[60px]
            "
          >
            {cards.map((card) => (
              <AllDynamicCards
                key={card._id}
                card={card}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}