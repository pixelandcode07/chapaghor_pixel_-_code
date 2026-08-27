import Card from './Card';
import SectionHeading from './SectiionHeaing';

type ProductsDataProps = {
  products?: Product[];
  title: string;
};
export default function CardBox({ products = [] }: ProductsDataProps) {
  return (
    <>
      {' '}
      <SectionHeading title="Offset Print" />
      <section className="w-full bg-white shadow-2xl rounded-3xl md:rounded-4xl pt-0 mt-3 p-1 md:p-2 xl:p-4  ">
        <div className="container-custom">
          {/* Mobile / Tablet / LG */}
          <div className="xl:hidden overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-3.75 md:gap-5 w-max pb-2 pl-5">
              <Card products={products} isHorizontal />

              {/* View All Card */}
              <div
                className="w-18 shrink-0 shadow-2xl
             flex flex-col items-center justify-center">
                <span className="mt-3 text-xs text-[#012C60]">View All</span>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden   xl:grid grid-cols-6 xl:gap-4.5 1xl:gap-5.25 3xl:gap-7 items-start">
            <Card products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
