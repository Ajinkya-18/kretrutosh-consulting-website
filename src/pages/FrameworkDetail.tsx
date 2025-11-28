import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { frameworks } from "@/data/frameworks";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Megaphone, Ear, BookOpen, BarChart, Scale, HeartHandshake, Thermometer, Trophy, Map, Calculator } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NotFound from "./NotFound";

const iconMap: Record<string, any> = {
  Megaphone, Ear, BookOpen, BarChart, Scale, HeartHandshake, Thermometer, Trophy, Map, Calculator
};

const FrameworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const framework = frameworks.find(f => f.id === id);

  if (!framework) {
    return <NotFound />;
  }

  const Icon = iconMap[framework.icon] || BarChart;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0"
            onClick={() => navigate("/frameworks")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Frameworks
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
                <span className="text-secondary font-medium text-xs tracking-wide uppercase">{framework.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {framework.title}
              </h1>
              <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                {framework.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why This Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                In today's competitive landscape, ad-hoc strategies aren't enough. The {framework.title} provides a structured, repeatable methodology to ensure consistent results. It moves you from guesswork to precision.
              </p>
              <div className="bg-muted/30 p-8 rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold text-primary mb-4">Ideal For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>Scaling Organizations</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>Teams needing alignment</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>Leaders seeking predictability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Measurable Outcomes</h2>
              <div className="grid gap-6">
                {framework.outcomes.map((outcome, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border/50 shadow-sm"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-lg font-medium text-primary">{outcome}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button asChild size="lg" className="w-full md:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                  <Link to="/contact">
                    Implement This Framework
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

export default FrameworkDetail;
