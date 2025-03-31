
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Samantha Lee",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Chen",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Zoe Williams",
    position: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeInUp">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-1">
            The talented individuals behind our successful projects and happy clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`group animate-fadeInUp stagger-${(index % 4) + 1}`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href="#" className="text-white hover:text-white/80 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-white/80 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
