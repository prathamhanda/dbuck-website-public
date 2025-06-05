
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Brain, Award, Building, Lightbulb, Target, 
  Linkedin, Mail 
} from "lucide-react";

const FoundersSection = () => {
  return (
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
      </div>
    </section>
  );
};

export default FoundersSection;
