import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Server, ShoppingBag, ShoppingCart, Shield, Landmark, Factory, Stethoscope, GraduationCap } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NotFound from "./NotFound";

const iconMap: Record<string, any> = {
  Server, ShoppingBag, ShoppingCart, Shield, Landmark, Factory, Stethoscope, GraduationCap
};

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const industry = industries.find(i => i.id === id);

  if (!industry) {
    return <NotFound />;
  }

  const Icon = iconMap[industry.icon] || Server;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Icon className="h-16 w-16 text-secondary" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-4">
                <span className="text-secondary font-medium text-xs tracking-wide uppercase">{industry.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {industry.title}
              </h1>
              <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                {industry.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Challenges & Approach */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Industry Challenges</h2>
                <div className="grid gap-4">
                  {industry.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="h-2 w-2 mt-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-muted-foreground font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Tailored Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed p-6 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
                  {industry.approach}
                </p>
              </div>
            </div>

            {/* Right Column: Outcomes & CTA */}
            <div>
              <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl mb-12 relative overflow-hidden border border-border/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-2xl font-bold mb-6 relative z-10">Impact Delivered</h2>
                <div className="space-y-6 relative z-10">
                  {industry.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                      <span className="text-lg font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-primary mb-4">Ready to transform your {industry.title} business?</h3>
                <Button asChild size="lg" className="w-full md:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
