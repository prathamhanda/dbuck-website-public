
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  ArrowRight,
  Building,
  Globe,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 animate-fade-in-left">
              <div className="w-8 h-8 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Buck</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-dbuck-primary transition-colors">Home</Link>
              <Link to="/about" className="text-dbuck-primary font-medium">About Us</Link>
              <Link to="/founders" className="text-gray-600 hover:text-dbuck-primary transition-colors">Founders</Link>
            </div>
            <Button className="bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 via-white to-dbuck-light/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-dbuck-primary/10 to-dbuck-secondary/10 text-dbuck-primary border-dbuck-primary/20 mb-6">
              <Building className="w-4 h-4 mr-2" />
              About DBuck
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transforming Education
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">Through Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how educational institutions approach accreditation, 
              making quality education accessible and measurable across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
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

      {/* What Sets Us Apart */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">The key differentiators that make DBuck the preferred choice</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "AI-First Approach",
                description: "Built from the ground up with artificial intelligence at its core"
              },
              {
                icon: Users,
                title: "Educational Focus",
                description: "Designed specifically for educational institutions by education experts"
              },
              {
                icon: Globe,
                title: "India-Centric",
                description: "Tailored for Indian accreditation standards and regulatory requirements"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of improving accreditation scores and reducing costs"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <feature.icon className="h-12 w-12 text-dbuck-primary mx-auto mb-4 hover:text-dbuck-secondary transition-colors" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of institutions that have already revolutionized their accreditation process with DBuck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-dbuck-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/founders">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Meet Our Founders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-dbuck-primary to-dbuck-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold">Buck</span>
          </Link>
          <p className="text-gray-400">Revolutionizing Accreditation with AI</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
