import { Calendar, Link, MapPin } from "lucide-react";

const ExperienceSection = () => {
  // const experiences = [
  //   {
  //     id: 1,
  //     company: "TechStart Solutions",
  //     role: "Senior Full Stack Developer",
  //     duration: "January 2023 - Present",
  //     location: "San Francisco, CA",
  //     type: "Full-time",
  //     description: [
  //       "Led development of a microservices-based e-commerce platform serving 100K+ users",
  //       "Implemented CI/CD pipelines reducing deployment time by 60%",
  //       "Mentored 3 junior developers and conducted code reviews",
  //       "Architected RESTful APIs using Node.js and Express.js with 99.9% uptime",
  //     ],
  //     technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Redis"],
  //     current: true,
  //   },
  //   {
  //     id: 2,
  //     company: "Digital Innovations Inc.",
  //     role: "Full Stack Developer",
  //     duration: "June 2021 - December 2022",
  //     location: "Remote",
  //     type: "Full-time",
  //     description: [
  //       "Developed and maintained 5+ client web applications using MERN stack",
  //       "Optimized database queries resulting in 40% performance improvement",
  //       "Collaborated with UX/UI team to implement responsive designs",
  //       "Integrated third-party APIs including payment gateways and social media platforms",
  //     ],
  //     technologies: ["React", "Express.js", "MongoDB", "Stripe", "Socket.io"],
  //     current: false,
  //   },
  //   {
  //     id: 3,
  //     company: "StartupXYZ",
  //     role: "Frontend Developer",
  //     duration: "August 2020 - May 2021",
  //     location: "Austin, TX",
  //     type: "Full-time",
  //     description: [
  //       "Built responsive web applications using React and modern JavaScript",
  //       "Implemented state management solutions with Redux and Context API",
  //       "Collaborated with backend team to design and consume RESTful APIs",
  //       "Participated in daily standups and sprint planning in Agile environment",
  //     ],
  //     technologies: ["React", "Redux", "JavaScript", "CSS3", "Git"],
  //     current: false,
  //   },
  //   {
  //     id: 4,
  //     company: "Freelance",
  //     role: "Web Developer",
  //     duration: "January 2020 - July 2020",
  //     location: "Remote",
  //     type: "Contract",
  //     description: [
  //       "Delivered 8+ custom websites for small businesses and startups",
  //       "Provided end-to-end development from design to deployment",
  //       "Implemented SEO best practices resulting in improved search rankings",
  //       "Maintained client relationships and provided ongoing technical support",
  //     ],
  //     technologies: ["React", "Node.js", "WordPress", "PHP", "MySQL"],
  //     current: false,
  //   },
  // ];

  return (
    <section className="section-padding bg-navy-dark text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-blue-light"> & Certifications</span>
          </h2>
        </div>

        {/* Education Section */}
        <div className="mt-20">
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
