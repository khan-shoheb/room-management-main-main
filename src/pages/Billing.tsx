import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Printer, IndianRupee, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { Invoice } from "@/components/Invoice";

const tables = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  status: i < 3 ? "occupied" : i < 5 ? "reserved" : "available",
  guests: i < 3 ? Math.floor(Math.random() * 4) + 2 : 0,
  bill: i < 3 ? Math.floor(Math.random() * 2000) + 500 : 0,
}));

const billItems = [
  { name: "Butter Chicken", qty: 2, price: 350 },
  { name: "Garlic Naan", qty: 4, price: 60 },
  { name: "Dal Makhani", qty: 1, price: 280 },
  { name: "Jeera Rice", qty: 2, price: 180 },
  { name: "Lassi", qty: 3, price: 120 },
];

const statusStyle: Record<string, string> = {
  occupied: "bg-destructive/10 text-destructive border-destructive/30",
  reserved: "bg-warning/10 text-warning border-warning/30",
  available: "bg-success/10 text-success border-success/30",
};

const Billing = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(1);
  const [showInvoice, setShowInvoice] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const subtotal = billItems.reduce((s, i) => s + i.qty * i.price, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  // Print invoice
  const handlePrint = () => {
    if (invoiceRef.current) {
      const printContents = invoiceRef.current.innerHTML;
      const printWindow = window.open('', '', 'height=600,width=400');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Invoice</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Billing</h1>
            <p className="text-muted-foreground">Manage table bills and payments</p>
          </div>
          <div className="flex gap-2">
            <Button className="gradient-warm text-primary-foreground gap-2">
              <Plus className="h-4 w-4" /> New Bill
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => setShowInvoice(true)}>
              <FileText className="h-4 w-4" /> Invoice
            </Button>
          </div>
        </div>

        {/* Invoice Modal */}
        {showInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-[380px]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setShowInvoice(false)}
                aria-label="Close"
              >
                ×
              </button>
              <div ref={invoiceRef}>
                <Invoice
                  table={selectedTable || 1}
                  items={billItems}
                  subtotal={subtotal}
                  tax={tax}
                  total={total}
                />
              </div>
              <Button className="w-full mt-4" onClick={handlePrint}>
                <Printer className="h-4 w-4" /> Print Invoice
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-base">Table Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => setSelectedTable(table.id)}
                      className={`p-4 rounded-lg border-2 text-center transition-all hover:scale-105 ${
                        selectedTable === table.id
                          ? "border-primary shadow-elevated"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-bold text-lg">T{table.id}</p>
                      <Badge variant="outline" className={`text-[10px] mt-1 ${statusStyle[table.status]}`}>
                        {table.status}
                      </Badge>
                      {table.bill > 0 && (
                        <p className="text-xs mt-1 font-medium">₹{table.bill}</p>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Bill - Table {selectedTable}</CardTitle>
              <Button variant="ghost" size="icon">
                <Printer className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Add item..." className="pl-9" />
              </div>

              <div className="space-y-2">
                {billItems.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">x{item.qty} @ ₹{item.price}</p>
                    </div>
                    <p className="font-medium">₹{item.qty * item.price}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (5%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline">Split Bill</Button>
                <Button className="gradient-warm text-primary-foreground">Pay Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
