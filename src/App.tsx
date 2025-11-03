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
import AuctionHouse from "./pages/AuctionHouse";
import SeasonPass from "./pages/SeasonPass";
import Events from "./pages/Events";
import Wiki from "./pages/Wiki";
import AntiCheat from "./pages/AntiCheat";
import LiveMap from "./pages/LiveMap";
import Streams from "./pages/Streams";
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
          <Route path="/auction" element={<AuctionHouse />} />
          <Route path="/season-pass" element={<SeasonPass />} />
          <Route path="/events" element={<Events />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/anti-cheat" element={<AntiCheat />} />
          <Route path="/live-map" element={<LiveMap />} />
          <Route path="/streams" element={<Streams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
