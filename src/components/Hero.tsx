import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // --- FIX #6: Background Image Added ---
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Grid overlay (kept for texture) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-accent">
            KretruTosh Consulting
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto font-light">
            Maximize customer retention, drive expansion, and win referrals — by optimizing sales, customer success, digital platforms, and team culture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 pb-8">
            <div className="group text-center px-8 py-5 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl backdrop-blur-md border border-accent/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-accent/50">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors">2-5x</p>
              <p className="text-sm md:text-base text-primary-foreground/80 font-medium">Sales Velocity</p>
            </div>
            <div className="group text-center px-8 py-5 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl backdrop-blur-md border border-accent/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-accent/50">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors">+12-25%</p>
              <p className="text-sm md:text-base text-primary-foreground/80 font-medium">Retention</p>
            </div>
            <div className="group text-center px-8 py-5 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl backdrop-blur-md border border-accent/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-accent/50">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors">+20-40%</p>
              <p className="text-sm md:text-base text-primary-foreground/80 font-medium">Revenue Expansion</p>
            </div>
          </div>

          {/* --- FIX #2: Redundant Button Div Removed --- */}
          {/* The div containing "Get Started" and "Learn More" was here */}

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;