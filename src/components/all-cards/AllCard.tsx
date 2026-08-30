// "use client";

// import { useEffect, useState } from "react";
// import { fetchAllCards, AllCard as AllCardType } from "@/lib/all-cards";
// import AllDynamicCards from "./AllDynamicCards";
// import { SearchIcon } from "lucide-react";

// export default function AllCard() {
//   const [cards, setCards] = useState<AllCardType[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState(true);

//   useEffect(() => {
//     const loadCards = async () => {
//       try {
//         const data = await fetchAllCards();
//         setCards(data);
//       } catch (error) {
//         console.error("Failed to load cards:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadCards();
//   }, []);

//   if (isLoading) {
//     return (
//       <section className="w-full">
//         <div className="container-custom py-10 text-center">
//           Loading...
//         </div>
//       </section>
//     );
//   }

//   return (
//   <section>
//       <div
//       className="
//         w-full
//         px-[5px] pt-[20px] pb-0
//         md:px-[10px] md:pt-[25px] md:pb-0
//         lg:px-[10px] lg:pt-[27px] lg:pb-0
//         xl:px-[32px] xl:pt-[27px] xl:pb-0
//         1xl:px-[63px] 1xl:pt-[30px] 1xl:pb-0
//         3xl:px-[51px] 3xl:pt-[41px] 3xl:pb-0
        
//       "
//     >
//       <div className=" border-2 rounded-[30px] shadow-[2.03px_2.03px_7.93px_0px_#0000001A]">


//         {/* Title + Search */}
//         <div
//           className="container-custom
//           px-5 md:px-0
//             mt-[20px]
//             md:mt-[24px]
//             lg:mt-[26px]
//             xl:mt-[29px]
//             1xl:mt-[33px]
//             3xl:mt-[58px]
//           "
//         >
//           <div className="flex items-center justify-between gap-5">
//             <h1
//               className="
//                 font-normal
//                 text-[#1B2130]
//                 text-[24px]
//                 md:text-[26px]
//                 lg:text-[28px]
//                 xl:text-[32px]
//                 1xl:text-[35px]
//                 3xl:text-[48px]
//                 leading-none
//               "
//             >
//               Custom Offset Printing
//             </h1>

//             {/* SEARCH */}
//           <div
//             className="
//               relative
//               w-full
//               sm:w-[320px]
//               md:w-[350px]
//               lg:w-[300px]
//               xl:w-[305px]
//               1xl:w-[330px]
//               3xl:w-[378px]
//             "
//           >
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search"
//               className="
//                 h-[48px]
//                 w-full
//                 rounded-full
//                 border-[2px]
//                 border-[#D6D6D6]
//                 bg-white
//                 px-[20px]
//                 pr-[55px]
//                 text-[16px]
//                 font-normal
//                 text-[#1B2130]
//                 outline-none
//                 transition-colors
//                 placeholder:text-[#777777]
//                 focus:border-[#AFAFAF]
//                 sm:h-[50px]
//                 md:h-[52px]
//                 lg:h-[52px]
//                 xl:h-[55px]
//                 1xl:h-[58px]
//                 3xl:h-[64px]
//                 xl:px-[22px]
//                 1xl:px-[24px]
//                 3xl:px-[28px]
//                 xl:text-[17px]
//                 1xl:text-[18px]
//                 3xl:text-[20px]
//               "
//             />

