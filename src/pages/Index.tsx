
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
  Mail
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
              <a href="#about" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">About</a>
              <a href="#founders" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Founders</a>
              <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Contact</a>
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

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-6">
              <Building className="w-4 h-4 mr-2" />
              About DBuck
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming Education
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">Through Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how educational institutions approach accreditation, 
              making quality education accessible and measurable across India.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-dbuck-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to quality accreditation tools and empower every educational 
                  institution in India to achieve excellence through AI-powered automation and insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center">
                <Eye className="h-16 w-16 text-dbuck-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading AI platform that transforms educational accreditation globally, 
                  making quality education transparent, accessible, and continuously improving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-dbuck-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, transparency, accessibility, and excellence. We believe every institution 
                  deserves the tools to succeed and every student deserves quality education.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story & Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  DBuck was born from a simple observation: educational institutions across India were 
                  struggling with complex, time-consuming accreditation processes that often required 
                  expensive consultants and months of preparation.
                </p>
                <p>
                  Founded by a team of education technology experts and AI researchers, we recognized 
                  the potential of artificial intelligence to streamline these processes while 
                  maintaining the highest standards of quality and compliance.
                </p>
                <p>
                  Today, we're proud to serve institutions across India, helping them save time, 
                  reduce costs, and achieve better accreditation outcomes through our innovative 
                  AI-powered platform.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-dbuck-primary/10 to-dbuck-secondary/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dbuck-primary mb-2">10,000+</div>
                    <div className="text-gray-600">Institutions Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dbuck-primary mb-2">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dbuck-primary mb-2">80%</div>
                    <div className="text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dbuck-primary mb-2">25%</div>
                    <div className="text-gray-600">Score Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Visionaries Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">DBuck</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate founders who are revolutionizing educational accreditation 
              through innovative AI solutions and deep industry expertise.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Founder 1 */}
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-left">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary rounded-full mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-4xl font-bold">JS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">John Smith</h3>
                  <Badge className="bg-dbuck-primary/10 text-dbuck-primary mb-4">Co-Founder & CEO</Badge>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Former Director of Educational Technology at leading Indian universities. 
                    15+ years of experience in educational administration and technology implementation. 
                    Passionate about making quality education accessible to all.
                  </p>
                  <div className="space-y-3 w-full mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">PhD in Educational Technology, IIT Delhi</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">Former VP of Technology, ABC University</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Building className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">Ex-Consultant, National Education Board</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-xl group animate-fade-in-right">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-dbuck-secondary to-dbuck-primary rounded-full mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-4xl font-bold">AP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Aisha Patel</h3>
                  <Badge className="bg-dbuck-primary/10 text-dbuck-primary mb-4">Co-Founder & CTO</Badge>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    AI/ML expert with 12+ years in building scalable technology solutions. 
                    Former Senior AI Engineer at Google and Microsoft. Specializes in natural language 
                    processing and educational data analytics.
                  </p>
                  <div className="space-y-3 w-full mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Brain className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">MS in AI/ML, Stanford University</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">Former Senior AI Engineer, Google</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-dbuck-primary" />
                      <span className="text-sm text-gray-600">Published 20+ AI Research Papers</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-dbuck-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founding Story */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Founding Story</h3>
            <p className="text-lg text-gray-600 mb-8">How two passionate educators came together to solve a critical problem</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg animate-scale-in border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                The idea for DBuck was born during a chance meeting at an education technology conference in Bangalore. 
                John, frustrated by the manual and error-prone accreditation processes he witnessed as a university administrator, 
                met Aisha, who had been exploring applications of AI in educational assessment.
              </p>
              <p className="leading-relaxed mb-6">
                "We realized that thousands of institutions across India were struggling with the same challenges," 
                recalls John. "The accreditation process was not just time-consuming and expensive, but it was also 
                preventing many deserving institutions from achieving the recognition they deserved."
              </p>
              <p className="leading-relaxed mb-6">
                Aisha adds, "The technology existed to solve these problems. What was missing was a solution specifically 
                designed for the Indian education system, with deep understanding of local requirements and challenges."
              </p>
              <p className="leading-relaxed">
                Today, DBuck serves over 10,000 institutions across India, helping them save time, reduce costs, 
                and achieve better accreditation outcomes. But for John and Aisha, the real satisfaction comes from 
                knowing that they're helping improve the quality of education for millions of students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white relative overflow-hidden">
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
