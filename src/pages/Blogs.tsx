import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // <-- 1. IMPORTED MOTION

// 1. Define the Blog interface to match your table
interface Blog {
  id: number;
  created_at: string;
  title: string;
  description: string;
  link: string;
  image_url: string | null;
  publish_date: string | null;
}

const Blogs = () => {
  // 2. Set up state to hold your blog posts
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Use an effect to fetch the data on page load
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      // We order by 'publish_date' to show the newest posts first
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('publish_date', { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
      } else if (data) {
        setBlogs(data);
      }
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  // Helper to format the date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section (Unchanged) */}
        <section className="py-24 pt-48 text-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blogs & Articles
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
                Insights, strategies, and expert opinions on business transformation.
              </p>
              <Button 
                size="lg"
                variant="premium"
                className="animate-scale-in"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/ashutosh-karandikar-ccxp/recent-activity/articles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Visit LinkedIn Library
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* --- 4. PADDING UPDATED TO PY-24 --- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                // Optional: Show loading skeletons
                <p className="text-muted-foreground">Loading posts...</p>
              ) : (
                // 5. Map over the 'blogs' state and render a Card for each
                blogs.map((blog, index) => (
                  // --- 6. WRAPPED IN MOTION.DIV ---
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full" // Ensures motion div respects grid height
                  >
                    <a 
                      href={blog.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group h-full"
                    >
                      <Card
                        // --- 7. STYLES UPDATED ---
                        className="h-full flex flex-col border-border/50 overflow-hidden 
                                   bg-card transition-all duration-300
                                   hover:shadow-elegant hover:-translate-y-1"
                        // Removed: animate-fade-in, hover:shadow-xl, hover:-translate-y-2, style prop
                      >
                        {/* Blog Post Image */}
                        {blog.image_url && (
                          <div className="aspect-video overflow-hidden bg-muted">
                            <img
                              src={blog.image_url}
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="flex flex-col justify-between flex-grow">
                          <CardHeader>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {blog.title}
                            </CardTitle>
                            <CardDescription className="text-base pt-2">
                              {blog.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary">
                              Read Article
                              <ArrowRight className="inline-block ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {blog.publish_date && (
                              <Badge variant="secondary" className="font-normal">
                                {formatDate(blog.publish_date)}
                              </Badge>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    </a>
                  </motion.div>
                ))
              )}
            </div>
            {blogs.length === 0 && !isLoading && (
              <p className="text-center text-muted-foreground text-lg">
                No blog posts found. Check back soon!
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;