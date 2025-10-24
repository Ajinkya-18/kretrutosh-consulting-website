import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, Zap, BrainCircuit } from "lucide-react";

// This is the new standalone page for all services
const Services = () => {
  const navigate = useNavigate();

  const services = [
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
  ];

  const specialService = {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Culture Transformation",
      description: "Embed customer-centricity and enable high-performing teams",
      path: "/services/culture-transformation",
  }

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

            {/* Main 4 Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.path}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-border/60 bg-gradient-to-br from-card via-card to-muted/20 hover:border-accent/40 overflow-hidden relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(service.path)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-transparent transition-all duration-500" />
                  <CardHeader className="relative">
                    <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <Button variant="ghost" className="group-hover:text-accent p-0 font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Culture Transformation Service (as a separate highlight) */}
            <div className="text-center mt-24 max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 animate-fade-in">
                A Foundation for Success
               </h2>
               <Card
                  key={specialService.path}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-border/60 bg-gradient-to-br from-card via-card to-muted/20 hover:border-accent/40 overflow-hidden relative text-left"
                  onClick={() => navigate(specialService.path)}
                >
                  <CardHeader className="relative flex-row items-center gap-6">
                    <div className="mb-0 text-accent group-hover:scale-110 transition-transform duration-500">{specialService.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">{specialService.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-1">{specialService.description}</CardDescription>
                    </div>
                     <Button variant="ghost" className="group-hover:text-accent p-0 font-semibold hidden md:inline-flex">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardHeader>
                </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;