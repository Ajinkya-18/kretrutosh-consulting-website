import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-culture-maturity.jpg";
import { ExternalLink } from "lucide-react";

const CultureMaturity = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">Culture Maturity Assessment</h1>
              <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
                Assess your organizational culture and identify areas for transformation
              </p>
              <div className="bg-white p-8 rounded-lg shadow-elegant inline-block mb-8 animate-scale-in border border-border/50">
                <img src={qrCode} alt="Culture Maturity Assessment QR Code" className="w-64 h-64 mx-auto" />
                <p className="mt-4 text-sm text-muted-foreground">Scan to take the assessment</p>
              </div>
              <div className="animate-fade-in">
                <Button size="lg" variant="premium">
                  Take Assessment Online
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CultureMaturity;
