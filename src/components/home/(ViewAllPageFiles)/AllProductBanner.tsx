import Image from "next/image";

export default function AllProductBanner() {
  return (
    <div className="container mx-auto flex justify-center">
      {/* Container matching your exact specs:
        width: 1235, height: 236, border-radius: 8px, box-shadow
      */}
      <div className="relative w-[1235px] h-[236px] rounded-[8px] overflow-hidden shadow-[4px_4px_20px_0px_#00000036]">
        <Image
          src="/banners/all-product-banner.jpg"
          alt="All Products Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}