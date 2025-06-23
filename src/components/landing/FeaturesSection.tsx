
import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileCheck, TrendingUp, Shield, BarChart3, Database } from "lucide-react";

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions for educational accreditation and ranking
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
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
  );
};

export default FeaturesSection;
