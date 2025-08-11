import { NavLink } from "react-router-dom";
import { Droplets, Zap, Wind, Shield, HardHat, Recycle } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 md:hidden">
      <ul className="grid grid-cols-6">
        {[
          { to: "/water", icon: Droplets, label: "Water" },
          { to: "/electricity", icon: Zap, label: "Power" },
          { to: "/hvac", icon: Wind, label: "HVAC" },
          { to: "/firefighting", icon: Shield, label: "Fire" },
          { to: "/contractor", icon: HardHat, label: "Work" },
          { to: "/stp", icon: Recycle, label: "STP" },
        ].map((item) => (
          <li key={item.to} className="flex">
            <NavLink
              to={item.to}
              end
              className={({ isActive }) =>
                `flex-1 py-2 flex flex-col items-center justify-center text-xs ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="mt-1">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
