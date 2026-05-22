import RearrangeSubCategoryManager from "@/components/dashboard/RearrangeSubCategoryManager";

export const metadata = {
  title: "Rearrange Sub Categories | Chapaghor Dashboard",
  description: "Drag and drop to rearrange your ecommerce sub-categories.",
};

export default function RearrangeSubCategoriesPage() {
  return (
    <div className="space-y-6">
      <RearrangeSubCategoryManager />
    </div>
  );
}