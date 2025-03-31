
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Crafting Digital <br/>
            <span className="text-white/90">Experiences That</span><br/>
            <span className="text-white">Elevate Brands</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-fadeInUp stagger-1">
            We're a team of creative strategists, designers, and developers 
            passionate about building memorable digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-2">
            <Button className="bg-white text-primary hover:bg-white/90 font-medium text-base px-8 py-6">
              View Our Work
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-base px-8 py-6">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
