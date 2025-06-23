
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Target, ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success
      setIsSubmitted(true);
      reset();
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for your interest in DBuck. We'll get back to you within 24-48 hours.",
        duration: 6000,
      });

      // Reset submitted state after 10 seconds
      setTimeout(() => setIsSubmitted(false), 10000);

    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message ❌",
        description: error instanceof Error ? error.message : "Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get Started Today</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">Ready to transform your accreditation process? Let's talk.</p>
        </div>
        <Card className="border-gray-200 shadow-lg animate-scale-in hover:shadow-xl hover:shadow-dbuck-primary/10 transition-all duration-300">
          <CardContent className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in-up">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-dbuck-primary text-dbuck-primary hover:bg-dbuck-primary hover:text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-fade-in-left">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name {errors.name && <span className="text-red-500">*</span>}
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      className={`border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                        maxLength: { value: 100, message: 'Name must not exceed 100 characters' }
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="animate-fade-in-right">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email {errors.email && <span className="text-red-500">*</span>}
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className={`border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message {errors.message && <span className="text-red-500">*</span>}
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your institution and accreditation needs..."
                    rows={4}
                    className={`border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20 ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                      maxLength: { value: 2000, message: 'Message must not exceed 2000 characters' }
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-up transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100" 
                  style={{animationDelay: '0.4s'}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
