// ⚠️ এখানে কোনো "use client" থাকবে না! এটি ১০০% Server Component.
import DashboardLayoutClient from "@/components/dashboard/DashboardLayoutClient";

export const metadata = {
  title: "Dashboard | Chapaghor Admin",
  description: "Admin panel for Chapaghor",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Client Component-এর ভেতরে Server Component (children) পাস করে দেওয়া হলো
    <DashboardLayoutClient>
      {children}
    </DashboardLayoutClient>
  );
}