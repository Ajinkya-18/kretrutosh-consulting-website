import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { name: "Pre Sales", path: "/services/pre-sales" },
    { name: "Sales", path: "/services/sales" },
    { name: "Post Sales", path: "/services/post-sales" },
    { name: "Digital Enablement", path: "/services/digital-enablement" },
    { name: "Culture Transformation", path: "/services/culture-transformation" },
  ];

  const assessments = [
    { name: "CX Maturity Assessment", path: "/assessments/cx-maturity" },
    { name: "CS Maturity Assessment", path: "/assessments/cs-maturity" },
    { name: "Culture Maturity Assessment", path: "/assessments/culture-maturity" },
  ];

  const thoughtLeadership = [
    { name: "Book", path: "/book" },
    { name: "Blogs & Articles", path: "/blogs" },
    { name: "Videos", path: "/videos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="KretruTosh Consulting" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">
                    Thought Leadership
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4 bg-popover">
                      {thoughtLeadership.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
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

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-2 p-4 bg-popover">
                      {services.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="border-t border-border mt-2 pt-2">
                        <p className="text-sm font-semibold text-muted-foreground px-3 py-1">
                          Assessments
                        </p>
                      </li>
                      {assessments.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
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
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              About
            </Link>

            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
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
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
              >
                Home
              </Link>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground px-2 py-1">
                  Thought Leadership
                </p>
                {thoughtLeadership.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-foreground hover:text-accent transition-colors py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground px-2 py-1">Services</p>
                {services.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-foreground hover:text-accent transition-colors py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
                <p className="text-sm font-semibold text-muted-foreground px-2 py-1 mt-2">
                  Assessments
                </p>
                {assessments.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-foreground hover:text-accent transition-colors py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
              >
                About
              </Link>

              <Button
                onClick={() => {
                  setIsOpen(false);
                  scrollToContact();
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
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
