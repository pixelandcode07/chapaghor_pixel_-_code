const categories = [
  'All Resources',
  'Stationery',
  'Business Card',
  'Banner',
  'X-Stand',
  'Social Media',
  'Packaging',
  'Mockups',
  'Others',
];

export default function GraphicCategory() {
  return (
    <div className="mt-5">
      <div
        className="
            flex min-w-max items-center gap-[10px]
            overflow-x-auto pb-1
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            lg:overflow-visible
          ">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={`
                flex h-8 shrink-0 items-center justify-center rounded-full
                text-xs font-normal leading-none
                transition-colors
                ${
                  index === 0
                    ? 'w-[134px] bg-[#ff6f05] text-white'
                    : 'w-[100px] bg-white text-[#333333] shadow-[0_2px_7px_rgba(25,55,90,0.04)]'
                }
              `}>
            {category}
          </button>
        ))}

        <button
          type="button"
          className="
              flex h-8 w-[143px] shrink-0 items-center justify-center
              gap-2 rounded-full border border-[#ff6f05]
              bg-transparent text-[10px] font-normal leading-none
              text-[#ff6f05] transition-colors
              hover:bg-[#fff4ec]
            ">
          <span>Browse Library</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M2.25 6.5H10.5M7.25 3.25L10.5 6.5L7.25 9.75"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
