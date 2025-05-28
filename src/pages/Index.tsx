
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
  Instagram
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-dbuck-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Buck</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">Impact</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <Button className="bg-dbuck-red hover:bg-red-700 text-white">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-dbuck-red/10 text-dbuck-red border-dbuck-red/20 mb-6">
                AI-Powered Accreditation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Revolutionizing 
                <span className="text-dbuck-red"> Accreditation</span> 
                <br />with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                DBuck simplifies NAAC, NIRF & NBA with automation, real-time insights & error-free reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-dbuck-red hover:bg-red-700 text-white">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-dbuck-red/10 to-gray-100 rounded-3xl p-8 animate-float">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Accreditation Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">NAAC Score</span>
                      <span className="font-bold text-dbuck-red">3.2/4.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-dbuck-red h-2 rounded-full" style={{width: '80%'}}></div>
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
          <div className="text-center mb-16">
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
                description: "Advanced machine learning algorithms analyze your institutional data for insights"
              },
              {
                icon: FileCheck,
                title: "Report Automation",
                description: "Automated SSR and AQAR report generation with zero errors"
              },
              {
                icon: BarChart3,
                title: "Peer Benchmarking",
                description: "Compare performance against similar institutions nationwide"
              },
              {
                icon: TrendingUp,
                title: "Predictive Ranking Insights",
                description: "Forecast your ranking potential with AI-driven predictions"
              },
              {
                icon: Shield,
                title: "Error-Free Validation",
                description: "Comprehensive validation ensures 100% accuracy in submissions"
              },
              {
                icon: Database,
                title: "Real-time Monitoring",
                description: "Live tracking of accreditation progress and compliance status"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-dbuck-red/30 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-dbuck-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, streamlined process in three steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data In",
                description: "Upload your institutional data through our secure platform"
              },
              {
                step: "02", 
                title: "AI Insights",
                description: "Our AI processes and analyzes data for compliance and optimization"
              },
              {
                step: "03",
                title: "Accreditation Out",
                description: "Get ready-to-submit reports and actionable improvement recommendations"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dbuck-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="h-6 w-6 text-dbuck-red mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DBuck Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why DBuck?</h2>
            <p className="text-xl text-gray-600">The smart choice for modern educational institutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Reduces Time & Cost",
                description: "Save 80% of time and resources typically spent on accreditation"
              },
              {
                icon: Award,
                title: "Improves Scores",
                description: "Institutions see average 25% improvement in accreditation scores"
              },
              {
                icon: Users,
                title: "Works for All Tiers",
                description: "Designed for Tier 1, 2 & 3 colleges across India"
              },
              {
                icon: CheckCircle,
                title: "No Consultants Needed",
                description: "Eliminate dependency on expensive external consultants"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-dbuck-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="py-20 px-6 bg-gradient-to-r from-dbuck-red to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Social Impact</h2>
            <p className="text-xl opacity-90">Making quality education accessible across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-lg opacity-90">Colleges Underserved</p>
            </div>
            <div>
              <DollarSign className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">$1.17B</div>
              <p className="text-lg opacity-90">Addressable Market</p>
            </div>
            <div>
              <Award className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">#1</div>
              <p className="text-lg opacity-90">Accreditation Automation Tool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">Ready to transform your accreditation process? Let's talk.</p>
          </div>
          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <form id="contact-form" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" className="border-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your institution and accreditation needs..."
                    rows={5}
                    className="border-gray-300"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-dbuck-red hover:bg-red-700 text-white">
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
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-dbuck-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold">Buck</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Revolutionizing Accreditation with AI
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/dbuckHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/dbuck" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/dbuck.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
