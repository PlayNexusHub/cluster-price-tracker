import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Store from "./pages/Store";
import Servers from "./pages/Servers";
import PrivateHavens from "./pages/PrivateHavens";
import Leaderboards from "./pages/Leaderboards";
import Rules from "./pages/Rules";
import Support from "./pages/Support";
import Tribes from "./pages/Tribes";
import Tools from "./pages/Tools";
import Gallery from "./pages/Gallery";
import Recruitment from "./pages/Recruitment";
import Bounties from "./pages/Bounties";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<Store />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/havens" element={<PrivateHavens />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tribes" element={<Tribes />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/bounties" element={<Bounties />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
