import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // <-- 1. Import motion

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
  const caseStudies: CaseStudy[] = [
     // ... your 5 case studies ...
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section (Already uses light theme - correct) */}
        <section className="py-24 pt-48 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world success stories demonstrating our impact
              </p>
            </div>

            {/* --- 2. Increased padding to py-24 --- */}
            <div className="space-y-8 py-24">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card 
                    className="group border-border/50 overflow-hidden 
                               bg-card transition-all duration-300
                               hover:shadow-elegant hover:-translate-y-1" // <-- 3. Polished styles
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
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;