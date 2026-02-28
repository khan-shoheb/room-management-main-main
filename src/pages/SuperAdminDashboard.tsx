import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Building, CreditCard, Users, BarChart2, Settings, LifeBuoy } from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: <Home /> },
  { label: "Restaurants", icon: <Building /> },
  { label: "Subscriptions", icon: <CreditCard /> },
  { label: "Revenue", icon: <BarChart2 /> },
  { label: "Users", icon: <Users /> },
  { label: "Analytics", icon: <BarChart2 /> },
  { label: "System Settings", icon: <Settings /> },
  { label: "Support", icon: <LifeBuoy /> },
];

export default function SuperAdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("isSuperAdmin");
    localStorage.removeItem("userRole");
    window.location.href = "/superadmin-login";
  };
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6 text-blue-700">Super Admin</h2>
        <nav className="flex flex-col gap-2">
          {sidebarItems.map(item => (
            <button key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Super Admin Dashboard</h1>
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Stat Cards */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Building className="h-10 w-10 text-blue-600 mb-2" />
            <div className="text-lg font-bold">Total Restaurants</div>
            <div className="text-2xl font-extrabold text-blue-700">--</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <CreditCard className="h-10 w-10 text-green-500 mb-2" />
            <div className="text-lg font-bold">Active Subscriptions</div>
            <div className="text-2xl font-extrabold text-green-600">--</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <BarChart2 className="h-10 w-10 text-yellow-500 mb-2" />
            <div className="text-lg font-bold">Platform Revenue</div>
            <div className="text-2xl font-extrabold text-yellow-600">--</div>
          </div>
        </div>
        {/* Add more sections for restaurant management, subscriptions, users, analytics, etc. */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700">Add Restaurant</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700">Create Subscription</button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-yellow-600">View Revenue</button>
          </div>
        </div>
      </main>
    </div>
  );
}
