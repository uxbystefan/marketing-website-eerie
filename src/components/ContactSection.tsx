
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeInUp">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-1">
            Ready to start your project? Contact us for a free consultation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 animate-fadeInUp stagger-1">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600">
                      123 Innovation Way<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">hello@novacraft.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-fadeInUp stagger-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">Full Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-2">Your Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="min-h-[150px]" 
                  />
                </div>
                
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
