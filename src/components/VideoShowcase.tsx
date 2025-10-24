import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";


interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
}

const VideoShowcase = () => {
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
        setVideos(data);
      }
    };

    fetchVideos();
  }, []); // The empty array [] means this runs only once

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Video Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore our collection of insights, tutorials, and success stories
          </p>
          <Button 
            variant="hero" 
            size="lg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
