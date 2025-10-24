import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => handleNavClick('/')} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/videos" onClick={() => handleNavClick('/videos')} className="text-muted-foreground hover:text-primary transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={() => handleNavClick('/blogs')} className="text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/assessments/cx-maturity" onClick={() => handleNavClick('/assessments/cx-maturity')} className="text-muted-foreground hover:text-primary transition-colors">
                  Assessments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" onClick={() => handleNavClick('/about')} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/pre-sales" onClick={() => handleNavClick('/services/pre-sales')} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/case-studies" onClick={() => handleNavClick('/case-studies')} className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get the latest insights and updates.
            </p>
            {/*
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
              <button className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
            */}
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
          </div>
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
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
