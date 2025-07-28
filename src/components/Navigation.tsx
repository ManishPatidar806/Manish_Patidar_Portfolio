import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-navy-dark' : 'text-white'
            }`}>
              Manish<span className="text-blue-accent">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-blue-accent relative group ${
                  isScrolled ? 'text-navy-dark' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className={`${
                isScrolled 
                  ? 'btn-hero' 
                  : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
              } transition-all duration-300`}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden p-2 ${
              isScrolled ? 'text-navy-dark' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg' 
            : 'max-h-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-navy-dark hover:text-blue-accent hover:bg-blue-accent/10 transition-colors duration-300 rounded"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="btn-hero w-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;