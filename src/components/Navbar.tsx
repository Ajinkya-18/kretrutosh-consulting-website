import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/kretrutosh-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For new pages, the <Link> component handles navigation
  };

  // This function scrolls to the contact form section
  const scrollToContact = () => {
    // If we're on the home page, just scroll smoothly.
    if (location.pathname === '/') {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If we're on another page, navigate to home and pass
      // a 'state' object telling the home page to scroll.
      navigate('/', { state: { scrollTo: 'contact' } });
    }
  };

  const thoughtLeadership = [
    { name: "Book", path: "/book" },
    { name: "Blogs & Articles", path: "/blogs" },
    { name: "Videos", path: "/videos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/60 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="KretruTosh Consulting" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* --- FIX: Changed variant to "secondary" --- */}
            <Button asChild variant="secondary" className="font-semibold" onClick={() => handleNavClick('/')}>
              <Link to="/">Home</Link>
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {/* This component already has the correct style */}
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">
                    Thought Leadership
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4 bg-popover">
                      {thoughtLeadership.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild onClick={() => handleNavClick(item.path)}>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* --- FIX: Changed variant to "secondary" --- */}
                <NavigationMenuItem>
                  <Button asChild variant="secondary" className="font-semibold" onClick={() => handleNavClick('/services')}>
                    <Link to="/services">Services</Link>
                  </Button>
                </NavigationMenuItem>
                
                {/* --- FIX: Changed variant to "secondary" --- */}
                <NavigationMenuItem>
                  <Button asChild variant="secondary" className="font-semibold" onClick={() => handleNavClick('/assessments')}>
                    <Link to="/assessments">Assessments</Link>
                  </Button>
                </NavigationMenuItem>
                
                {/* --- FIX: Changed variant to "secondary" --- */}
                <NavigationMenuItem>
                  <Button asChild variant="secondary" className="font-semibold" onClick={() => handleNavClick('/case-studies')}>
                    <Link to="/case-studies">Case Studies</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* --- FIX: Changed variant to "secondary" --- */}
            <Button asChild variant="secondary" className="font-semibold" onClick={() => handleNavClick('/about')}>
              <Link to="/about">About</Link>
            </Button>

            {/* --- FIX: Added onClick={scrollToContact} --- */}
            <Button onClick={scrollToContact} variant="premium" className="shadow-lg hover:shadow-xl">
              Get Started
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => { setIsOpen(false); handleNavClick('/'); }}
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
              >
                Home
              </Link>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground px-2 py-1">Thought Leadership</p>
                {thoughtLeadership.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setIsOpen(false); handleNavClick(item.path); }}
                    className="block text-foreground hover:text-accent transition-colors py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/services" onClick={() => { setIsOpen(false); handleNavClick('/services'); }} className="text-foreground hover:text-accent transition-colors font-medium py-2">Services</Link>
              <Link to="/assessments" onClick={() => { setIsOpen(false); handleNavClick('/assessments'); }} className="text-foreground hover:text-accent transition-colors font-medium py-2">Assessments</Link>
              <Link to="/case-studies" onClick={() => { setIsOpen(false); handleNavClick('/case-studies'); }} className="text-foreground hover:text-accent transition-colors font-medium py-2">Case Studies</Link>
              <Link to="/about" onClick={() => { setIsOpen(false); handleNavClick('/about'); }} className="text-foreground hover:text-accent transition-colors font-medium py-2">About</Link>

              <Button
                onClick={() => { setIsOpen(false); scrollToContact(); }}
                variant="premium"
                className="w-full shadow-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;