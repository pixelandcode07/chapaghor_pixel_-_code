import RearrangeCategoryManager from "@/components/dashboard/RearrangeCategoryManager";

// সার্ভার সাইড মেটাডেটা (SEO বা টাইটেলের জন্য)
export const metadata = {
  title: "Rearrange Categories | Chapaghor Dashboard",
  description: "Drag and drop to rearrange your ecommerce categories.",
};

export default function RearrangeCategoriesPage() {
  return (
    <div className="space-y-6">
      {/* ক্লায়েন্ট কম্পোনেন্টকে সার্ভার কম্পোনেন্টের ভেতর কল করা হলো। 
        এতে করে লেআউট এবং মেটাডেটা সার্ভার থেকেই রেন্ডার হবে।
      */}
      <RearrangeCategoryManager />
    </div>
  );
}