import NavHead from '@/components/home/(Navbar)/NavHead';
import Footer from '@/components/home/(Footer)/Footer';
import SectionHeading from '@/components/product/reuse-components/SectiionHeaing';
import CardBox from '@/components/product/reuse-components/CardBox';
import ProductBanner from '@/components/product/banner/ProductBanner';

// TypeScript Interface for Product
interface Product {
  name: string;
  moq: number;
  views: number;
  src: string;
}

const products: Product[] = [
  { name: 'Mug', moq: 1, views: 493, src: '/best/mug.jpg' },
  { name: 'Business Card', moq: 1, views: 493, src: '/best/card.jpg' },
  { name: 'Photo Frame', moq: 1, views: 493, src: '/best/frame.jpg' },
  { name: 'ID Card', moq: 1, views: 493, src: '/best/id.jpg' },
  { name: 'X-Stand', moq: 1, views: 493, src: '/best/stand.jpg' },
  { name: 'Letterhead', moq: 1, views: 493, src: '/best/mug.jpg' },
  { name: 'Envelope', moq: 1, views: 493, src: '/best/stand.jpg' },
  { name: 'Envelope', moq: 1, views: 493, src: '/best/id.jpg' },
  { name: 'Envelope', moq: 1, views: 493, src: '/best/stand.jpg' },
];

export default function ProductPage() {
  return (
    <main className="flex flex-col relative bg-white">
      <NavHead />

      {/* Product Banner Section */}
      <ProductBanner />

      <div className="min-h-[calc(100vh-400px)] pt-10">
        <div className="container-custom">
          <h1
            className="
                  mx-auto 
                  text-center
                  font-['Helvetica_Neue',Helvetica,sans-serif]
                  font-normal
                  text-[#1B2130]
                  text-[25px]
                  leading-[100%]
                  tracking-[0]
                  sm:text-[30px]
                  md:text-[35px]
                  lg:text-[42.11px]
                  my-10
                "
          >
            Our Print Products from A-Z
          </h1>

          <CardBox title="Offset Print" products={products} />

          <div className="my-5">
            <CardBox title="Signage" products={products} />
          </div>

          <div className="my-5">
            <CardBox title="Signage" products={products} />
          </div>

          <div className="my-5">
            <CardBox title="Invitations & Cards" products={products} />
          </div>

          <div className="my-5">
            <CardBox title="Gift" products={products} />
          </div>

          <div className="my-5">
            <CardBox title="Stationery" products={products} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}