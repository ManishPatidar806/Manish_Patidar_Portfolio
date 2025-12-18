import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-500">Manish Patidar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-light">
            A Passionate{" "}
            <span className="typing-animation text-blue-500">
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
              className="bg-gray-700 text-lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/ManishPatidar806"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-light/80" />
            </a>
            <a
              href="https://www.linkedin.com/in/manishpatidar806/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-500/80" />
            </a>
            <a
              href="mailto:manishpatidar1180@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-red-500/80" />
            </a>
          </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
