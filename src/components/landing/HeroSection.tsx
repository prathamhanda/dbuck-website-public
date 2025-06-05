
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-dbuck-light/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-dbuck-primary/20 to-dbuck-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-tr from-dbuck-secondary/20 to-dbuck-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-left">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-4 sm:mb-6 animate-bounce-in">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">AI-Powered Accreditation</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              <span className="animate-fade-in-up">Revolutionizing</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary animate-gradient-shift animate-delayed-fade-in"> Accreditation</span> 
              <br />
              <span className="animate-delayed-fade-in-2">with AI</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-delayed-fade-in-3 max-w-2xl mx-auto lg:mx-0">
              DBuck simplifies NAAC, NIRF & NBA with automation, real-time insights & error-free reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up justify-center lg:justify-start" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-dbuck-primary/25 text-sm sm:text-base">
                <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-dbuck-primary/30 text-dbuck-primary hover:bg-dbuck-primary/5 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch How It Works
              </Button>
            </div>
          </div>
          <div className="animate-fade-in-right mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-dbuck-primary/10 via-dbuck-secondary/10 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 animate-float relative">
              <div className="absolute inset-0 bg-gradient-to-br from-dbuck-primary/5 to-dbuck-secondary/5 rounded-2xl sm:rounded-3xl animate-pulse-glow"></div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl relative z-10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Accreditation Dashboard</h3>
                  <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white animate-pulse text-xs">Live</Badge>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">NAAC Score</span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-sm sm:text-base">3.2/4.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary h-1.5 sm:h-2 rounded-full animate-slide-in-bottom" style={{width: '80%', animationDelay: '1s'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Completion</span>
                    <span className="font-bold text-green-600 text-sm sm:text-base">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
