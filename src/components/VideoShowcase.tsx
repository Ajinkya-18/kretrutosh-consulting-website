import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

const VideoShowcase = () => {
  const videos: Video[] = [
    {
      id: "1",
      title: "Introduction to Our Services",
      description: "Learn about how we help businesses achieve their goals",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    },
    {
      id: "2",
      title: "Client Success Stories",
      description: "Real results from organizations we've worked with",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "3",
      title: "Expert Insights & Tips",
      description: "Practical advice for business transformation",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Video Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of insights, tutorials, and success stories
          </p>
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
