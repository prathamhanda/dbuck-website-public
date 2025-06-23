
import { Users, Award } from "lucide-react";

const SocialImpactSection = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Colleges Underserved", delay: "0s" },
    { icon: Award, number: "#1", label: "Accreditation Automation Tool", delay: "0.4s" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-dbuck-primary to-dbuck-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dbuck-primary/90 to-dbuck-secondary/90 animate-gradient-shift"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Social Impact</h2>
          <p className="text-base sm:text-lg lg:text-xl opacity-90">Making quality education accessible across India</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: stat.delay}}>
              <stat.icon className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 opacity-90 hover:opacity-100 transition-opacity" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-bounce-in">{stat.number}</div>
              <p className="text-sm sm:text-base lg:text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpactSection;
