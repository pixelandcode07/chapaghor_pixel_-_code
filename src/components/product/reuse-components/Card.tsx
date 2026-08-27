import Image from 'next/image';

type Product = {
  name: string;
  src: string;
  moq: number;
  views: number;
};

type DynamicCardsReuseProps = {
  products?: Product[];
  isHorizontal?: boolean;
};

export default function Card({
  products = [],
  isHorizontal = false,
}: DynamicCardsReuseProps) {
  return (
    <>
      {products.slice(0, 6).map((product, idx) => (
        <div
          key={idx}
          className={`
            relative group cursor-pointer snap-start shrink-0
            ${isHorizontal ? 'w-[151px] md:w-[187px]' : 'w-full'}
          `}>
          <div
            className={`
              relative overflow-hidden rounded-[10px] bg-white
              border border-gray-100
              ${
                isHorizontal
                  ? 'aspect-[151/157] md:aspect-[187/194]'
                  : 'aspect-[189/207] 2xl:aspect-[199/207] 3xl:aspect-[265/275]'
              }
            `}>
            <Image
              src={product.src}
              alt={product.name}
              fill
              sizes={
                isHorizontal
                  ? '(max-width: 768px) 151px, 187px'
                  : '(max-width: 1536px) 199px, 265px'
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={idx === 0}
            />

            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute z-10 bottom-2 left-2 right-2 md:bottom-4 md:left-4">
              <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
                {product.name}
              </h3>

              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm mt-1">
                MOQ: {product.moq}
                <span className="mx-1.5">|</span>
                {product.views} views
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