//             <SearchIcon
//               className="
//                 absolute
//                 right-[18px]
//                 top-1/2
//                 h-[25px]
//                 w-[25px]
//                 -translate-y-1/2
//                 text-[#777777]
//                 sm:right-[19px]
//                 md:right-[20px]
//                 xl:right-[21px]
//                 1xl:right-[22px]
//                 3xl:right-[25px]
//                 xl:h-[27px]
//                 xl:w-[27px]
//                 1xl:h-[29px]
//                 1xl:w-[29px]
//                 3xl:h-[34px]
//                 3xl:w-[34px]
//               "
//             />
//           </div>
//         </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div
//           className="container-custom
//           px-4 md:px-0
//             py-[25px]
//             md:py-[30px]
//             lg:py-[34px]
//             xl:py-[37px]
//             1xl:py-[40px]
//             3xl:py-[50px]
//           "
//         >
//           <div
//             className="
//               grid
//               grid-cols-2
//               md:grid-cols-4
//               xl:grid-cols-6
//               gap-x-[12px]
//               gap-y-[25px]
//               md:gap-x-[16px]
//               md:gap-y-[30px]
//               lg:gap-x-[18px]
//               lg:gap-y-[34px]
//               xl:gap-x-[17px]
//               xl:gap-y-[39px]
//               1xl:gap-x-[18px]
//               1xl:gap-y-[43px]
//               3xl:gap-x-[26px]
//               3xl:gap-y-[60px]
//             "
//           >
//             {cards.map((card) => (
//               <AllDynamicCards
//                 key={card._id}
//                 card={card}
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";

import { fetchAllCards, AllCard as AllCardType } from "@/lib/all-cards";

import AllDynamicCards from "./AllDynamicCards";

import { SearchIcon } from "lucide-react";

export default function AllCard() {
  const [cards, setCards] = useState<AllCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="w-full px-[5px] pt-[20px] pb-0 md:px-[10px] md:pt-[25px] md:pb-0 lg:px-[10px] lg:pt-[27px] lg:pb-0 xl:px-[32px] xl:pt-[27px] xl:pb-0 1xl:px-[63px] 1xl:pt-[30px] 1xl:pb-0 3xl:px-[51px] 3xl:pt-[41px] 3xl:pb-0">
        <div className="rounded-[30px] border-2 shadow-[2.03px_2.03px_7.93px_0px_#0000001A]">
          {/* Title + Search */}
          <div className="container-custom mt-[20px] px-5 md:mt-[24px] md:px-0 lg:mt-[26px] xl:mt-[29px] 1xl:mt-[33px] 3xl:mt-[58px]">
            <div className="flex flex-col items-start gap-[18px] md:flex-row md:items-center md:justify-between md:gap-5">
              <h1 className="font-normal leading-none text-[#1B2130] text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 1xl:text-[35px] 3xl:text-[48px]">
                Custom Offset Printing
              </h1>

              {/* SEARCH */}
              <div className="relative w-full md:w-[300px] lg:w-[300px] xl:w-[305px] 1xl:w-[330px] 3xl:w-[378px]">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" className="h-[46px] w-full rounded-full border-[2px] border-[#D6D6D6] bg-white px-[18px] pr-[52px] text-[14px] font-normal text-[#1B2130] outline-none transition-colors placeholder:text-[#777777] focus:border-[#AFAFAF] md:h-[50px] md:text-[15px] lg:h-[52px] lg:text-[16px] xl:h-[55px] xl:px-[22px] xl:text-[17px] 1xl:h-[58px] 1xl:px-[24px] 1xl:text-[18px] 3xl:h-[64px] 3xl:px-[28px] 3xl:text-[20px]" />
                <SearchIcon className="absolute right-[16px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#777777] md:right-[18px] md:h-[23px] md:w-[23px] lg:right-[19px] xl:right-[21px] xl:h-[27px] xl:w-[27px] 1xl:right-[22px] 1xl:h-[29px] 1xl:w-[29px] 3xl:right-[25px] 3xl:h-[34px] 3xl:w-[34px]" />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="container-custom px-4 py-[25px] md:px-0 md:py-[30px] lg:py-[34px] xl:py-[37px] 1xl:py-[40px] 3xl:py-[50px]">
            <div className="grid grid-cols-2 gap-x-[12px] gap-y-[25px] md:grid-cols-4 md:gap-x-[16px] md:gap-y-[30px] lg:gap-x-[18px] lg:gap-y-[34px] xl:grid-cols-6 xl:gap-x-[17px] xl:gap-y-[39px] 1xl:gap-x-[18px] 1xl:gap-y-[43px] 3xl:gap-x-[26px] 3xl:gap-y-[60px]">
              {cards.map((card) => (
                <AllDynamicCards key={card._id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}