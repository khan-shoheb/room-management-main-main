import {
  LayoutDashboard,
  Receipt,
  Users,
  BarChart3,
  UtensilsCrossed,
  Package,
  ShoppingCart,
  ChefHat,
  BookOpen,
  UserCog // <-- Add this import
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { SupportStatCard } from "@/components/StatCard";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Billing", url: "/billing", icon: Receipt },
  { title: "Payroll", url: "/payroll", icon: Users },
  { title: "Tasks", url: "/tasks", icon: BarChart3 },
  { title: "Menu Management", url: "/menu", icon: UtensilsCrossed },
  { title: "Orders", url: "/orders", icon: ShoppingCart },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "CRM", url: "/crm", icon: Users },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Recipe Management", url: "/recipe-management", icon: BookOpen },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="gradient-warm rounded-lg p-2">
            <ChefHat className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-base font-bold text-sidebar-primary-foreground">RestroHub</h1>
              <p className="text-xs text-sidebar-foreground/60">Management System</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* Super Admin Dashboard link for admin only */}
              {userRole === "admin" && (
                <SidebarMenuItem key="SuperAdminDashboard">
                  <SidebarMenuButton asChild isActive={location.pathname === "/super-admin-dashboard"}>
                    <NavLink
                      to="/super-admin-dashboard"
                      end
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <UserCog className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Super Admin Dashboard</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {!collapsed && (
        <div className="mt-auto mb-4 flex justify-center">
          <div className="p-0 w-[90%] flex items-center gap-3">
            <img src="/support247.svg" alt="24/7 Support Icon" width={24} height={24} />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Support</p>
              <p className="text-sm font-semibold">24/7 multiple language support</p>
              <p className="text-xs text-muted-foreground mt-1">Call us anytime for help!</p>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
