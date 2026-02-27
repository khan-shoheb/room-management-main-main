import React, { forwardRef } from "react";

interface InvoiceProps {
  table: number;
  items: { name: string; qty: number; price: number }[];
  subtotal: number;
  tax: number;
  total: number;
}

// Forward ref for print support
export const Invoice = forwardRef<HTMLDivElement, InvoiceProps>(
  ({ table, items, subtotal, tax, total }, ref) => (
    <div ref={ref} className="p-6 bg-white w-[350px] text-black rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-center">Restaurant Invoice</h2>
      <div className="mb-2 text-sm">Table: <span className="font-semibold">{table}</span></div>
      <table className="w-full text-xs mb-2">
        <thead>
          <tr className="border-b">
            <th className="text-left py-1">Item</th>
            <th className="text-center py-1">Qty</th>
            <th className="text-right py-1">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="py-1">{item.name}</td>
              <td className="text-center py-1">{item.qty}</td>
              <td className="text-right py-1">₹{item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-xs mb-1">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-xs mb-1">
        <span>GST (5%)</span>
        <span>₹{tax.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-base font-bold border-t pt-2 mt-2">
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>
      <div className="text-center text-xs mt-4 text-muted-foreground">Thank you for dining with us!</div>
    </div>
  )
);

Invoice.displayName = "Invoice";
