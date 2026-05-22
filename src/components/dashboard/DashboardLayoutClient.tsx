"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, ShoppingCart, Package, List, Layers,
  Users, CreditCard, FileText, LogOut, Search, 
  Bell, Globe, Menu, Image as ImageIcon // ImageIcon ইম্পোর্ট করা হয়েছে
} from "lucide-react";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // মেনু তালিকায় "Banners" যুক্ত করা হয়েছে
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Manage Orders", icon: ShoppingCart, path: "/dashboard/orders" },
    { name: "Manage Products", icon: Package, path: "/dashboard/products" },
    { name: "Category", icon: List, path: "/dashboard/category" },
    { name: "Sub Category", icon: Layers, path: "/dashboard/sub-category" },
    { name: "Banners", icon: ImageIcon, path: "/dashboard/banner" }, // নতুন যুক্ত হলো
    { name: "Customers", icon: Users, path: "/dashboard/customers" },
    { name: "Payments", icon: CreditCard, path: "/dashboard/payments" },
    { name: "Reports", icon: FileText, path: "/dashboard/reports" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* --- Sidebar --- */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-0 lg:w-20"} transition-all duration-300 bg-white border-r border-gray-100 flex flex-col h-full overflow-hidden shrink-0 z-20 absolute lg:relative`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-100 px-4">
          {isSidebarOpen ? (
            <img src="/logos/loginandregisterpagelogo.png" alt="Chapaghor" className="h-10 object-contain brightness-0" />
          ) : (
            <span className="font-bold text-[#F05A28] text-xl">C</span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <p className={`text-[10px] font-bold text-gray-400 mb-3 px-3 uppercase tracking-wider ${!isSidebarOpen && "hidden"}`}>Main Menu</p>
            {menuItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive ? "bg-[#1E293B] text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <item.icon size={20} className={isActive ? "text-[#F05A28]" : ""} />
                    <span className={`font-medium text-sm ${!isSidebarOpen && "hidden"}`}>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 w-full transition-colors">
            <LogOut size={20} />
            <span className={`font-medium text-sm ${!isSidebarOpen && "hidden"}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
              <Menu size={20} />
            </button>
            <div className="hidden md:flex flex-col">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Pages / Dashboard</span>
              <span className="text-sm font-bold text-gray-800 capitalize">
                {pathname.split('/').pop() || 'Overview'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="h-8 w-8 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold text-sm cursor-pointer border-2 border-orange-100">A</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}