import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, Zap, BrainCircuit } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  // --- 1. Combine all 5 services into one array ---
  const allServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Pre Sales",
      description: "Align brand purpose, positioning, and GTM readiness",
      path: "/services/pre-sales",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Sales",
      description: "Accelerate acquisition, conversion, and predictable revenue",
      path: "/services/sales",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Post Sales",
      description: "Maximize customer retention, expansion, and advocacy",
      path: "/services/post-sales",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Enablement",
      description: "Empower GTM Velocity through unified data and platforms",
      path: "/services/digital-enablement",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Culture Transformation",
      description: "Embed customer-centricity and enable high-performing teams",
      path: "/services/culture-transformation",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Services Overview */}
        <section className="py-24 pt-48 bg-gradient-to-b from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                Comprehensive solutions to transform your business velocity
              </p>
            </div>

            {/* --- 2. Remove old grid and special service card, replace with this new layout --- */}
            <div className="max-w-4xl mx-auto space-y-8">
              {allServices.map((service, index) => (
                <Card
                  key={service.path}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-border/60 bg-gradient-to-br from-card via-card to-muted/20 hover:border-accent/40 overflow-hidden relative text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(service.path)}
                >
                  <CardHeader className="relative flex-row items-center gap-6 p-6"> {/* Added p-6 for consistent padding */}
                    <div className="mb-0 text-accent group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                     <Button variant="ghost" className="group-hover:text-accent p-0 font-semibold hidden md:inline-flex">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;