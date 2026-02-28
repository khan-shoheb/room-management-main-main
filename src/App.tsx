import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Index from "./pages/Index";
import Billing from "./pages/Billing";
import Payroll from "./pages/Payroll";
import Tasks from "./pages/Tasks";
import MenuManagement from "./pages/MenuManagement";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import CRM from "./pages/CRM";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import RecipeManagement from "./pages/RecipeManagement";
import AdminUsers from "./pages/AdminUsers";
import MyProfile from "./pages/MyProfile";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

const queryClient = new QueryClient();

const getRole = () => localStorage.getItem("userRole");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/" element={
            getRole() === "admin" ? <Index /> : <AdminLogin />
          } />
          <Route path="/billing" element={
            ["admin", "manager"].includes(getRole()) ? <Billing /> : <AdminLogin />
          } />
          <Route path="/payroll" element={
            getRole() === "admin" ? <Payroll /> : <AdminLogin />
          } />
          <Route path="/tasks" element={
            getRole() === "admin" ? <Tasks /> : <AdminLogin />
          } />
          <Route path="/menu" element={
            getRole() === "admin" ? <MenuManagement /> : <AdminLogin />
          } />
          <Route path="/orders" element={
            ["admin", "staff"].includes(getRole()) ? <Orders /> : <AdminLogin />
          } />
          <Route path="/inventory" element={
            getRole() === "admin" ? <Inventory /> : <AdminLogin />
          } />
          <Route path="/crm" element={
            getRole() === "admin" ? <CRM /> : <AdminLogin />
          } />
          <Route path="/reports" element={
            ["admin", "manager"].includes(getRole()) ? <Reports /> : <AdminLogin />
          } />
          <Route path="/recipe-management" element={
            getRole() === "admin" ? <RecipeManagement /> : <AdminLogin />
          } />
          <Route path="/admin-users" element={
            getRole() === "admin" ? <AdminUsers /> : <AdminLogin />
          } />
          <Route path="/my-profile" element={
            getRole() ? <MyProfile /> : <AdminLogin />
          } />
          <Route path="/super-admin-dashboard" element={
            getRole() === "admin" ? <SuperAdminDashboard /> : <AdminLogin />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
