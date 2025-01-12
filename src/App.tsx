import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Database from "./pages/services/Database";
import Support from "./pages/services/Support";
import Admin from "./pages/services/Admin";
import Web from "./pages/services/Web";
import Office from "./pages/services/Office";
import AI from "./pages/services/AI";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/database" element={<Database />} />
                <Route path="/services/support" element={<Support />} />
                <Route path="/services/admin" element={<Admin />} />
                <Route path="/services/web" element={<Web />} />
                <Route path="/services/office" element={<Office />} />
                <Route path="/services/ai" element={<AI />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;