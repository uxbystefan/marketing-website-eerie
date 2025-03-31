
import { 
  Globe, 
  PenTool, 
  Code, 
  BarChart4, 
  TrendingUp, 
  MessageSquare 
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8 text-primary mb-4" />,
    title: "Brand Strategy",
    description: "Developing powerful brand identities that resonate with your target audience and stand out in the market."
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary mb-4" />,
    title: "Web Design",
    description: "Creating visually stunning, user-focused websites that drive engagement and conversions."
  },
  {
    icon: <Code className="h-8 w-8 text-primary mb-4" />,
    title: "Web Development",
    description: "Building robust, scalable web applications with cutting-edge technologies and best practices."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-primary mb-4" />,
    title: "Data Analytics",
    description: "Transforming data into actionable insights to drive strategic decision-making and business growth."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary mb-4" />,
    title: "Marketing",
    description: "Implementing data-driven marketing strategies that connect with your audience and deliver results."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary mb-4" />,
    title: "Content Creation",
    description: "Producing engaging, strategic content that tells your brand story and resonates with your audience."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeInUp">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-1">
            We offer comprehensive solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card bg-white p-8 rounded-lg shadow-md hover:shadow-lg animate-fadeInUp stagger-${(index % 5) + 1}`}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
