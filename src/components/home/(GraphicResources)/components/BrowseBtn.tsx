import React from 'react';

export default function BrowseBtn() {
  return (
    <div className="w-full mx-auto justify-center items-center ">
      <button
        type="button"
        className="
        mx-auto
              flex   shrink-0 items-center justify-center
              gap-2 rounded-full border border-[#ff6f05]
              bg-transparent text-[20px] font-normal leading-none
              text-[#ff6f05] transition-colors
              hover:bg-[#fff4ec]
              py-5 px-10
            ">
        <span>Browse Library</span>
      </button>
    </div>
  );
}
