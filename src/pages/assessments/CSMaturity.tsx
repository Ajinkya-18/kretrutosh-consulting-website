import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-cs-maturity.jpg";
import { ExternalLink } from "lucide-react";

const CSMaturity = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">CS Maturity Assessment</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Evaluate your Customer Success maturity and identify opportunities for improvement
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block mb-8">
                <img src={qrCode} alt="CS Maturity Assessment QR Code" className="w-64 h-64 mx-auto" />
                <p className="mt-4 text-sm text-muted-foreground">Scan to take the assessment</p>
              </div>
              <div>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
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

export default CSMaturity;
