import NavHead from '@/components/home/(Navbar)/NavHead';
import Footer from '@/components/home/(Footer)/Footer';
import CardBox from '@/components/product/shared/CardBox';
import ProductBanner from '@/components/product/banner/ProductBanner';

interface Product {
  name: string;
  moq: number;
  views: number;
  src: string;
  price?: number;
}

/*
|--------------------------------------------------------------------------
| Offset Print Products
|--------------------------------------------------------------------------
| Images:
| public/productcard/Offsetimage1.png
| public/productcard/Offsetimage2.png
| public/productcard/Offsetimage3.png
| public/productcard/Offsetimage4.png
| public/productcard/Offsetimage5.png
| public/productcard/Offsetimage6.png
*/

const offsetProducts: Product[] = [
  {
    name: 'Offset Print 01',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage1.png',
  },
  {
    name: 'Offset Print 02',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage2.png',
  },
  {
    name: 'Offset Print 03',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage3.png',
  },
  {
    name: 'Offset Print 04',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage4.png',
  },
  {
    name: 'Offset Print 05',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage5.png',
  },
  {
    name: 'Offset Print 06',
    moq: 1,
    views: 493,
    src: '/productcard/Offsetimage6.png',
  },
];

/*
|--------------------------------------------------------------------------
| Other Product Demo Data
|--------------------------------------------------------------------------
*/

const products: Product[] = [
  {
    name: 'Mug',
    moq: 1,
    views: 493,
    src: '/best/mug.jpg',
  },
  {
    name: 'Business Card',
    moq: 1,
    views: 493,
    src: '/best/card.jpg',
  },
  {
    name: 'Photo Frame',
    moq: 1,
    views: 493,
    src: '/best/frame.jpg',
  },
  {
    name: 'ID Card',
    moq: 1,
    views: 493,
    src: '/best/id.jpg',
  },
  {
    name: 'X-Stand',
    moq: 1,
    views: 493,
    src: '/best/stand.jpg',
  },
  {
    name: 'Letterhead',
    moq: 1,
    views: 493,
    src: '/best/mug.jpg',
  },
];

/*
|--------------------------------------------------------------------------
| Category Mapping
|--------------------------------------------------------------------------
*/

const productCategories = [
  {
    id: 1,
    title: 'Offset Print',
    products: offsetProducts,
  },
  {
    id: 2,
    title: 'Signage',
    products,
  },
  {
    id: 3,
    title: 'Invitations & Cards',
    products,
  },
  {
    id: 4,
    title: 'Gift',
    products,
  },
  {
    id: 5,
    title: 'Stationery',
    products,
  },
];

export default function ProductPage() {
  return (
    <main className="flex flex-col relative bg-[#F9FAFB]">
      <NavHead />

      <ProductBanner />

      <div className="">
        <div
          className="
          
            mx-auto
            w-full
            px-4
            md:px-8
            3xl:px-[47px]
            1xl:px-[62px]
            xl:px-[31px]
            md:pl-[15px]
            md:pr-0
          "
        >
          {/* Page Title */}
          <h1
          className="
            mx-auto
            text-center
            font-['Helvetica_Neue',Helvetica,sans-serif]
            font-normal
            text-[#1B2130]
            text-[25px]
            sm:text-[30px]
            md:text-[26px]
            3xl:text-[48px]
            1xl:text-[36px]
            xl:text-[31px]
            mt-10
            3xl:mt-[28px]
            mb-[30px]
            3xl:mb-[28px]
            1xl:mb-[27px]
            1xl:mt-[27px]
            xl:mt-[20px]
            xl:mb-[20px]
            
            
            
          "
        >
          Our Print Products from A-Z
        </h1>

          {/* Category Cards */}
          <div className="flex flex-col gap-[24px] 3xl:gap-[38px]">
            {productCategories.map((category) => (
              <CardBox
                key={category.id}
                title={category.title}
                products={category.products}
              />
            ))}
          </div>

          {/* Bottom Space */}
          <div className="mt-[40px] 3xl:mt-[72px] flex flex-col gap-6 mb-10">
            {/* 
              <SupportBanner />
              <GraphicsPromoBanner />
            */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}