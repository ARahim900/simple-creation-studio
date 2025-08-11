import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useMemo } from "react";
import AppSidebar from "@/components/AppSidebar";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";

const routeTitles: Record<string, string> = {
  "/water": "Water System",
  "/electricity": "Electricity System",
  "/hvac": "HVAC System",
  "/firefighting": "Firefighting & Alarm",
  "/contractor": "Contractor Tracker",
  "/stp": "STP Plant",
};

export default function AppLayout() {
  const { pathname } = useLocation();
  const title = useMemo(() => routeTitles[pathname] ?? "Water System", [pathname]);

  return (
    <SidebarProvider>
      <header className="h-12 flex items-center border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
        <SidebarTrigger className="ml-2" />
        <h1 className="ml-3 text-sm font-medium text-foreground">{title}</h1>
      </header>

      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <MobileBottomNav />
    </SidebarProvider>
  );
}
