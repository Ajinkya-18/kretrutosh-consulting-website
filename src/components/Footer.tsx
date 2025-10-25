import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              KretruTosh Consulting
            </h3>
            <p className="text-muted-foreground mb-4">
              Empowering businesses with expert solutions, insights, and proven strategies for sustainable growth.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/ashutosh-karandikar-ccxp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* Add other social media links here in the future */}
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:karandikar.ashutosh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block">
                    karandikar.ashutosh@gmail.com
                  </a>
                  <a href="mailto:consult.ashutosh@kretru.com" className="text-muted-foreground hover:text-primary transition-colors block">
                    consult.ashutosh@kretru.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+919591387838" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9591387838
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Gujrati Society, Vile Parle</p>
                  <p className="text-muted-foreground">Mumbai, Maharashtra 400057, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get the latest insights and updates.
            </p>
            <form className="flex gap-2">
              <input
               type="email"
               placeholder="Your email"
               className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" variant="premium" className="px-5">
                Subscribe
              </Button> 
            </form>
          </div> */}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} KretruTosh Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;