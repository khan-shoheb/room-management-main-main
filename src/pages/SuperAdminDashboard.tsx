import React, { useState } from "react";
import { Building, PlusCircle, UserCog, Users, Star, ListChecks } from "lucide-react";

const initialRestaurants = [
  { id: 1, name: "Taj Palace", subscription: "Premium", owner: "Rahul Sharma" },
  { id: 2, name: "Oberoi Grand", subscription: "Standard", owner: "Priya Singh" },
  { id: 3, name: "Leela Ambience", subscription: "Premium", owner: "Amit Patel" },
];
const subscriptions = ["Premium", "Standard", "Basic"];

const SuperAdminDashboard = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [newName, setNewName] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [newSub, setNewSub] = useState("Standard");

  const addRestaurant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newOwner) return;
    setRestaurants([
      ...restaurants,
      { id: Date.now(), name: newName, subscription: newSub, owner: newOwner },
    ]);
    setNewName("");
    setNewOwner("");
    setNewSub("Standard");
  };

  // Stats
  const total = restaurants.length;
  const premium = restaurants.filter(r => r.subscription === "Premium").length;
  const standard = restaurants.filter(r => r.subscription === "Standard").length;
  const basic = restaurants.filter(r => r.subscription === "Basic").length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300">
      <div className="w-full max-w-5xl mx-auto p-6">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-card p-6 flex items-center gap-4">
            <Users className="h-10 w-10 text-blue-600" />
            <div>
              <div className="text-lg font-bold">Total Restaurants</div>
              <div className="text-2xl font-extrabold text-blue-700">{total}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-card p-6 flex items-center gap-4">
            <Star className="h-10 w-10 text-green-500" />
            <div>
              <div className="text-lg font-bold">Premium</div>
              <div className="text-2xl font-extrabold text-green-600">{premium}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-card p-6 flex items-center gap-4">
            <ListChecks className="h-10 w-10 text-yellow-500" />
            <div>
              <div className="text-lg font-bold">Standard</div>
              <div className="text-2xl font-extrabold text-yellow-600">{standard}</div>
            </div>
          </div>
        </div>
        <div className="bg-white/90 p-8 rounded-2xl shadow-2xl border border-blue-200 animate-fade-in backdrop-blur-md mb-8">
          <div className="flex items-center gap-2 mb-6">
            <UserCog className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-700">Super Admin Dashboard</h2>
          </div>
          <form onSubmit={addRestaurant} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Restaurant Name"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="border px-3 py-2 rounded w-1/3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Owner Name"
              value={newOwner}
              onChange={e => setNewOwner(e.target.value)}
              className="border px-3 py-2 rounded w-1/3 focus:outline-none focus:border-blue-500"
            />
            <select
              value={newSub}
              onChange={e => setNewSub(e.target.value)}
              className="border px-3 py-2 rounded w-1/4 focus:outline-none focus:border-blue-500"
            >
              {subscriptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition flex items-center gap-1">
              <PlusCircle className="h-4 w-4" /> Add Restaurant
            </button>
          </form>
          <table className="w-full text-sm border rounded overflow-hidden shadow">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-2">Name</th>
                <th>Owner</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map(r => (
                <tr key={r.id} className="border-t hover:bg-blue-50 transition">
                  <td className="py-2 font-semibold flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    {r.name}
                  </td>
                  <td>{r.owner}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${r.subscription === "Premium" ? "bg-green-500 text-white" : r.subscription === "Standard" ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"}`}>
                      {r.subscription}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
