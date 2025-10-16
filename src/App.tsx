import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Book from "./pages/Book";
import Videos from "./pages/Videos";
import Blogs from "./pages/Blogs";
import PreSales from "./pages/services/PreSales";
import Sales from "./pages/services/Sales";
import PostSales from "./pages/services/PostSales";
import DigitalEnablement from "./pages/services/DigitalEnablement";
import CultureTransformation from "./pages/services/CultureTransformation";
import CXMaturity from "./pages/assessments/CXMaturity";
import CSMaturity from "./pages/assessments/CSMaturity";
import CultureMaturity from "./pages/assessments/CultureMaturity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services/pre-sales" element={<PreSales />} />
          <Route path="/services/sales" element={<Sales />} />
          <Route path="/services/post-sales" element={<PostSales />} />
          <Route path="/services/digital-enablement" element={<DigitalEnablement />} />
          <Route path="/services/culture-transformation" element={<CultureTransformation />} />
          <Route path="/assessments/cx-maturity" element={<CXMaturity />} />
          <Route path="/assessments/cs-maturity" element={<CSMaturity />} />
          <Route path="/assessments/culture-maturity" element={<CultureMaturity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
