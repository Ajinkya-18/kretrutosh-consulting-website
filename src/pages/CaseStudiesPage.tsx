import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

const CaseStudiesPage = () => {
  // Data extracted from the provided PDF
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "Customer Experience Transformation",
      client: "InLife Insurance",
      industry: "Insurance",
      challenge: "Managed high drop-off rates (61.8%) on its digital policy application journey, signaling significant revenue leakage and customer disengagement.",
      solution: "Adopted a phased 'Crawl-Walk-Run' approach, using CX metric baselining to prioritize drop-off reduction and overhauling the website UX with a prominent quote generator.",
      results: [
        "Drop-off rate reduced from 61.8% to 57.6%",
        "Quote submitted to requested ratio improved from 63% to 68%",
        "Incremental annualized policy revenue of Peso 2.67 million",
      ],
      tags: ["Customer Experience", "Digital Transformation", "Insurance"],
    },
    {
      id: "2",
      title: "Customer Experience Transformation",
      client: "Value Retail",
      industry: "Luxury Retail",
      challenge: "Sought to evolve the customer journey to better connect guest experience, brand partner experience, and digital engagement across all touchpoints.",
      solution: "Launched a dedicated customer community using the Alida platform, integrating behavioral and attitudinal data to create actionable insights for retail operations.",
      results: [
        "+14% improvement in visit-to-conversion ratio",
        "+11% increase in average spend per visitor",
        "Delivered quarterly insights to brand and operations teams",
      ],
      tags: ["Customer Experience", "Retail", "Data & Analytics"],
    },
    {
      id: "3",
      title: "Customer Success Transformation",
      client: "Altudo",
      industry: "Digital Consultancy & SaaS",
      challenge: "The Customer Success (CS) function operated in silos, lacking standardized engagement frameworks and data-backed visibility into renewals and expansion.",
      solution: "Conducted a CS Maturity Assessment and introduced the VICTORY™ Framework to drive value realization, expansion, and referrals from existing accounts.",
      results: [
        "+16% uplift in license renewals",
        "+22% increase in cross-sell and upsell conversions",
        "Reduced churn by 20% through predictive health scoring",
      ],
      tags: ["Customer Success", "SaaS", "GTM Strategy"],
    },
    {
      id: "4",
      title: "Culture Transformation",
      client: "Symega Foods",
      industry: "Food Manufacturing",
      challenge: "As the company expanded, the need to discover, articulate, and embed a shared culture became essential for scalable growth.",
      solution: "Facilitated inclusive workshops for value discovery, created behavior blueprints, and integrated culture into recruitment and onboarding frameworks.",
      results: [
        "23% improvement in product innovation cycle time",
        "19% boost in employee engagement (+6pp in eNPS)",
        "13% reduction in internal conflicts",
      ],
      tags: ["Culture Transformation", "Employee Engagement", "Manufacturing"],
    },
    {
      id: "5",
      title: "Culture Transformation",
      client: "Maveric Systems",
      industry: "IT Services / Banking Tech",
      challenge: "Rapid hiring fragmented the company culture into function-specific microcultures, diluting shared identity and impacting collaboration.",
      solution: "Conducted a 7-dimension culture maturity assessment, aligned leadership around 4 core values, and realigned hiring and onboarding processes.",
      results: [
        "17% reduction in early attrition (0-6 months)",
        "18% increase in cross-functional collaboration",
        "27% improvement in ownership & accountability",
      ],
      tags: ["Culture Transformation", "IT Services", "Leadership"],
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
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world success stories demonstrating our impact
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={study.id}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          <span className="font-semibold text-foreground">{study.client}</span> • {study.industry}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </CardContent>
                    </div>
                    <div className="bg-muted/50 p-6 flex flex-col justify-center">
                      <h4 className="font-semibold text-foreground mb-4 text-lg">Key Results</h4>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                      {/* <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Read Full Story
                      </Button> */}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- Testimonials Section has been removed as per the PDF content --- */}

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;