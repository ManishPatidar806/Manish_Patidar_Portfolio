import { Calendar, Link, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "AveryBit Solutions Pvt. Ltd.",
      role: "Software Developer intern",
      duration: "August 2025 - Present",
      location: "Indore, Madhya Pradesh",
      type: "Internship",
      description: [
        "Built an enterprise-level chatbot system using Langflow and LangChain to automate and enhance communication workflows",
        "Designed conversation flows, integrated APIs, and connected the chatbot with relevant knowledge bases.",
        "Developed a full-stack web platform connecting families and caregivers with role-based access and secure authentication.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Expressjs", "LangChain", "LangGraph"],
      current: true,
    },

  ];

  return (
    <section className="section-padding bg-navy-dark text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-blue-light">Experience</span>
          </h2>
          <p className="text-xl text-gray-light/80 max-w-2xl mx-auto">
            My journey through the tech industry and the experiences that shaped my skills
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-accent"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-light rounded-full border-4 border-navy-dark z-10">
                {experience.current && (
                  <div className="absolute inset-0 bg-blue-light rounded-full animate-ping"></div>
                )}
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                <div
                  className="card-portfolio bg-navy-medium/50 backdrop-blur-sm p-6 border border-blue-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-blue-light">
                        {experience.role}
                      </h3>
                      {experience.current && (
                        <span className="px-2 py-1 bg-blue-accent text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {experience.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-light/80">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                      <span className="px-2 py-1 bg-blue-accent/20 text-blue-light rounded text-xs">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-light/90 text-sm flex items-start"
                      >
                        <span className="text-blue-light mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-accent/10 text-blue-light rounded text-xs font-medium border border-blue-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-light">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-portfolio bg-navy-medium/50 backdrop-blur-sm p-6 border border-blue-accent/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                Bachelor of Technology in Computer Science
              </h4>
              <p className="text-blue-light mb-2">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya
                <p className="text-sm">
                  {" "}
                  University in Bhopal, Madhya Pradesh{" "}
                </p>
              </p>
              <p className="text-gray-light/80 text-sm">
                2022 - 2026 • GPA: 7.04/10.0
              </p>
            </div>

            <div className="card-portfolio bg-navy-medium/50 backdrop-blur-sm p-6 border border-blue-accent/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                Certifications
              </h4>
              <ul className="space-y-1 text-sm text-gray-light/90">
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1735220427/Portfolio/Certificate/cv1k03nsvciu7kxax3dt.png"
                    className="text-blue-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • <span className="hover:underline">Networking Basic</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1753722034/Portfolio/Certificate/Screenshot_from_2025-07-28_22-30-20_rd7lwz.png"
                    className="text-blue-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • <span className="hover:underline">AWS Cloud Foundation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1725105660/Portfolio/Certificate/r1wcwbrthcqnjegrmddd.png"
                    className="text-blue-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • <span className="hover:underline">HackerRank Java</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1752781800/Portfolio/Certificate/BuildFest_fdhx9d.png"
                    className="text-blue-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • <span className="hover:underline">Build Fest'25</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1735220442/Portfolio/Certificate/lmdeae3obtzawm0r3cpm.png"
                    className="text-blue-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • <span className="hover:underline">Java Full Stack Development</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
