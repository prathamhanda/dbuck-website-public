
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Target, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get Started Today</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">Ready to transform your accreditation process? Let's talk.</p>
        </div>
        <Card className="border-gray-200 shadow-lg animate-scale-in hover:shadow-xl hover:shadow-dbuck-primary/10 transition-all duration-300">
          <CardContent className="p-6 sm:p-8">
            <form id="contact-form" className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="animate-fade-in-left">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" className="border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20" />
                </div>
                <div className="animate-fade-in-right">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20" />
                </div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your institution and accreditation needs..."
                  rows={4}
                  className="border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-up transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
