import AllCard from "@/components/all-cards/AllCard";
import NavHead from "@/components/home/(Navbar)/NavHead";
// import AllProductBanner from "@/components/home/(ViewAllPageFiles)/AllProductBanner";
// import CustomBusinessCards from "@/components/home/(ViewAllPageFiles)/CustomBusinessCards";
// import CustomerReviews from "@/components/home/(ViewAllPageFiles)/CustomerReviews";
// import MostSearch from "@/components/home/(ViewAllPageFiles)/MostSearch";
// import PrintStep from "@/components/home/(ViewAllPageFiles)/PrintStep";
import ProductBanner from "@/components/product/banner/ProductBanner";

export default function ViewAllProduct() {
  return (
    <div className="pb-20 md:pb-0">
      <NavHead />

      <ProductBanner />
      <AllCard />

      {/* <div className="lg:w-[calc(100vw-200px)] mx-auto">
        <AllProductBanner />
        <MostSearch />
        <CustomBusinessCards />
        <PrintStep />
        <CustomerReviews />
      </div> */}
    </div>
  );
}
