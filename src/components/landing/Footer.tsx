
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
          <p className="text-gray-400 text-center sm:text-left text-sm sm:text-base mb-4 sm:mb-0">
            Revolutionizing Accreditation with AI
          </p>
          <div className="flex space-x-4">
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
          <p className="text-gray-400 text-sm sm:text-base mb-2">© 2024 DBuck. All rights reserved.</p>
          <p className="text-gray-400 text-sm sm:text-base">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
