import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, QrCode } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import qrBook from "@/assets/qr-book.jpg";

const Book = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/90 via-primary/80 to-background/60">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Beyond Customer Satisfaction
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Crafting Exceptional Customer Experiences in the Age of "Kretru"
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Book Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-xl group-hover:opacity-50 transition-opacity rounded-lg" />
                    <img 
                      src={bookCover} 
                      alt="Beyond Customer Satisfaction Book Cover" 
                      className="relative rounded-lg shadow-2xl w-full max-w-md"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">About the Book</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Dive into the world of customer experience transformation with insights from over 20 years of global consulting expertise. This book explores innovative frameworks and strategies for creating exceptional customer experiences in the modern era.
                    </p>
                    <div className="inline-block px-4 py-2 bg-accent/20 rounded-lg border border-accent/30 mb-6">
                      <p className="text-2xl font-bold text-accent">Now FREE on Amazon</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Get Your Copy</h3>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto"
                      asChild
                    >
                      <a 
                        href="https://www.amazon.in/dp/B0D17W5B1B" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Download from Amazon
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>

                  {/* QR Code Section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={qrBook} 
                          alt="QR Code to Amazon Book Page" 
                          className="w-32 h-32 rounded-lg border border-border"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <QrCode className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold">Scan to Download</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Scan this QR code with your mobile device to quickly access the book on Amazon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-16 p-8 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-center">About the Author</h3>
                <p className="text-lg text-center max-w-3xl mx-auto">
                  <span className="font-semibold">Ashutosh Karandikar</span> brings over 20 years of global consulting and business transformation experience, having unlocked $80M+ in revenue and delivered 2-5x sales velocity improvements for leading brands worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
