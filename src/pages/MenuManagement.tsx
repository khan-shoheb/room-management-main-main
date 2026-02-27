import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Edit, Trash2, Star } from "lucide-react";

const categories = ["All", "Starters", "Main Course", "Breads", "Rice", "Desserts", "Beverages"];

const menuItems = [
  { id: 1, name: "Butter Chicken", category: "Main Course", price: 350, rating: 4.8, available: true, popular: true },
  { id: 2, name: "Paneer Tikka", category: "Starters", price: 280, rating: 4.6, available: true, popular: true },
  { id: 3, name: "Garlic Naan", category: "Breads", price: 60, rating: 4.5, available: true, popular: false },
  { id: 4, name: "Biryani", category: "Rice", price: 320, rating: 4.9, available: true, popular: true },
  { id: 5, name: "Dal Makhani", category: "Main Course", price: 280, rating: 4.4, available: true, popular: false },
  { id: 6, name: "Gulab Jamun", category: "Desserts", price: 150, rating: 4.7, available: false, popular: true },
  { id: 7, name: "Masala Chai", category: "Beverages", price: 80, rating: 4.3, available: true, popular: false },
  { id: 8, name: "Tandoori Roti", category: "Breads", price: 40, rating: 4.2, available: true, popular: false },
  { id: 9, name: "Chicken Tikka", category: "Starters", price: 320, rating: 4.7, available: true, popular: true },
  { id: 10, name: "Mango Lassi", category: "Beverages", price: 120, rating: 4.6, available: true, popular: false },
  { id: 11, name: "Jeera Rice", category: "Rice", price: 180, rating: 4.1, available: true, popular: false },
  { id: 12, name: "Rasmalai", category: "Desserts", price: 180, rating: 4.8, available: true, popular: true },
];

const MenuManagement = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Menu Management</h1>
            <p className="text-muted-foreground">{menuItems.length} items across {categories.length - 1} categories</p>
          </div>
          <Button className="gradient-warm text-primary-foreground gap-2">
            <Plus className="h-4 w-4" /> Add Item
          </Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search menu items..." className="pl-9" />
        </div>

        <Tabs defaultValue="All">
          <TabsList className="flex-wrap h-auto gap-1">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="text-xs">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {menuItems
                  .filter((item) => cat === "All" || item.category === cat)
                  .map((item) => (
                    <Card key={item.id} className="shadow-card hover:shadow-elevated transition-shadow animate-scale-in">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{item.name}</h3>
                              {item.popular && (
                                <Badge className="gradient-warm text-primary-foreground text-[10px] border-0">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                            <div className="flex items-center gap-1 mt-2">
                              <Star className="h-3 w-3 fill-warning text-warning" />
                              <span className="text-xs font-medium">{item.rating}</span>
                            </div>
                          </div>
                          <p className="text-lg font-bold">₹{item.price}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-3 border-t">
                          <Badge variant={item.available ? "outline" : "secondary"} className={item.available ? "text-success border-success/30" : ""}>
                            {item.available ? "Available" : "Unavailable"}
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MenuManagement;
