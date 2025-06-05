
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
  Target,
  Eye,
  Heart,
  Globe,
  Lightbulb,
  BookOpen,
  Building,
  Star,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50 animate-slide-in-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in-left">
              <img 
                src="/lovable-uploads/17519bb8-3f16-4e9b-a142-0f986e803701.png" 
                alt="DBuck Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Buck</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 animate-fade-in">
              <a href="#features" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">About</a>
              <a href="#founders" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Founders</a>
              <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <Button className="hidden sm:flex bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-right transform hover:scale-105 transition-all duration-300">
                Book a Demo
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-dbuck-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#features" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                <a href="#about" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#founders" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Founders</a>
                <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <Button className="sm:hidden bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white w-full mt-2">
                  Book a Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* What We Do Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI-powered solutions for educational accreditation and ranking
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <CardContent className="p-4 sm:p-6">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-dbuck-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-dbuck-secondary" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-dbuck-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">How It Works</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Simple, streamlined process in three steps</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary text-white rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-4 sm:mb-6 animate-bounce-in hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 hover:text-dbuck-primary transition-colors">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-dbuck-primary mx-auto mt-4 sm:mt-6 hidden sm:block animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DBuck Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why DBuck?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">The smart choice for modern educational institutions</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-dbuck-primary mx-auto mb-3 sm:mb-4 hover:text-dbuck-secondary transition-colors hover:scale-110 transform duration-300" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 hover:text-dbuck-primary transition-colors">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-4 sm:mb-6">
              <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">About DBuck</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Transforming Education
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">Through Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how educational institutions approach accreditation, 
              making quality education accessible and measurable across India.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up">
              <CardContent className="p-6 sm:p-8 text-center">
                <Target className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-dbuck-primary mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To democratize access to quality accreditation tools and empower every educational 
                  institution in India to achieve excellence through AI-powered automation and insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6 sm:p-8 text-center">
                <Eye className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-dbuck-primary mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To be the leading AI platform that transforms educational accreditation globally, 
                  making quality education transparent, accessible, and continuously improving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up sm:col-span-3 lg:col-span-1" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 sm:p-8 text-center">
                <Heart className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-dbuck-primary mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Innovation, transparency, accessibility, and excellence. We believe every institution 
                  deserves the tools to succeed and every student deserves quality education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-4 sm:mb-6">
              <Users className="w-3 h-3 sm:w-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">Meet the Team</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Visionaries Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">DBuck</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate founders who are revolutionizing educational accreditation 
              through innovative AI solutions and deep industry expertise.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {/* Founder 1 - CTO */}
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-left">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 border-4 border-gradient-to-br from-dbuck-primary to-dbuck-secondary">
                    <img 
                      src="/lovable-uploads/0458df05-12e8-45b2-bc1f-ce60ac445444.png" 
                      alt="Manan Khanna" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Manan Khanna</h3>
                  <Badge className="bg-dbuck-primary/10 text-dbuck-primary mb-4 text-xs sm:text-sm">Co-Founder & CTO</Badge>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Seasoned entrepreneur with expertise in AI and technology development. 
                    Passionate about leveraging cutting-edge technology to solve real-world educational challenges 
                    and making quality education accessible through innovation.
                  </p>
                  <div className="space-y-2 sm:space-y-3 w-full mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Expert in AI/ML Technologies</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Seasoned Technology Entrepreneur</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Building className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Educational Technology Innovator</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/manan-khanna-323162258/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="mailto:manan@dbuck.in" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 - CEO */}
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-right">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 border-4 border-gradient-to-br from-dbuck-secondary to-dbuck-primary">
                    <img 
                      src="/lovable-uploads/a70748cc-0f04-40a3-9b66-883c10bd7467.png" 
                      alt="Shubh Gupta" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Shubh Gupta</h3>
                  <Badge className="bg-dbuck-primary/10 text-dbuck-primary mb-4 text-xs sm:text-sm">Co-Founder & CEO</Badge>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Student entrepreneur with a vision to transform educational accreditation. 
                    Combines fresh perspectives with deep understanding of institutional challenges 
                    to drive innovation in educational technology solutions.
                  </p>
                  <div className="space-y-2 sm:space-y-3 w-full mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Visionary Student Entrepreneur</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Educational Innovation Leader</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Target className="h-3 w-3 sm:h-4 sm:w-4 text-dbuck-primary" />
                      <span className="text-xs sm:text-sm text-gray-600">Strategic Business Development</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/shubh-gupta-b525b0259/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="mailto:shubhgupta@dbuck.in" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founding Story */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Founding Story</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">How a late-night conversation between two students sparked a revolutionary idea</p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg animate-scale-in border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
                It was 2 AM on a Tuesday night when everything changed. Shubh was stressing over his college's 
                upcoming NAAC accreditation process, frustrated by the mountains of paperwork and manual data entry 
                that seemed to consume weeks of everyone's time. Meanwhile, Manan was deep into exploring AI applications 
                in education for his final year project.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                "I remember calling Manan at 2 AM, completely overwhelmed by how broken the accreditation system was," 
                recalls Shubh. "Our college was spending lakhs on consultants, faculty were working overtime on manual reports, 
                and we were still not confident about our submission quality."
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Manan had been working on machine learning models that could analyze educational data. "When Shubh called me 
                that night, describing the exact problems institutions face, it was like a lightbulb moment. We realized we 
                could solve this massive pain point that affects thousands of colleges across India."
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                That conversation stretched until 5 AM, and by morning, they had sketched out the first version of what 
                would become DBuck. "We understood the problem from the inside out - as students, we saw how much time 
                and resources were being wasted on manual processes that technology could easily automate."
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Today, DBuck serves institutions across India, but the founders still remember that pivotal 2 AM conversation 
                that started it all. "Every feature we build, every problem we solve, it all traces back to that night when 
                we realized we could actually make a difference," says Shubh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dbuck-primary/90 to-dbuck-secondary/90 animate-gradient-shift"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Social Impact</h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">Making quality education accessible across India</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              { icon: Users, number: "10,000+", label: "Colleges Underserved", delay: "0s" },
              { icon: DollarSign, number: "$1.17B", label: "Addressable Market", delay: "0.2s" },
              { icon: Award, number: "#1", label: "Accreditation Automation Tool", delay: "0.4s" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: stat.delay}}>
                <stat.icon className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 opacity-90 hover:opacity-100 transition-opacity" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-bounce-in">{stat.number}</div>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <img 
                src="/lovable-uploads/17519bb8-3f16-4e9b-a142-0f986e803701.png" 
                alt="DBuck Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold">Buck</span>
            </div>
            <p className="text-gray-400 text-center sm:text-left text-sm sm:text-base">
              Revolutionizing Accreditation with AI
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {[
                { icon: Twitter, href: "https://twitter.com/dbuck_in" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/dbuck/" },
                { icon: Instagram, href: "https://instagram.com/dbuck.in" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-dbuck-light transition-all duration-300 hover:scale-110 transform"
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-gray-400 text-sm sm:text-base">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
