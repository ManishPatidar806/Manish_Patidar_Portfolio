import { Calendar, Link, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "AveryBit Solutions Pvt. Ltd.",
      role: "Software Developer intern",
      duration: "August 2025 - November 2025",
      location: "Indore, Madhya Pradesh",
      type: "Internship",
      description: [
        "Built an enterprise-level chatbot system using Langflow and LangChain to automate and enhance communication workflows",
        "Designed conversation flows, integrated APIs, and connected the chatbot with relevant knowledge bases.",
        "Developed a full-stack web platform connecting families and caregivers with role-based access and secure authentication.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Expressjs", "LangChain", "LangGraph"],
      current: false,
    },

  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-sm sm:text-xl text-gray-light/80 max-w-2xl mx-auto px-2">
            My journey through the tech industry and the experiences that shaped my skills
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-accent mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="card-portfolio group relative bg-navy-medium/50 backdrop-blur-sm border border-blue-accent/20 hover:border-blue-500 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Side accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-accent rounded-l-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="p-4 sm:p-6 md:p-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      {experience.current && (
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-500 text-white text-[10px] sm:text-xs rounded-full flex items-center gap-1">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3">
                      {experience.company}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-light/80 bg-navy-dark/50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{experience.duration}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-light/80 bg-navy-dark/50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 bg-blue-accent/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30">
                    {experience.type}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {experience.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-light/90 flex items-start group/item text-xs sm:text-base">
                        <span className="text-blue-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 font-bold group-hover/item:scale-125 transition-transform flex-shrink-0">▸</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-gray-light/60 mb-2 sm:mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-4 sm:py-2 bg-navy-medium/80 hover:bg-blue-accent/20 text-gray-light hover:text-blue-400 rounded-lg text-[10px] sm:text-sm font-medium border border-blue-accent/20 hover:border-blue-500/50 transition-all duration-300 cursor-default"
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
        <div className="mt-12 sm:mt-20">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500 flex items-center">
            <span className="mr-2 sm:mr-3">Education & Certifications</span>
            <div className="flex-1 h-px bg-blue-accent/30"></div>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Education Card */}
            <div className="card-portfolio group relative bg-navy-medium/50 backdrop-blur-sm border border-blue-accent/20 hover:border-blue-500 p-4 sm:p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-accent rounded-l-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="mb-3">
                <h4 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300 mb-2 sm:mb-3">
                  Bachelor of Technology in Computer Science
                </h4>
                <p className="text-blue-400 font-semibold mb-1 text-sm sm:text-base">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya
                </p>
                <p className="text-xs sm:text-sm text-gray-light/70 mb-2 sm:mb-3">
                  University in Bhopal, Madhya Pradesh
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-blue-accent/20">
                <span className="text-xs sm:text-sm text-gray-light/80">2022 - 2026</span>
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-accent/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30">
                  GPA: 7.04/10.0
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="card-portfolio group relative bg-navy-medium/50 backdrop-blur-sm border border-blue-accent/20 hover:border-blue-500 p-4 sm:p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-accent rounded-l-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <h4 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300 mb-3 sm:mb-4">
                Certifications
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1753722034/Portfolio/Certificate/Screenshot_from_2025-07-28_22-30-20_rd7lwz.png"
                    className="group/link flex items-start text-gray-light/90 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 mr-2 font-bold group-hover/link:scale-125 transition-transform">▸</span>
                    <span className="group-hover/link:underline">AWS Cloud Foundation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1763630010/Portfolio/Certificate/DSA_Nptel.png"
                    className="group/link flex items-start text-gray-light/90 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 mr-2 font-bold group-hover/link:scale-125 transition-transform">▸</span>
                    <span className="group-hover/link:underline">DSA Using Java - NPTEL</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1735220427/Portfolio/Certificate/cv1k03nsvciu7kxax3dt.png"
                    className="group/link flex items-start text-gray-light/90 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 mr-2 font-bold group-hover/link:scale-125 transition-transform">▸</span>
                    <span className="group-hover/link:underline">Networking Basic</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1725105660/Portfolio/Certificate/r1wcwbrthcqnjegrmddd.png"
                    className="group/link flex items-start text-gray-light/90 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 mr-2 font-bold group-hover/link:scale-125 transition-transform">▸</span>
                    <span className="group-hover/link:underline">HackerRank Java</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://res.cloudinary.com/dps3eybtx/image/upload/v1752781800/Portfolio/Certificate/BuildFest_fdhx9d.png"
                    className="group/link flex items-start text-gray-light/90 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 mr-2 font-bold group-hover/link:scale-125 transition-transform">▸</span>
                    <span className="group-hover/link:underline">Build Fest'25</span>
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
