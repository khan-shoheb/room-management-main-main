import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Check inventory", status: "Pending", assignedTo: "Amit Kumar" },
  { id: 2, title: "Clean kitchen", status: "In Progress", assignedTo: "Priya Singh" },
  { id: 3, title: "Update menu", status: "Completed", assignedTo: "Rahul Verma" },
];

const statusColor: Record<string, string> = {
  "Pending": "bg-warning/10 text-warning border-warning/20",
  "In Progress": "bg-info/10 text-info border-info/20",
  "Completed": "bg-success/10 text-success border-success/20",
};

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Tasks</h1>
            <p className="text-muted-foreground">Create, automate & track daily tasks</p>
          </div>
          <Button className="gradient-warm text-primary-foreground">Add Task</Button>
        </div>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Task List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Task</th>
                    <th className="text-left py-2">Assigned To</th>
                    <th className="text-center py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b last:border-0">
                      <td className="py-2 font-medium">{task.title}</td>
                      <td className="py-2">{task.assignedTo}</td>
                      <td className="py-2 text-center">
                        <span className={`px-2 py-1 rounded ${statusColor[task.status]}`}>{task.status}</span>
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
}
