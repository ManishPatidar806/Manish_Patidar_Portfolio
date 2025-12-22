import React from "react";
import {
  ReactIcon,
  ReduxIcon,
  Html5Icon,
  Css3Icon,
  TailwindCssIcon,
  JavascriptIcon,
  NodeJsIcon,
  ExpressJsIcon,
  RestApiIcon,
  GraphQlIcon,
  JwtAuthIcon,
  SocketIoIcon,
  MongoDbIcon,
  PostgresqlIcon,
  RedisIcon,
  GitGithubIcon,
  VsCodeIcon,
  PostmanIcon,
  DockerIcon,
  AwsIcon,
  VercelIcon,
  TypescriptIcon,
  NextJsIcon,
  MicroservicesIcon,
  JavaIcon,
  SpringBootIcon,
  MySqlIcon,
  Jenkins,
  Ansible,
  Sonarqube,
  Nexus,
  MavenIcon,
  Stripe,
  Swagger,
  FastApi,
  Langchain,
  KubernetesIcon,
} from "../assets/icons"; // Adjust path as necessary

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        // { name: "Redux", level: 90, icon: <ReduxIcon /> },
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "Python",
        "Spring Boot",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "MySql",
        // "GraphQL",
        "JWT Auth",
        //  "Socket.io",
      ],
    },

    {
      title: "DevOps",
      skills: [
        "Git & GitHub",
        "AWS", "Vercel", "Docker", "Jenkins", "Ansible", "SonarQube", "Nexus",]
    },
    {
      title: "Tools & Others",
      skills: [
        "VS Code", "Postman", "Microservices", "Maven", "Stripe", "Swagger",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Tech <span className="text-blue-500">Stack</span>
          </h2>
          <p className="text-sm sm:text-xl text-gray-light/80 max-w-2xl mx-auto px-2">
            The technologies and tools I use to bring ideas to life
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-accent mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Skills displayed as tags/chips */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500 flex items-center">
              <span className="mr-2 sm:mr-3">{category.title}</span>
              <div className="flex-1 h-px bg-blue-accent/30"></div>
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill}
                  className="card-portfolio group relative bg-navy-medium/50 backdrop-blur-sm border border-blue-accent/20 hover:border-blue-500 px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 cursor-default"
                  style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                >
                  {/* Skill Name */}
                  <span className="font-semibold text-xs sm:text-base text-gray-light group-hover:text-blue-500 transition-colors duration-300">
                    {skill}
                  </span>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Learning Section */}
        <div className="mt-8 sm:mt-16">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500 flex items-center">
            <span className="mr-2 sm:mr-3">Currently Learning</span>
            <div className="flex-1 h-px bg-blue-accent/30"></div>
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { name: "FastApi" },
              { name: "Langchain" },
              { name: "Kubernetes" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="card-portfolio group relative bg-navy-medium/50 backdrop-blur-sm border border-blue-accent/20 hover:border-blue-500 px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-xs sm:text-base text-gray-light group-hover:text-blue-500 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
