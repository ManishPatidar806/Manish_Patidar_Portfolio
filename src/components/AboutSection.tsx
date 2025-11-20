import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-blue-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src={profileImage}
                alt="Alex Johnson"
                className="relative w-80 h-80 rounded-full object-cover shadow-[var(--shadow-elegant)] border-4 border-white/50"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Passionate Developer & Problem Solver
            </h3>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a dedicated Full stack developer with proficient in building
                modern web applications. My journey started with a Computer
                Science degree, and I've been passionate about creating elegant
                solutions to complex problems ever since.
              </p>

              <p>
                I specialize in full-stack development using Spring Boot, Reactjs,
                Microservices, MySQL, and MongoDB, with a strong focus on user
                experience and performance optimization. I also have working
                knowledge of Express.js and Node.js, and enjoy collaborating
                with teams that value clean code, innovative thinking, and
                continuous learning.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-foreground">
                Core Strengths:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "Spring-boot & MicroServices",
                  // "React & Redux",
                  // "Node.js & Express",
                  "MySql & MongoDB",
                  "RESTful APIs",
                  "Git & Version Control",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                className="btn-hero group"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1s4emPm-vusvVN4sh2wgxHRhXKWEYLNXy/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
