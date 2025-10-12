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

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Digital Transformation",
      excerpt: "Exploring how organizations can leverage technology to stay ahead in an evolving marketplace...",
      mediumUrl: "https://medium.com/@yourhandle/post1", // Replace with actual Medium URLs
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
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives and thought leadership on Medium
          </p>
        </div>

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
  );
};

export default BlogSection;
