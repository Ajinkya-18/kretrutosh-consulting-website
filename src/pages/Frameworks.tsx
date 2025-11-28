import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { frameworks } from "@/data/frameworks";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Ear, BookOpen, BarChart, Scale, HeartHandshake, Thermometer, Trophy, Map, Calculator } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Megaphone, Ear, BookOpen, BarChart, Scale, HeartHandshake, Thermometer, Trophy, Map, Calculator
};

const Frameworks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-6">
              <span className="text-secondary font-medium text-sm tracking-wide uppercase">Proprietary Toolkit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Signature <span className="text-secondary">Frameworks</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              We don't just consult; we equip you with battle-tested methodologies to drive predictable, scalable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frameworks.map((fw, index) => {
              const Icon = iconMap[fw.icon] || BarChart;
              return (
                <motion.div
                  key={fw.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg hover:border-secondary/50 transition-all group flex flex-col h-full cursor-pointer"
                  onClick={() => navigate(`/frameworks/${fw.id}`)}
                >
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">{fw.title}</h3>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{fw.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {fw.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <span className="text-sm font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Frameworks;
