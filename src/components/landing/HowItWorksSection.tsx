
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
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
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-dbuck-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">Simple, streamlined process in three steps</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
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
  );
};

export default HowItWorksSection;
