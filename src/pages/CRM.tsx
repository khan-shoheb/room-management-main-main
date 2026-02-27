import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Phone, Mail, Star, MoreVertical } from "lucide-react";

const customers = [
  { name: "Rahul Sharma", email: "rahul@email.com", phone: "+91 98765 43210", visits: 32, totalSpent: "₹24,500", lastVisit: "Today", vip: true },
  { name: "Priya Singh", email: "priya@email.com", phone: "+91 87654 32109", visits: 18, totalSpent: "₹12,800", lastVisit: "Yesterday", vip: false },
  { name: "Amit Patel", email: "amit@email.com", phone: "+91 76543 21098", visits: 45, totalSpent: "₹38,200", lastVisit: "2 days ago", vip: true },
  { name: "Neha Gupta", email: "neha@email.com", phone: "+91 65432 10987", visits: 12, totalSpent: "₹8,400", lastVisit: "1 week ago", vip: false },
  { name: "Vikram Joshi", email: "vikram@email.com", phone: "+91 54321 09876", visits: 28, totalSpent: "₹19,600", lastVisit: "3 days ago", vip: true },
  { name: "Sneha Reddy", email: "sneha@email.com", phone: "+91 43210 98765", visits: 8, totalSpent: "₹5,200", lastVisit: "2 weeks ago", vip: false },
];

const CRM = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Customer Management</h1>
            <p className="text-muted-foreground">{customers.length} registered customers</p>
          </div>
          <Button className="gradient-warm text-primary-foreground gap-2">
            <Plus className="h-4 w-4" /> Add Customer
          </Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {customers.map((customer) => (
            <Card key={customer.name} className="shadow-card hover:shadow-elevated transition-shadow animate-scale-in">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-warm flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {customer.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{customer.name}</h3>
                        {customer.vip && (
                          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">Last visit: {customer.lastVisit}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" />
                    <span>{customer.phone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t flex justify-between">
                  <div className="text-center">
                    <p className="text-lg font-bold">{customer.visits}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Visits</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">{customer.totalSpent}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Spent</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">₹{Math.round(parseInt(customer.totalSpent.replace(/[₹,]/g, "")) / customer.visits)}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Avg Order</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CRM;
