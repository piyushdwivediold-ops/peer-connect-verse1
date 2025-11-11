import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Teach from "./pages/Teach";
import Leaderboard from "./pages/Leaderboard";
import Lunch from "./pages/Lunch";
import LostFound from "./pages/LostFound";
import SkillExchange from "./pages/SkillExchange";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import FloatingActionButton from "./components/FloatingActionButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/teach" element={<Teach />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/lostfound" element={<LostFound />} />
            <Route path="/skill-exchange" element={<SkillExchange />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <FloatingActionButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
