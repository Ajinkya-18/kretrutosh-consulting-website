import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const navigate = useNavigate();

  const offerings = [
    "Sales Ops & Funnel Optimization",
    "Sales Playbook Design & Enablement",
    "Value-Selling & Consultative Selling Training",
    "Agile Sales Coaching",
    "Pipeline Governance & Predictability Models",
    "Fractional Sales Leadership (CSO, CRO, etc.)",
  ];

  const outcomes = [
    { metric: "+20–30%", description: "Conversion" },
    { metric: "2-5x", description: "Sales Velocity" },
    { metric: "+15-32%", description: "Forecast Accuracy" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Sales
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                Accelerate acquisition, conversion, and predictable revenue growth
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
                  Get Started with Sales
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

export default Sales;
