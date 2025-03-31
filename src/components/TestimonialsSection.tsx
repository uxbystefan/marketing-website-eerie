
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NovaCraft transformed our online presence with a stunning website that perfectly captures our brand identity. Their strategic approach has significantly improved our conversions.",
    author: "Sarah Johnson",
    position: "CEO, TechVision",
  },
  {
    quote: "Working with NovaCraft has been an absolute game-changer for our business. Their team's attention to detail and creative solutions have helped us stand out in a competitive market.",
    author: "Michael Chen",
    position: "Marketing Director, Elevate Corp",
  },
  {
    quote: "The team at NovaCraft exceeded our expectations. Their data-driven approach to marketing has delivered measurable results, and their communication throughout the project was exceptional.",
    author: "Emily Rodriguez",
    position: "Founder, Bloom Studios",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeInUp">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-1">
            Don't just take our word for it - here's what our clients have to say.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fadeInUp stagger-2">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center">
                    <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
                    <blockquote className="text-lg md:text-xl font-medium mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
