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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-background">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            GTM Velocity Transformation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Maximize customer retention, drive expansion, and win referrals — by optimizing sales, customer success, digital platforms, and team culture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="text-center px-6 py-3 bg-accent/20 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary-foreground">2-5x</p>
              <p className="text-sm text-primary-foreground/80">Sales Velocity</p>
            </div>
            <div className="text-center px-6 py-3 bg-accent/20 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary-foreground">+12-25%</p>
              <p className="text-sm text-primary-foreground/80">Retention</p>
            </div>
            <div className="text-center px-6 py-3 bg-accent/20 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary-foreground">+20-40%</p>
              <p className="text-sm text-primary-foreground/80">Revenue Expansion</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
