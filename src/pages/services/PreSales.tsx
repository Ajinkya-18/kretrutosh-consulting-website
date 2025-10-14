import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PreSales = () => {
  const navigate = useNavigate();

  const offerings = [
    "GTM & Positioning Strategy",
    "Persona–Product–Pitch Alignment",
    "Peak Purpose Workshop (Vision, Mission, Goals, OKRs)",
    "Market & Customer Discovery (Secondary Research and Opportunity Mapping)",
    "Fractional Leadership (Head of GTM, Chief Strategy Officer, etc.)",
  ];

  const outcomes = [
    { metric: "+15–25%", description: "Marketing/BD ROI" },
    { metric: "+25%", description: "Decision Efficiency" },
    { metric: "+20-25%", description: "GTM Velocity (Pitch to close)" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Pre Sales
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                Align brand purpose, positioning, and GTM readiness
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {outcomes.map((outcome, index) => (
                  <Card key={index} className="border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-accent text-3xl">{outcome.metric}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{outcome.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
              <div className="space-y-4 mb-12">
                {offerings.map((offering, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-lg">{offering}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/#contact")}
                  className="bg-accent hover:bg-accent/90"
                >
                  Get Started with Pre Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PreSales;
