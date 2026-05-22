import { 
  TrendingUp, ShoppingBag, CheckCircle, Wallet, 
  Package, Users, Clock, Store, Plus, Tag, Ticket
} from "lucide-react";

export default function DashboardPage() {
  
  // Dummy data for stats
  const stats = [
    { title: "TODAY'S ORDERS", value: "৳ 0", count: "0 Orders", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "LIFETIME SALES", value: "৳ 68,710", count: "8 Orders", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
    { title: "COMPLETED ORDERS", value: "৳ 5,415", count: "4 Orders", icon: CheckCircle, color: "text-teal-500", bg: "bg-teal-50" },
    { title: "TOTAL REVENUE", value: "৳ 5,765", count: "All time", icon: Wallet, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "TOTAL PRODUCTS", value: "906", count: "Active items", icon: Package, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "TOTAL CUSTOMERS", value: "217", count: "Registered", icon: Users, color: "text-pink-500", bg: "bg-pink-50" },
    { title: "PENDING ORDERS", value: "৳ 62,395", count: "Awaiting processing", icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50" },
    { title: "TOTAL VENDORS", value: "38", count: "Active sellers", icon: Store, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  // Quick Access buttons data
  const quickAccess = [
    { title: "Create Order", icon: Plus, color: "bg-blue-500 hover:bg-blue-600" },
    { title: "All Products", icon: Package, color: "bg-red-500 hover:bg-red-600" },
    { title: "All Customers", icon: Users, color: "bg-orange-500 hover:bg-orange-600" },
    { title: "Categories", icon: Tag, color: "bg-teal-500 hover:bg-teal-600" },
    { title: "Support Tickets", icon: Ticket, color: "bg-purple-500 hover:bg-purple-600" },
    { title: "Approve Vendor", icon: CheckCircle, color: "bg-[#1E293B] hover:bg-slate-800" },
  ];

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* --- Left Side: Stats Grid --- */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                  <p className="text-xs text-gray-500 font-medium">{stat.count}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Right Side: Quick Access --- */}
        <div className="w-full lg:w-1/4 bg-gray-100/50 p-5 rounded-xl border border-gray-200">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickAccess.map((btn, index) => (
              <button 
                key={index}
                className={`${btn.color} text-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors shadow-sm`}
              >
                <btn.icon size={20} />
                <span className="text-xs font-semibold text-center">{btn.title}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* --- Charts Section (Placeholders for now) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F05A28] rounded-full"></span>
              Sales Statistics
            </h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-lg bg-gray-50">
            <p className="text-gray-400 text-sm font-medium">Chart Area (Integration Pending)</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#1E293B] rounded-full"></span>
              Sales By Source
            </h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="w-full bg-blue-50 text-blue-600 text-sm font-medium p-4 rounded-lg border border-blue-100 text-center">
            No data available for selected period
          </div>
        </div>
      </div>

    </div>
  );
}