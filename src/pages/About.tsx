import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
                About Ashutosh Karandikar
              </h1>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-lg backdrop-blur-sm">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground font-semibold">CCXP CERTIFIED</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-lg backdrop-blur-sm">
                  <Briefcase className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground font-semibold">IIMB Customer Experience Professional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6">20+ Years of Global Consulting & Business Transformation Experience</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-accent flex items-center gap-2">
                        <TrendingUp className="h-6 w-6" />
                        Revenue Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">$80m+</p>
                      <p className="text-muted-foreground">Revenue Unlocked</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-accent flex items-center gap-2">
                        <TrendingUp className="h-6 w-6" />
                        Sales Velocity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">2-5x</p>
                      <p className="text-muted-foreground">Growth Delivered</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-accent flex items-center gap-2">
                        <Award className="h-6 w-6" />
                        Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">360°</p>
                      <p className="text-muted-foreground">Leadership Expertise</p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">Unique Expertise</h3>
                <ul className="space-y-3 mb-8">
                  <li>✓ Unique 360-degree leadership experience across Strategy, Consulting, Sales, Marketing, Customer Success, Operations, and Brand/Product Management</li>
                  <li>✓ Proprietary frameworks on CX/CRM/CS Strategy & Transformation, Brand Promise Architecture, Culture Assessment & Transformation, and many more</li>
                  <li>✓ Proven track record transforming key brands through CX, EX/Culture, Digital, and GTM/Product specific interventions</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Key Brands Transformed</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {["Alida", "AsBPI", "Suyati", "SYMEGA", "Beyond Truth in Action", "A Milestone Company", "Circles.Life", "AccelerateNext", "C Customer", "InLife", "DiClicks", "KraftHeinz", "Value Retail", "Altudo", "Insular Life", "Pharmacy"].map((brand) => (
                    <div key={brand} className="p-3 bg-muted rounded-lg text-sm font-medium">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-xl italic text-center">
                  "Crafting Exceptional Customer Experiences in the Age of Kretru"
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

export default About;
