"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchAllCards, AllCard as AllCardType } from "@/lib/all-cards";

import AllDynamicCards from "./AllDynamicCards";

import CustomPagination from "@/components/custom/pagination/CustomPagination";

import { SearchIcon } from "lucide-react";

const ITEMS_PER_PAGE = 36;

export default function AllCard() {
  const [cards, setCards] = useState<AllCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

 const filteredCards = useMemo(() => {
  const query = searchQuery.trim().toLowerCase();

  if (!query) {
    return cards;
  }

  return cards.filter((card) => {
    const cardTitle = String(card.title ?? "").toLowerCase();

    return cardTitle.includes(query);
  });
}, [cards, searchQuery]);

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

  const safeCurrentPage =
    totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

  const currentCards = filteredCards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <div className="w-full px-[5px] pt-[20px] pb-0 md:px-[10px] md:pt-[25px] md:pb-0 lg:px-[10px] lg:pt-[27px] lg:pb-0 xl:px-[32px] xl:pt-[27px] xl:pb-0 1xl:px-[63px] 1xl:pt-[30px] 1xl:pb-0 3xl:px-[51px] 3xl:pt-[41px] 3xl:pb-0">
        <div className="rounded-[12px] shadow-[2.03px_2.03px_7.93px_0px_#0000001A] md:rounded-[14px] xl:rounded-[20px] 3xl:rounded-[30px]">
          {/* Title + Search */}
          <div className="container-custom px-5 pt-[20px] md:px-0 md:pt-[24px] lg:pt-[26px] xl:pt-[29px] 1xl:pt-[33px] 3xl:pt-[58px]">
            <div className="flex flex-row items-center justify-between gap-2 md:flex-row md:items-center md:justify-between md:gap-5">
              {/* Title */}
              <h1 className="text-[18px] font-normal leading-none text-[#1B2130] md:text-[26px] lg:text-[28px] xl:text-[32px] 1xl:text-[35px] 3xl:text-[48px]">
                Custom Offset Printing
              </h1>

              {/* Search */}
              <div className="relative w-[120px] shrink-0 rounded-full bg-[radial-gradient(150.36%_227.1%_at_8.75%_100%,#757575_0%,rgba(201,201,201,0)_100%)] p-[1.49px] md:w-[130px] lg:w-[135px] xl:w-[125px] 1xl:w-[138px] 3xl:w-[191px]">
                <div className="relative w-full rounded-full bg-white">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search"
                    className="h-[42px] w-full rounded-full bg-transparent px-[14px] pr-[38px] text-[12px] font-normal text-[#1B2130] outline-none placeholder:text-[#777777] md:h-[44px] md:px-[15px] md:pr-[40px] md:text-[13px] lg:h-[45px] lg:px-[16px] lg:pr-[41px] lg:text-[14px] xl:h-[30px] xl:px-[12px] xl:pr-[28px] xl:text-[11px] 1xl:h-[33px] 1xl:px-[13px] 1xl:pr-[30px] 1xl:text-[12px] 3xl:h-[46px] 3xl:px-[18px] 3xl:pr-[42px] 3xl:text-[15px]"
                  />

                  <SearchIcon className="absolute right-[12px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#777777] md:right-[13px] md:h-[19px] md:w-[19px] lg:right-[13px] lg:h-[20px] lg:w-[20px] xl:right-[8px] xl:h-[13px] xl:w-[13px] 1xl:right-[9px] 1xl:h-[14px] 1xl:w-[14px] 3xl:right-[14px] 3xl:h-[22px] 3xl:w-[22px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="container-custom px-4 py-[25px] md:px-0 md:py-[30px] lg:py-[34px] xl:py-[37px] 1xl:py-[40px] 3xl:py-[50px]">
            {currentCards.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-[12px] gap-y-[25px] md:grid-cols-4 md:gap-x-[16px] md:gap-y-[30px] lg:gap-x-[18px] lg:gap-y-[34px] xl:grid-cols-6 xl:gap-x-[17px] xl:gap-y-[39px] 1xl:gap-x-[18px] 1xl:gap-y-[43px] 3xl:gap-x-[26px] 3xl:gap-y-[60px]">
                {currentCards.map((card) => (
                  <AllDynamicCards key={card._id} card={card} />
                ))}
              </div>
            ) : (
              <div className="py-[40px] text-center text-[16px] text-[#777777] md:py-[60px]">
                No cards found.
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <CustomPagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}