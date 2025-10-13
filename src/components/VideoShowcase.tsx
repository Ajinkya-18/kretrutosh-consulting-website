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
      title: "Frictionless Customer Journeys",
      description: "Breaking down barriers in customer experience",
      youtubeId: "nJiPQu4kwkw", // Placeholder - Replace with actual theXTPodcast video ID
    },
    {
      id: "2",
      title: "Customer Experience Excellence",
      description: "Transformative strategies for exceptional CX",
      youtubeId: "U3s8DG8lODQ", // Placeholder - Replace with actual theXTPodcast video ID
    },
    {
      id: "3",
      title: "Strategic Customer Advantage",
      description: "Transform CX into a competitive edge",
      youtubeId: "5O7dzKNy1AU", // Placeholder - Replace with actual theXTPodcast video ID
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
