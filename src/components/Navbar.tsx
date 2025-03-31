
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-montserrat font-bold text-primary">
            NOVA<span className="text-black">CRAFT</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#work" className="font-medium hover:text-primary transition-colors">Work</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a>
          <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fadeInUp">
          <a href="#home" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#work" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#about" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#testimonials" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <Button className="bg-primary hover:bg-primary/90 w-full mt-2" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
