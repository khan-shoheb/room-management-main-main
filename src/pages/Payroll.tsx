import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const staffList = [
  { id: 1, name: "Amit Kumar", role: "Waiter", present: true, leaves: 2, salary: 15000 },
  { id: 2, name: "Priya Singh", role: "Chef", present: false, leaves: 1, salary: 22000 },
  { id: 3, name: "Rahul Verma", role: "Manager", present: true, leaves: 0, salary: 30000 },
];

export default function Payroll() {
  const [staff, setStaff] = useState(staffList);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Payroll</h1>
            <p className="text-muted-foreground">Manage staff attendance, leaves & payroll</p>
          </div>
          <Button className="gradient-warm text-primary-foreground">Add Staff</Button>
        </div>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Staff List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Role</th>
                    <th className="text-center py-2">Present</th>
                    <th className="text-center py-2">Leaves</th>
                    <th className="text-right py-2">Salary (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((s) => (
                    <tr key={s.id} className="border-b last:border-0">
                      <td className="py-2 font-medium">{s.name}</td>
                      <td className="py-2">{s.role}</td>
                      <td className="py-2 text-center">
                        {s.present ? (
                          <span className="text-green-600 font-semibold">Yes</span>
                        ) : (
                          <span className="text-red-500 font-semibold">No</span>
                        )}
                      </td>
                      <td className="py-2 text-center">{s.leaves}</td>
                      <td className="py-2 text-right">{s.salary.toLocaleString()}</td>
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
}
