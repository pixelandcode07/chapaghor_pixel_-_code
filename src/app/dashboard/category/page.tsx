import CategoryManager from "@/components/dashboard/CategoryManager";

export const metadata = {
  title: "Category Management | Chapaghor",
  description: "Manage your ecommerce categories",
};

export default function CategoryPage() {
  return (
    <div className="space-y-6">
      {/* এখানে শুধু আমাদের Client Component টিকে কল করা হয়েছে। 
        এতে করে পেজটি Server-Side SEO ফ্রেন্ডলি থাকলো, 
        আবার ভেতরের লজিকগুলো Client-Side এ স্মুথলি কাজ করবে।
      */}
      <CategoryManager />
    </div>
  );
}