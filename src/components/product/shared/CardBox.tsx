import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  moq: number;
  views: number;
  src: string;
  price?: number;
}

interface CardBoxProps {
  title: string;
  products: Product[];
}

export default function CardBox({ title, products }: CardBoxProps) {
  return (
    <div
      className="
        bg-white
        border-0
        border-[#EAEAEC]
        rounded-[16px]

        pt-[20px]
        3xl:pt-[18px]
        1xl:pt-[13px]
        xl:pt-[12px]

        pb-[30px]
        3xl:pb-[52px]

        px-[20px]
        md:pl-[19px]
        md:pr-0
        3xl:px-[55px]
        1xl:px-[40px]
        xl:px-[36px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          justify-between
          items-center

          mb-[10px]
          md:mb-[11px]

          3xl:mb-[10px]
          1xl:mb-[7px]
          xl:mb-[7px]
        "
      >
        {/* Title */}
        <h2
          className="
            m-0
            p-0
            leading-none
            text-[#333333]

            text-[20px]
            md:text-[30px]

            3xl:text-[42px]
            1xl:text-[30px]
            xl:text-[28px]

            font-light
            font-['Helvetica_Neue',Helvetica,sans-serif]
          "
        >
          {title}
        </h2>

        {/* View All */}
        <Link
          href="#"
          className="
            text-[#FF6B00]

            text-[14px]
            md:text-[20px]

            3xl:text-[30px]
            1xl:text-[22px]
            xl:text-[20px]
            md:pr-[33px]

            hover:underline
            font-light
            leading-none
          "
        >
          View All
        </Link>
      </div>

      {/* Divider */}
      <div
        className="
          border-t
          border-[#EAEAEC]

          mb-[24px]

          md:mb-[24px]

          3xl:mb-[40px]
          1xl:mb-[25px]
          xl:mb-[22px]
        "
      />

      {/* Products */}
      <div
        className="
          grid
          grid-cols-2
          gap-[16px]

          /*
           * ONLY MD = 768px
           * Horizontal scroll
           */
          md:flex
          md:gap-[18px]
          md:overflow-x-auto
          md:overflow-y-hidden
          md:scroll-smooth
          md:pb-[4px]
          md:[scrollbar-width:none]
          md:[-ms-overflow-style:none]
          md:[&::-webkit-scrollbar]:hidden

          /*
           * Existing desktop layout
           */
          lg:grid
          lg:grid-cols-6
          lg:overflow-visible

          3xl:gap-[24px]
        "
      >
        {products.map((product, idx) => (
          <div
            key={idx}
            className="
              relative
              group
              rounded-[12px]
              overflow-hidden
              cursor-pointer
              bg-gray-100
              flex
              flex-col
              w-full

              /*
               * ONLY MD
               * Fixed card width so horizontally scroll works
               */
              md:w-[190px]
              md:min-w-[190px]
              md:shrink-0

              /*
               * Reset from LG and above
               */
              lg:w-auto
              lg:min-w-0
              lg:shrink
            "
          >
            {/* Price Badge */}
            <div
              className="
                absolute
                top-2
                right-2

                bg-black/30
                backdrop-blur-md

                text-white
                text-[12px]

                xl:text-[9px]

                px-2
                xl:px-[9px]

                xl:py-0.75
                py-1

                rounded-md
                z-10

                flex
                items-center
                gap-[4px]

                xl:gap-[3px]
              "
            >
              <Image
                src="/combo/Taka Icon.svg"
                alt="Taka"
                width={12}
                height={12}
                className="
                  w-[12px]
                  h-[12px]

                  xl:w-[9px]
                  xl:h-[9px]

                  object-contain
                  brightness-0
                  invert
                "
              />

              <span>135</span>
            </div>

            {/* Product Image */}
            <div
              className="
                relative
                w-full
                aspect-[264/285]
                overflow-hidden
              "
            >
              <Image
                src={product.src}
                alt={product.name}
                fill
                sizes="
                  (min-width: 1920px) 264px,
                  (min-width: 1024px) 16vw,
                  (min-width: 768px) 190px,
                  45vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            {/* Overlay Text */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full

                px-[16px]
                pb-[16px]

                xl:pb-[9px]

                flex
                flex-col
                justify-end
              "
            >
              <h3
                className="
                  m-0
                  p-0
                  leading-none
                  text-white
                  font-bold

                  text-[14px]

                  xl:text-[12px]
                  1xl:text-[14px]
                  3xl:text-[16px]

                  tracking-[1px]
                  uppercase
                "
              >
                {product.name}
              </h3>

              <p
                className="
                  m-0
                  p-0

                  mt-[5px]

                  xl:mt-[3px]
                  1xl:mt-[4px]
                  3xl:mt-[5px]

                  leading-none
                  text-white/80

                  text-[10px]

                  xl:text-[7px]
                  1xl:text-[8px]
                  3xl:text-[11px]
                "
              >
                MOQ: {product.moq} | {product.views} views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}