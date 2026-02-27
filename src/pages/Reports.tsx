import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/StatCard";
import { IndianRupee, TrendingUp, ShoppingCart, Users } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart,
} from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 285000 }, { month: "Feb", revenue: 310000 },
  { month: "Mar", revenue: 295000 }, { month: "Apr", revenue: 340000 },
  { month: "May", revenue: 380000 }, { month: "Jun", revenue: 420000 },
];

const categoryData = [
  { name: "Main Course", value: 42 }, { name: "Starters", value: 22 },
  { name: "Beverages", value: 18 }, { name: "Desserts", value: 12 },
  { name: "Breads", value: 6 },
];

const COLORS = [
  "hsl(25, 95%, 53%)", "hsl(16, 80%, 50%)", "hsl(38, 92%, 50%)",
  "hsl(142, 70%, 45%)", "hsl(210, 80%, 55%)",
];

const dailyOrders = [
  { day: "Mon", orders: 85 }, { day: "Tue", orders: 92 },
  { day: "Wed", orders: 78 }, { day: "Thu", orders: 110 },
  { day: "Fri", orders: 145 }, { day: "Sat", orders: 168 },
  { day: "Sun", orders: 155 },
];

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your restaurant performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Monthly Revenue" value="₹4,20,000" change="+10.5% vs last month" changeType="positive" icon={<IndianRupee className="h-5 w-5" />} />
          <StatCard title="Growth Rate" value="12.8%" change="+2.3% improvement" changeType="positive" icon={<TrendingUp className="h-5 w-5" />} />
          <StatCard title="Monthly Orders" value="833" change="+65 orders" changeType="positive" icon={<ShoppingCart className="h-5 w-5" />} />
          <StatCard title="New Customers" value="48" change="+12 this month" changeType="positive" icon={<Users className="h-5 w-5" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card animate-fade-in">
            <CardHeader><CardTitle className="text-base">Revenue Trend (6 Months)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={monthlyRevenue}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#revenueGrad)" strokeWidth={2.5} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in">
            <CardHeader><CardTitle className="text-base">Sales by Category</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={4} dataKey="value">
                    {categoryData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {categoryData.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-1.5 text-xs">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                    <span className="text-muted-foreground">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card animate-slide-up">
          <CardHeader><CardTitle className="text-base">Daily Orders This Week</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dailyOrders}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
