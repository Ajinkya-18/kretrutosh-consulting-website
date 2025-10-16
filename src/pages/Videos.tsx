import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

const Videos = () => {
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
    {
      id: "4",
      title: "The Future of Customer Experience",
      description: "Creating incredible customer experiences",
      youtubeId: "MPcMX6tjR2o", // Placeholder - Replace with actual theXTPodcast video ID
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
                Video Library
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Explore our collection of insights, tutorials, and success stories
              </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90"
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
          <p className="text-sm text-primary-foreground/70 mt-4">
            Note: To enable dynamic video loading, provide your YouTube API key
          </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
