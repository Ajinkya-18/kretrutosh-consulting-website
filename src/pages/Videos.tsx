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
      title: "Introduction to Our Services",
      description: "Learn about how we help businesses achieve their goals",
      youtubeId: "dQw4w9WgXcQ",
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
    {
      id: "4",
      title: "Digital Transformation Guide",
      description: "Step-by-step approach to modernizing your business",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "5",
      title: "Leadership Best Practices",
      description: "Key strategies for effective business leadership",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "6",
      title: "Innovation Workshop Highlights",
      description: "Highlights from our recent innovation workshop",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Video Library
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore our collection of insights, tutorials, and success stories
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://youtube.com/@yourchannel', '_blank')}
              >
                <Youtube className="mr-2 h-5 w-5" />
                Visit Our YouTube Channel
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
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
