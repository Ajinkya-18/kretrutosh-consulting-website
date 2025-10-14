import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CultureTransformation = () => {
  const navigate = useNavigate();

  const outcomes = [
    "Increase in eNPS",
    "Reduced Early Attrition",
    "Enhanced Collaboration",
    "Accelerated Innovation cycle time",
    "Increased proposal response time",
    "Reduced issue resolution time",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Culture Transformation
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                Build customer-centricity and vision-aligned mindset & behaviors into leadership and teams
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sustaining GTM Velocity by aligning people, values, and behaviors — ensuring every team acts with shared purpose and customer focus.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-8">Key Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-lg">{outcome}</p>
                  </div>
                ))}
              </div>

              <Card className="mb-12 border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Success Stories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent">SYMEGA</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 23% improvement in product innovation cycle time</li>
                      <li>• 19% boost in employee engagement (+6pp in eNPS)</li>
                      <li>• 13% reduction in internal conflicts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent">ACCELERATENEXT</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 17% reduction in early attrition (0–6 months)</li>
                      <li>• 18% increase in cross-functional collaboration</li>
                      <li>• 27% improvement in ownership and accountability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/#contact")}
                  className="bg-accent hover:bg-accent/90"
                >
                  Transform Your Culture
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

export default CultureTransformation;
