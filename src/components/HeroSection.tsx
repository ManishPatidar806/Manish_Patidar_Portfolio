import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-light rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-blue-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-medium rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-light">Manish Patidar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-light">
            A Passionate{" "}
            <span className="typing-animation text-blue-light">
              Full Stack Developer
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-light/90 leading-relaxed">
            I specialize in building full-stack web applications using React.js,
            Spring Boot, and MySQL, with additional hands-on experience in
            Microservices, MongoDB, Express.js, and Node.js. I enjoy creating
            clean, scalable solutions from real-world ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-hero text-lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="btn-outline-hero text-lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            onClick={() => scrollToSection("about")}
            className="cursor-pointer animate-bounce"
          >
            <ArrowDown className="w-8 h-8 mx-auto text-blue-light" />
            <p className="text-sm mt-2 text-gray-light/80">
              Scroll to learn more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
