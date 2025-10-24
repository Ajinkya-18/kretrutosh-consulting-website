import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-primary/90 to-primary/70">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight tracking-tight">
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

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              variant="premium"
              className="text-lg group shadow-2xl hover:shadow-accent/30"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              /*className="text-lg border-2 border-white/40 text-foreground bg-white/95 hover:bg-white hover:text-foreground hover:border-white hover:shadow-xl" */
              className="text-lg border-2 border-white/80 text-foreground bg-white/95 hover:bg-white hover:text-foreground hover:border-white hover:shadow-xl backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
