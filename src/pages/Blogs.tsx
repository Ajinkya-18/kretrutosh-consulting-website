import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  mediumUrl: string;
  date: string;
}

const Blogs = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Digital Transformation",
      excerpt: "Exploring how organizations can leverage technology to stay ahead in an evolving marketplace...",
      mediumUrl: "https://medium.com/@yourhandle/post1",
      date: "March 2025",
    },
    {
      id: "2",
      title: "5 Strategies for Organizational Growth",
      excerpt: "Proven approaches that help businesses scale effectively while maintaining quality...",
      mediumUrl: "https://medium.com/@yourhandle/post2",
      date: "February 2025",
    },
    {
      id: "3",
      title: "Customer-Centric Innovation",
      excerpt: "Learn how putting customers first drives sustainable business success...",
      mediumUrl: "https://medium.com/@yourhandle/post3",
      date: "January 2025",
    },
    {
      id: "4",
      title: "Building High-Performance Teams",
      excerpt: "Key principles for creating collaborative and productive work environments...",
      mediumUrl: "https://medium.com/@yourhandle/post4",
      date: "December 2024",
    },
    {
      id: "5",
      title: "Data-Driven Decision Making",
      excerpt: "How to leverage analytics and insights for better business outcomes...",
      mediumUrl: "https://medium.com/@yourhandle/post5",
      date: "November 2024",
    },
    {
      id: "6",
      title: "Navigating Change Management",
      excerpt: "Essential strategies for leading organizations through transformation...",
      mediumUrl: "https://medium.com/@yourhandle/post6",
      date: "October 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/90 via-primary/80 to-background/60">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
                Latest Insights
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Expert perspectives and thought leadership on Medium
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => window.open(post.mediumUrl, '_blank')}
                    >
                      Read on Medium
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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

export default Blogs;
