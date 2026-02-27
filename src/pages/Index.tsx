import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IndianRupee,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const revenueData = [
  { day: "Mon", revenue: 12400 },
  { day: "Tue", revenue: 18200 },
  { day: "Wed", revenue: 15800 },
  { day: "Thu", revenue: 22100 },
  { day: "Fri", revenue: 28500 },
  { day: "Sat", revenue: 35200 },
  { day: "Sun", revenue: 31000 },
];

const ordersData = [
  { time: "9AM", orders: 12 },
  { time: "11AM", orders: 28 },
  { time: "1PM", orders: 45 },
  { time: "3PM", orders: 22 },
  { time: "5PM", orders: 18 },
  { time: "7PM", orders: 38 },
  { time: "9PM", orders: 42 },
];

const recentOrders = [
  { id: "#1024", customer: "Rahul Sharma", items: 3, total: "₹850", status: "Completed" },
  { id: "#1023", customer: "Priya Singh", items: 2, total: "₹520", status: "Preparing" },
  { id: "#1022", customer: "Amit Patel", items: 5, total: "₹1,450", status: "Delivered" },
  { id: "#1021", customer: "Neha Gupta", items: 1, total: "₹280", status: "Pending" },
  { id: "#1020", customer: "Vikram Joshi", items: 4, total: "₹1,100", status: "Completed" },
];

const statusColor: Record<string, string> = {
  Completed: "bg-success/10 text-success border-success/20",
  Preparing: "bg-warning/10 text-warning border-warning/20",
  Delivered: "bg-info/10 text-info border-info/20",
  Pending: "bg-muted text-muted-foreground",
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your restaurant overview.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Today's Revenue"
            value="₹35,200"
            change="+12.5% from yesterday"
            changeType="positive"
            icon={<IndianRupee className="h-5 w-5" />}
          />
          <StatCard
            title="Total Orders"
            value="128"
            change="+8 from yesterday"
            changeType="positive"
            icon={<ShoppingCart className="h-5 w-5" />}
          />
          <StatCard
            title="Active Customers"
            value="342"
            change="+24 this week"
            changeType="positive"
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard
            title="Avg Order Value"
            value="₹275"
            change="-2.1% from last week"
            changeType="negative"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-base">Weekly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-base">Orders Today</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={ordersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2.5}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Recent Orders</CardTitle>
            <a href="/orders" className="text-sm text-primary flex items-center gap-1 hover:underline">
              View all <ArrowUpRight className="h-3 w-3" />
            </a>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-medium text-muted-foreground">Order</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Items</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Total</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 font-medium">{order.id}</td>
                      <td className="py-3">{order.customer}</td>
                      <td className="py-3">{order.items}</td>
                      <td className="py-3 font-medium">{order.total}</td>
                      <td className="py-3">
                        <Badge variant="outline" className={statusColor[order.status]}>
                          {order.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
