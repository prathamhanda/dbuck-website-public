
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Building } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
