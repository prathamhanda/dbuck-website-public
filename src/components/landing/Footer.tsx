
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/dbuck_in" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/dbuck/" },
    { icon: Instagram, href: "https://instagram.com/dbuck.in" }
  ];

  return (
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
            {socialLinks.map((social, index) => (
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
  );
};

export default Footer;
