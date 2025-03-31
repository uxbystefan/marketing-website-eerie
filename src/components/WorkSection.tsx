
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eco Solutions Rebrand",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "Summit E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "Pulse Analytics Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "Horizon Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeInUp">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-1">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg animate-fadeInUp stagger-${(index % 3) + 1}`}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-72 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary font-medium text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white text-white w-fit opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 px-8 animate-fadeInUp">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
