import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Whitepaper {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

const Whitepapers = () => {
  const whitepapers: Whitepaper[] = [
    {
      id: "1",
      title: "Navigating The Future Of Banking",
      description: "Understanding the shifting dynamics of banking customer experience and digital transformation.",
      link: "https://maveric-systems.com/the-banking-edge/navigating-the-future-of-banking/",
      image: "https://maveric-systems.com/wp-content/uploads/2024/05/Understanding-the-Shifting-Dynamics-of-Banking-Customer-Experience.jpg"
    },
    {
      id: "2",
      title: "Optimizing Client Retention Digital Marketing Blueprint For Banks",
      description: "Strategies for banks to optimize client retention through targeted digital marketing blueprints.",
      link: "https://maveric-systems.com/the-banking-edge/optimizing-client-retention-digital-marketing-blueprint-for-banks/",
      image: "https://maveric-systems.com/wp-content/uploads/2024/10/Podcast-Episode-featured-Image.png"
    },
    {
      id: "3",
      title: "CX Framework for Wealth Management",
      description: "A comprehensive framework for enhancing customer experience in the wealth management sector.",
      link: "https://maveric-systems.com/the-banking-edge/cx-framework-for-wealth-management/",
      image: "https://maveric-systems.com/wp-content/uploads/2024/02/Podcast-Banner.png"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 pt-48 text-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Whitepapers & Insights
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
                Deep dives into industry trends, transformation frameworks, and success strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="group border-border/50 bg-card h-full flex flex-col overflow-hidden
                               transition-all duration-300
                               hover:shadow-elegant hover:-translate-y-1"
                  >
                    {paper.image && (
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={paper.image} 
                          alt={paper.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <CardHeader>
                      {!paper.image && (
                        <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all mb-4">
                          <FileText className="h-8 w-8" />
                        </div>
                      )}
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {paper.title}
                      </CardTitle>
                      <CardDescription className="text-base line-clamp-3">
                        {paper.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-6">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:border-primary/50 group-hover:text-primary"
                        asChild
                      >
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Read Whitepaper
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Integration Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">More Insights on LinkedIn</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow us for daily updates, quick tips, and discussions on the latest in GTM, CX, and Culture transformation.
            </p>
            <Button 
              size="lg" 
              variant="premium"
              asChild
            >
              <a href="https://www.linkedin.com/in/ashutosh-karandikar-ccxp/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Follow on LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Whitepapers;
