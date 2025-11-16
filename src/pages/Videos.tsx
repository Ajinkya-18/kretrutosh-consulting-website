import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion"; // <-- 1. IMPORTED MOTION

interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
}

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  // 2. Use useEffect to fetch data on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      // 3. This is the Supabase query!
      const { data, error } = await supabase
        .from('videos') // The name of your table
        .select('*');   // Get all columns

      if (error) {
        console.error("Error fetching videos:", error);
      } else if (data) {
        console.log("Data from Supabase:", data);
        setVideos(data);
      }
    };

    fetchVideos();
  }, []); // The empty array [] means this runs only once

  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section (Unchanged) */}
        <section className="py-24 pt-48 text-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Video Library
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
                Explore our collection of insights, tutorials, and success stories
              </p>
              <Button 
                size="lg"
                variant="premium"
                className="animate-scale-in"
                asChild
              >
                <a 
                  href="https://www.youtube.com/@theXTPodcast" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Visit Our YouTube Channel
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* --- 4. PADDING UPDATED TO PY-24 --- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                // --- 5. WRAPPED IN MOTION.DIV ---
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    // --- 6. STYLES UPDATED ---
                    className="group border-border/50 bg-card
                               transition-all duration-300
                               hover:shadow-elegant hover:-translate-y-1"
                    // Removed: animate-fade-in, hover:shadow-lg, hover:-translate-y-1 (already subtle), style prop
                  >
                    <CardHeader>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <CardTitle className="text-xl">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
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

export default Videos;