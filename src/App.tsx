import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// --- Import your Page Components ---
import Index from "./pages/Index";
import About from "./pages/About";
import Book from "./pages/Book";
import Videos from "./pages/Videos";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

// --- Import the NEW Aggregate Pages ---
import Services from "./pages/Services";
import Assessments from "./pages/Assessments";
import CaseStudiesPage from "./pages/CaseStudiesPage";

// --- Import the OLD Individual Service/Assessment Pages ---
// We keep these imports so the links still work
import PreSales from "./pages/services/PreSales";
import Sales from "./pages/services/Sales";
import PostSales from "./pages/services/PostSales";
import DigitalEnablement from "./pages/services/DigitalEnablement";
import CultureTransformation from "./pages/services/CultureTransformation";
import CXMaturity from "./pages/assessments/CXMaturity";
import CSMaturity from "./pages/assessments/CSMaturity";
import CultureMaturity from "./pages/assessments/CultureMaturity";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* --- Main Pages --- */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* --- NEW Aggregate Page Routes (This is the fix) --- */}
          <Route path="/services" element={<Services />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />

          {/* --- Individual Page Routes (Kept for navigation) --- */}
          <Route path="/services/pre-sales" element={<PreSales />} />
          <Route path="/services/sales" element={<Sales />} />
          <Route path="/services/post-sales" element={<PostSales />} />
          <Route path="/services/digital-enablement" element={<DigitalEnablement />} />
          <Route path="/services/culture-transformation" element={<CultureTransformation />} />
          <Route path="/assessments/cx-maturity" element={<CXMaturity />} />
          <Route path="/assessments/cs-maturity" element={<CSMaturity />} />
          <Route path="/assessments/culture-maturity" element={<CultureMaturity />} />
          
          {/* --- 404 Not Found Page --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;