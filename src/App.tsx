import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import NotFound from "./pages/NotFound";
import Water from "./pages/Water";
import Electricity from "./pages/Electricity";
import HVAC from "./pages/HVAC";
import Firefighting from "./pages/Firefighting";
import Contractor from "./pages/Contractor";
import STP from "./pages/STP";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/water" replace />} />
            <Route path="/water" element={<Water />} />
            <Route path="/electricity" element={<Electricity />} />
            <Route path="/hvac" element={<HVAC />} />
            <Route path="/firefighting" element={<Firefighting />} />
            <Route path="/contractor" element={<Contractor />} />
            <Route path="/stp" element={<STP />} />
          </Route>
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
