import BannerManager from "@/components/dashboard/BannerManager";

export const metadata = {
  title: "Banner Management | Chapaghor",
  description: "Manage homepage banners for Chapaghor",
};

export default function BannerPage() {
  return (
    <div className="space-y-6">
      {/* Client Component Call */}
      <BannerManager />
    </div>
  );
}