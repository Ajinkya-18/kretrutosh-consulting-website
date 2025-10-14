import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Services Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions to transform your business velocity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.path}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(service.path)}
                >
                  <CardHeader>
                    <div className="mb-4 text-accent">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group-hover:text-accent p-0">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => navigate("/services/culture-transformation")}
                className="bg-accent hover:bg-accent/90"
              >
                Explore Culture Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
