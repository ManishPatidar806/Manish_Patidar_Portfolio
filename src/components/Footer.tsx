import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 border-t border-blue-accent/20">
      <div className="container mx-auto max-w-6xl px-2 sm:px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-2xl font-bold text-blue-500">Manish Patidar</h3>
            <p className="text-gray-light/80 leading-relaxed text-xs sm:text-base">
              Passionate Full Stack Developer creating elegant solutions
              for complex problems. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-blue-500">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-light/80 hover:text-blue-light transition-colors duration-300 hover:underline text-xs sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-blue-500">Get In Touch</h4>
            <div className="space-y-1.5 sm:space-y-2">
              <a
                href="mailto:alex.johnson@example.com"
                className="flex items-center text-gray-light/80 hover:text-blue-light transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                manishpatidar1180@gmail.com
              </a>
              <p className="text-gray-light/80">Pithampur, Madhya Pradesh</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/ManishPatidar806"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-gray-light/80" />
              </a>
              <a
                href="https://www.linkedin.com/in/manishpatidar806/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-blue-500/80" />
              </a>
              <a
                href="mailto:manishpatidar1180@gmail.com"
                className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-orange-500/80" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-accent/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-light/80 text-xs sm:text-sm flex items-center text-center">
              © {currentYear} Manish Patidar.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;