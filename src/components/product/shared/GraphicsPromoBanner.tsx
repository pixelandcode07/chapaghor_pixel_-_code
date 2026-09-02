import Link from "next/link";

const GraphicsPromoBanner = () => {
  return (
    <section className="w-full">
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#FFF8F1]
          bg-[url('/product-banners/graphicsPromoBanner.jpg')]
          bg-center
          bg-no-repeat

          /* 
           * ==========================================
           * MOBILE DEFAULTS (375px)
           * ==========================================
           */
          rounded-[12px]
          px-[21px]
          py-[20px]
          bg-[length:100%_100%]

          /* 
           * ==========================================
           * MD & ABOVE (Untouched)
           * ==========================================
           */
          md:bg-cover

          md:rounded-[20px]
          md:px-[33px]
          md:py-[33px]

          lg:rounded-[24px]
          lg:px-[60px]
          lg:py-[38px]

          xl:rounded-[28px]
          xl:px-[51px]
          xl:py-[48px]

          1xl:rounded-[32px]
          1xl:px-[59px]
          1xl:py-[55px]

          3xl:rounded-[40px]
          3xl:px-[79px]
          3xl:py-[73px]
        "
      >
        {/* =====================================================
            CONTENT
           ===================================================== */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-start
            
            /* মোবাইলে টেক্সট যেন ইমেজের ওপর না যায় তাই w-[55%] দেওয়া হলো */
            w-[55%]
            md:w-full
          "
        >
          {/* =================================================
              SMALL TITLE
             ================================================= */}
          <p
            className="
              m-0
              font-light
              leading-none
              tracking-normal
              text-[#757575]

              /* MOBILE */
              text-[6px]

              3xl:text-[24px]
              1xl:text-[18px]
              xl:text-[16px]
              md:text-[9px]
            "
          >
            GRAPHICS RESOURCES
          </p>

          {/* =================================================
              MAIN TITLE
             ================================================= */}
          <h1
            className="
              m-0
              font-sans
              font-medium
              leading-[1.05]
              tracking-[-1.5px]
              text-black

              /* MOBILE */
              mt-[5px]
              text-[14px]

              1xl:mt-[14px]
              3xl:mt-[22px]
              xl:mt-[12px]
              md:mt-[8px]

              3xl:text-[54px]
              1xl:text-[40px]
              xl:text-[35px]
              md:text-[21px]
            "
          >
            Design Assets to
            <br />
            <span className="text-[#FF6738]">
              Elevate Your Projects
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
             ================================================= */}
          <p
            className="
              m-0
              font-sans
              font-normal
              leading-[1.3]
              tracking-normal
              text-[#757575]

              /* MOBILE */
              mt-[6px]
              text-[6px]

              3xl:mt-[20px]
              1xl:mt-[17px]
              xl:mt-[13px]
              md:mt-[9px]

              3xl:text-[24px]
              1xl:text-[18px]
              xl:text-[16px]
              md:text-[9px]
            "
          >
            Ready to use templates, mockup &amp; design
            <br className="hidden sm:block" />
            resources to save time and inspire creativity
          </p>

          {/* =================================================
              CTA BUTTON
             ================================================= */}
          <Link
            href="/graphics-resources"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#FF5A1F]
              font-sans
              font-semibold
              text-white
              transition-all
              duration-200
              hover:scale-[1.02]
              hover:bg-[#ff5115]
              active:scale-[0.98]

              /* MOBILE */
              mt-[10px]
              px-[12px]
              py-[5px]
              gap-[6px]
              text-[8px]

              3xl:text-[23px]
              1xl:text-[18px]
              xl:text-[15px]
              md:text-[9px]

              md:mt-[22px]
              md:px-[18px]
              md:py-[9px]
              md:gap-[14px]

              lg:mt-[24px]
              lg:px-[32px]
              lg:py-[14px]
              lg:gap-[16px]

              xl:mt-[15px]
              xl:px-[28px]
              xl:py-[13px]
              xl:gap-[18px]

              1xl:mt-[20px]
              1xl:px-[34px]
              1xl:py-[17px]
              1xl:gap-[20px]

              3xl:mt-[28px]
              3xl:px-[44px]
              3xl:py-[23px]
              3xl:gap-[24px]
            "
          >
            <span>Explore Resources</span>

            {/* Arrow */}
            <svg
              viewBox="0 0 32 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                shrink-0
                h-auto

                /* MOBILE */
                w-[8px]

                md:w-[9px]
                lg:w-[21px]
                xl:w-[15px]
                1xl:w-[26px]
                3xl:w-[29px]
              "
            >
              <path
                d="M1 10H29"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21 2L29 10L21 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GraphicsPromoBanner;