
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  BookOpen, 
  Brain,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Star,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const Founders = () => {
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
              <Link to="/about" className="text-gray-600 hover:text-dbuck-primary transition-colors">About Us</Link>
              <Link to="/founders" className="text-dbuck-primary font-medium">Founders</Link>
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
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Visionaries Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dbuck-primary to-dbuck-secondary">DBuck</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate founders who are revolutionizing educational accreditation 
              through innovative AI solutions and deep industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
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
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Founding Story</h2>
            <p className="text-xl text-gray-600">How two passionate educators came together to solve a critical problem</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg animate-scale-in">
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

      {/* Values & Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education First",
                description: "Every decision we make is guided by what's best for educational institutions and their students."
              },
              {
                title: "Innovation with Purpose",
                description: "We leverage cutting-edge technology not for its own sake, but to solve real problems."
              },
              {
                title: "Accessibility & Equity",
                description: "Quality education tools shouldn't be a privilege. We're committed to making them accessible to all."
              }
            ].map((value, index) => (
              <Card key={index} className="border-gray-200 hover:border-dbuck-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-dbuck-primary transition-colors">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-xl mb-8 opacity-90">
            We'd love to hear from you. Whether you're an institution looking for solutions 
            or a fellow educator passionate about innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-dbuck-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Schedule a Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Learn More About DBuck
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

export default Founders;
