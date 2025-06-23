
import { TrendingUp, Award, Users, CheckCircle } from "lucide-react";

const WhyDBuckSection = () => {
  const benefits = [
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
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why DBuck?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">The smart choice for modern educational institutions</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: benefit.delay}}>
              <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-dbuck-primary mx-auto mb-3 sm:mb-4 hover:text-dbuck-secondary transition-colors hover:scale-110 transform duration-300" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 hover:text-dbuck-primary transition-colors">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDBuckSection;
