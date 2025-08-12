import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
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

const routeDescriptions: Record<string, string> = {
  "/water": "Water System Analysis dashboard with consumption and losses charts.",
  "/electricity": "Electricity System Analysis with consumption by month and type.",
  "/hvac": "HVAC system tracking and performance analytics.",
  "/firefighting": "Firefighting and alarm status overview.",
  "/contractor": "Contractor tracker work orders and status.",
  "/stp": "STP plant overview and metrics.",
};

export default function AppLayout() {
  const { pathname } = useLocation();
  const title = useMemo(() => routeTitles[pathname] ?? "Water System", [pathname]);

  useEffect(() => {
    const baseTitle = "MBR";
    document.title = `${title} | ${baseTitle}`;
    const desc =
      routeDescriptions[pathname] ??
      "MBR dashboard for Water, Electricity, HVAC, Firefighting, Contractor, and STP management.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.pathname);
  }, [title, pathname]);

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
