import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Plus, Search, AlertTriangle, Package } from "lucide-react";
import { StatCard } from "@/components/StatCard";

const inventoryItems = [
  { name: "Chicken", unit: "kg", stock: 25, minStock: 10, maxStock: 50, category: "Meat", lastUpdated: "Today" },
  { name: "Paneer", unit: "kg", stock: 8, minStock: 5, maxStock: 30, category: "Dairy", lastUpdated: "Today" },
  { name: "Basmati Rice", unit: "kg", stock: 45, minStock: 20, maxStock: 100, category: "Grains", lastUpdated: "Yesterday" },
  { name: "Wheat Flour", unit: "kg", stock: 3, minStock: 10, maxStock: 50, category: "Grains", lastUpdated: "2 days ago" },
  { name: "Cooking Oil", unit: "L", stock: 12, minStock: 5, maxStock: 25, category: "Oils", lastUpdated: "Today" },
  { name: "Tomatoes", unit: "kg", stock: 15, minStock: 10, maxStock: 40, category: "Vegetables", lastUpdated: "Today" },
  { name: "Onions", unit: "kg", stock: 20, minStock: 15, maxStock: 50, category: "Vegetables", lastUpdated: "Yesterday" },
  { name: "Cream", unit: "L", stock: 2, minStock: 3, maxStock: 15, category: "Dairy", lastUpdated: "3 days ago" },
  { name: "Spice Mix", unit: "kg", stock: 6, minStock: 2, maxStock: 10, category: "Spices", lastUpdated: "Today" },
  { name: "Yogurt", unit: "L", stock: 10, minStock: 5, maxStock: 20, category: "Dairy", lastUpdated: "Today" },
];

const Inventory = () => {
  const lowStock = inventoryItems.filter((i) => i.stock <= i.minStock);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Inventory</h1>
            <p className="text-muted-foreground">Track stock levels and supplies</p>
          </div>
          <Button className="gradient-warm text-primary-foreground gap-2">
            <Plus className="h-4 w-4" /> Add Stock
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Total Items" value={`${inventoryItems.length}`} icon={<Package className="h-5 w-5" />} />
          <StatCard
            title="Low Stock Items"
            value={`${lowStock.length}`}
            change="Needs attention"
            changeType="negative"
            icon={<AlertTriangle className="h-5 w-5" />}
          />
          <StatCard title="Categories" value="6" icon={<Package className="h-5 w-5" />} />
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search inventory..." className="pl-9" />
        </div>

        <div className="grid gap-3">
          {inventoryItems.map((item) => {
            const percentage = (item.stock / item.maxStock) * 100;
            const isLow = item.stock <= item.minStock;

            return (
              <Card key={item.name} className="shadow-card animate-fade-in">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{item.name}</h3>
                        {isLow && (
                          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30 text-[10px]">
                            Low Stock
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{item.category} • Updated {item.lastUpdated}</p>
                    </div>
                    <div className="flex items-center gap-6 sm:w-1/2">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Stock Level</span>
                          <span className="font-medium">
                            {item.stock} / {item.maxStock} {item.unit}
                          </span>
                        </div>
                        <Progress
                          value={percentage}
                          className={`h-2 ${isLow ? "[&>div]:bg-destructive" : "[&>div]:gradient-warm"}`}
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        Restock
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
