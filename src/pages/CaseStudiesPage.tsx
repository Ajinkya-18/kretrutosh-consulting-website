import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Quote, Star } from "lucide-react";
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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "Digital Transformation Success",
      client: "Tech Corp Inc.",
      industry: "Technology",
      challenge: "Legacy systems preventing scalability and innovation",
      solution: "Implemented cloud-based infrastructure and agile methodologies",
      results: ["40% cost reduction", "3x faster deployment", "95% customer satisfaction"],
      tags: ["Digital Transformation", "Cloud Migration", "Agile"],
    },
    {
      id: "2",
      title: "Customer Experience Overhaul",
      client: "Retail Solutions Ltd.",
      industry: "Retail",
      challenge: "Low customer engagement and declining retention rates",
      solution: "Redesigned customer journey with data-driven personalization",
      results: ["60% increase in engagement", "45% higher retention", "2x conversion rate"],
      tags: ["CX Design", "Personalization", "Analytics"],
    },
    {
      id: "3",
      title: "Operational Excellence Initiative",
      client: "Manufacturing Pro",
      industry: "Manufacturing",
      challenge: "Inefficient processes causing delays and quality issues",
      solution: "Process optimization and automation implementation",
      results: ["50% faster production", "30% quality improvement", "25% cost savings"],
      tags: ["Process Optimization", "Automation", "Quality"],
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovations Inc.",
      content: "Working with this team transformed our business. Their insights and strategic approach delivered results beyond our expectations. Highly recommended!",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions Ltd.",
      content: "The assessments provided invaluable clarity on our challenges. The implementation was smooth, and we saw measurable improvements within weeks.",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "VP of Marketing",
      company: "Creative Brands Co.",
      content: "Exceptional service and expertise. They understood our unique needs and delivered tailored solutions that made a real difference.",
      rating: 5,
    },
    {
      id: "4",
      name: "David Thompson",
      role: "Founder",
      company: "StartUp Ventures",
      content: "The resources and guidance provided helped us scale rapidly while maintaining quality. Their approach is both practical and visionary.",
      rating: 5,
    },
    {
      id: "5",
      name: "Lisa Anderson",
      role: "Chief Strategy Officer",
      company: "Enterprise Systems",
      content: "Professional, knowledgeable, and results-driven. They've become a trusted partner in our growth journey.",
      rating: 5,
    },
    {
      id: "6",
      name: "Robert Kim",
      role: "Managing Director",
      company: "Innovation Group",
      content: "The case studies and insights shared were eye-opening. We've implemented many of their recommendations with great success.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Case Studies Section */}
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
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients say about their experience working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="pt-6 relative">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
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

export default CaseStudiesPage;
