
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  FileCheck, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Database,
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  DollarSign,
  Award,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50 animate-slide-in-bottom">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in-left">
              <div className="w-8 h-8 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Buck</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-fade-in">
              <a href="#features" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">How It Works</a>
              <a href="#impact" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Impact</a>
              <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Contact</a>
              <a href="/about" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">About Us</a>
              <a href="/founders" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Founders</a>
            </div>
            <Button className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-right transform hover:scale-105 transition-all duration-300">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 via-white to-dbuck-light/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-dbuck-primary/20 to-dbuck-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-dbuck-secondary/20 to-dbuck-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-6 animate-bounce-in">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Accreditation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="animate-fade-in-up">Revolutionizing</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary animate-gradient-shift animate-delayed-fade-in"> Accreditation</span> 
                <br />
                <span className="animate-delayed-fade-in-2">with AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-delayed-fade-in-3">
                DBuck simplifies NAAC, NIRF & NBA with automation, real-time insights & error-free reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <Button size="lg" className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-dbuck-primary/25">
                  <Zap className="mr-2 h-5 w-5" />
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-dbuck-primary/30 text-dbuck-primary hover:bg-dbuck-primary/5 transform hover:scale-105 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-dbuck-primary/10 via-dbuck-secondary/10 to-gray-100 rounded-3xl p-8 animate-float relative">
                <div className="absolute inset-0 bg-gradient-to-br from-dbuck-primary/5 to-dbuck-secondary/5 rounded-3xl animate-pulse-glow"></div>
                <div className="bg-white rounded-2xl p-6 shadow-xl relative z-10 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Accreditation Dashboard</h3>
                    <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white animate-pulse">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">NAAC Score</span>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">3.2/4.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary h-2 rounded-full animate-slide-in-bottom" style={{width: '80%', animationDelay: '1s'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Completion</span>
                      <span className="font-bold text-green-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI-powered solutions for educational accreditation and ranking
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-based Data Analysis",
                description: "Advanced machine learning algorithms analyze your institutional data for insights",
                delay: "0s"
              },
              {
                icon: FileCheck,
                title: "Report Automation",
                description: "Automated SSR and AQAR report generation with zero errors",
                delay: "0.1s"
              },
              {
                icon: BarChart3,
                title: "Peer Benchmarking",
                description: "Compare performance against similar institutions nationwide",
                delay: "0.2s"
              },
              {
                icon: TrendingUp,
                title: "Predictive Ranking Insights",
                description: "Forecast your ranking potential with AI-driven predictions",
                delay: "0.3s"
              },
              {
                icon: Shield,
                title: "Error-Free Validation",
                description: "Comprehensive validation ensures 100% accuracy in submissions",
                delay: "0.4s"
              },
              {
                icon: Database,
                title: "Real-time Monitoring",
                description: "Live tracking of accreditation progress and compliance status",
                delay: "0.5s"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-dbuck-primary/10 group animate-fade-in-up transform hover:scale-105" style={{animationDelay: feature.delay}}>
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-dbuck-primary mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-dbuck-secondary" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-dbuck-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, streamlined process in three steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data In",
                description: "Upload your institutional data through our secure platform",
                delay: "0s"
              },
              {
                step: "02", 
                title: "AI Insights",
                description: "Our AI processes and analyzes data for compliance and optimization",
                delay: "0.2s"
              },
              {
                step: "03",
                title: "Accreditation Out",
                description: "Get ready-to-submit reports and actionable improvement recommendations",
                delay: "0.4s"
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: step.delay}}>
                <div className="w-16 h-16 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-dbuck-primary transition-colors">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="h-6 w-6 text-dbuck-primary mx-auto mt-6 hidden md:block animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DBuck Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why DBuck?</h2>
            <p className="text-xl text-gray-600">The smart choice for modern educational institutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Reduces Time & Cost",
                description: "Save 80% of time and resources typically spent on accreditation",
                delay: "0s"
              },
              {
                icon: Award,
                title: "Improves Scores",
                description: "Institutions see average 25% improvement in accreditation scores",
                delay: "0.1s"
              },
              {
                icon: Users,
                title: "Works for All Tiers",
                description: "Designed for Tier 1, 2 & 3 colleges across India",
                delay: "0.2s"
              },
              {
                icon: CheckCircle,
                title: "No Consultants Needed",
                description: "Eliminate dependency on expensive external consultants",
                delay: "0.3s"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: benefit.delay}}>
                <benefit.icon className="h-12 w-12 text-dbuck-primary mx-auto mb-4 hover:text-dbuck-secondary transition-colors hover:scale-110 transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-dbuck-primary transition-colors">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="py-20 px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dbuck-primary/90 to-dbuck-secondary/90 animate-gradient-shift"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Social Impact</h2>
            <p className="text-xl opacity-90">Making quality education accessible across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, number: "10,000+", label: "Colleges Underserved", delay: "0s" },
              { icon: DollarSign, number: "$1.17B", label: "Addressable Market", delay: "0.2s" },
              { icon: Award, number: "#1", label: "Accreditation Automation Tool", delay: "0.4s" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: stat.delay}}>
                <stat.icon className="h-16 w-16 mx-auto mb-4 opacity-90 hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-bold mb-2 animate-bounce-in">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">Ready to transform your accreditation process? Let's talk.</p>
          </div>
          <Card className="border-gray-200 shadow-lg animate-scale-in hover:shadow-xl hover:shadow-dbuck-primary/10 transition-all duration-300">
            <CardContent className="p-8">
              <form id="contact-form" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    rows={5}
                    className="border-gray-300 focus:border-dbuck-primary focus:ring-dbuck-primary/20"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-up transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                  <Target className="mr-2 h-5 w-5" />
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold">Buck</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Revolutionizing Accreditation with AI
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "https://twitter.com/dbuckHQ" },
                { icon: Linkedin, href: "https://linkedin.com/company/dbuck" },
                { icon: Instagram, href: "https://instagram.com/dbuck.in" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-dbuck-light transition-all duration-300 hover:scale-110 transform"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-gray-400">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
