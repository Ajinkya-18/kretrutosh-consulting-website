import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Target, TrendingUp, Users, BarChart, Lightbulb } from "lucide-react";

interface Assessment {
  id: string;
  title: string;
  description: string;
  icon: any;
  link: string;
}

const Assessments = () => {
  const assessments: Assessment[] = [
    {
      id: "1",
      title: "Business Readiness Assessment",
      description: "Evaluate your organization's preparedness for growth and transformation",
      icon: Target,
      link: "#",
    },
    {
      id: "2",
      title: "Digital Maturity Score",
      description: "Measure your digital capabilities and identify improvement areas",
      icon: TrendingUp,
      link: "#",
    },
    {
      id: "3",
      title: "Team Effectiveness Survey",
      description: "Assess collaboration, communication, and productivity levels",
      icon: Users,
      link: "#",
    },
    {
      id: "4",
      title: "Strategy Alignment Check",
      description: "Ensure your initiatives align with organizational goals",
      icon: ClipboardCheck,
      link: "#",
    },
    {
      id: "5",
      title: "Innovation Capability Index",
      description: "Evaluate your organization's capacity for innovation and creativity",
      icon: Lightbulb,
      link: "#",
    },
    {
      id: "6",
      title: "Performance Analytics Review",
      description: "Comprehensive analysis of your key performance indicators",
      icon: BarChart,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Assessments
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take our complimentary assessments to gain valuable insights into your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {assessments.map((assessment, index) => {
                const Icon = assessment.icon;
                return (
                  <Card 
                    key={assessment.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {assessment.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {assessment.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="premium" 
                        className="w-full"
                        onClick={() => window.open(assessment.link, '_blank')}
                      >
                        Take Assessment
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessments;
