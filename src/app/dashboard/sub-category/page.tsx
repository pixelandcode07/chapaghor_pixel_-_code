import SubCategoryManager from "@/components/dashboard/SubCategoryManager";

export const metadata = {
  title: "Sub Category Management | Chapaghor",
  description: "Manage your ecommerce sub-categories",
};

export default function SubCategoryPage() {
  return (
    <div className="space-y-6">
      {/* আমাদের তৈরি করা ক্লায়েন্ট কম্পোনেন্টটি এখানে কল করা হলো।
        এটি পেজকে সার্ভার-সাইড রেন্ডার করবে কিন্তু ইউজারের সাথে 
        ইন্টারঅ্যাকশন (Modal, API Call) স্মুথলি হ্যান্ডেল করবে। 
      */}
      <SubCategoryManager />
    </div>
  );
}