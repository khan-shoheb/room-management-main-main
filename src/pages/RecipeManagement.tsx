
import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const RecipeManagement = () => {
  // State for editable fields
  const [servings, setServings] = useState(1);
  const [activeTab, setActiveTab] = useState('Costing');
  const [menuPrice, setMenuPrice] = useState(18.4);
  const [ingredients, setIngredients] = useState([
    {
      name: "Beef, Ground 1lb",
      detail: "By Weight",
      size: "8oz",
      yield: "80%",
      cost: 1.29,
      costPercent: 52.44,
    },
  ]);

  // Handlers
  const handleIngredientChange = (idx, field, value) => {
    setIngredients((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };
  const handleSave = () => {
    alert("Recipe saved! (Demo)");
  };
  const handleDelete = () => {
    alert("Recipe deleted! (Demo)");
  };
  const handleActions = () => {
    alert("Actions menu (Demo)");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card className="shadow-card animate-fade-in w-full mb-4">
          <CardHeader>
            <CardTitle className="text-2xl font-extrabold text-red-700 italic tracking-wide">
              RECIPE MANAGEMENT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic font-semibold text-muted-foreground mt-2">
              Get real-time stock availability.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base mt-4">
              <li>
                <span className="font-bold text-red-600">Get updates</span> on diminishing stocks.
              </li>
              <li>
                <span className="font-bold text-red-600">Maintains recipe consistency</span> for all outlets.
              </li>
              <li>
                <span className="font-bold text-red-600">Ensures minimum food wastage and theft.</span>
              </li>
              <li>
                <span className="font-bold text-red-600">Get a list of expiring items</span> and consume them before they expire.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Hero Section: Kitchen + Tablet Mockup */}
        <Card className="relative overflow-hidden shadow-card animate-fade-in w-full mb-8 p-0 border-0">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-orange-100 via-white to-green-100">
            {/* Kitchen background image (placeholder kitchen theme) */}
            <div className="flex-1 flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-white">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                alt="Professional kitchen"
                className="object-cover rounded-xl shadow-md h-40 md:h-64 w-full max-w-[350px]"
                draggable="false"
              />
            </div>
            {/* Tablet mockup */}
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="bg-white rounded-2xl shadow-lg border w-[320px] md:w-[400px] p-4">
                <div className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>📋</span> Butter Chicken Recipe
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span>Chicken</span> <span className="text-green-600 text-xl">✅</span></li>
                  <li className="flex items-center gap-2"><span>Butter</span> <span className="text-green-600 text-xl">✅</span></li>
                  <li className="flex items-center gap-2"><span>Tomato</span> <span className="text-green-600 text-xl">✅</span></li>
                  <li className="flex items-center gap-2"><span>Cream</span> <span className="text-red-500 text-xl">❌</span></li>
                  <li className="flex items-center gap-2"><span>Spices</span> <span className="text-green-600 text-xl">✅</span></li>
                </ul>
                <div className="mt-4 text-xs text-muted-foreground">Real-time stock check enabled</div>
              </div>
            </div>
          </div>
        </Card>
        {/* Costing Tab UI Section Removed as requested */}
      </div>
    </DashboardLayout>
  );
};

export default RecipeManagement;
