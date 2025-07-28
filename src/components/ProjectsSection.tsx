import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import tijori from "@/assets/Tijori.png";
import gameingZone from "@/assets/GameingZone.png";
import thinkAndSelect from "@/assets/ThinkAndSelect.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Tijori",
      description: "Tijor is an expense tracker mobile application that helps manage monthly expenses and generates a report at the end of the month.",
      image: tijori,
      technologies: ["Flutter", "Spring Boot", "MySql", "Firebase", "JWT"],
      liveLink: "https://www.youtube.com/watch?v=wlA9ZibAPj8",
      githubLink: "https://github.com/ManishPatidar806/Tijori",
      featured: true
    },
    {
      id: 2,
      title: "Gameingzone",
      description: "Gameingzone is a scalable gaming e-commerce site using microservices, offering all features of e-commerce.",
      image: gameingZone,
      technologies: ["React", "Tailwind CSS", "Spring Boot", "Stripe", "JWT", "Mail", "Flowbite", "MicroService-architecture"],
      liveLink: "https://gameingzone.vercel.app/",
      githubLink: "https://github.com/ManishPatidar806/GameingZone_MicroService",
      featured: true
    },
    {
      id: 3,
      title: "ThinkAndSelect",
      description: "ThinkandSelect is a quiz app offering practice and exam modes, certificates, notes, tutorials, and a multi-language online compiler",
      image: thinkAndSelect,
      technologies: ["React", "Spring Boot", "Tailwind CSS", "MySql", "Cloudinary", "JWT"],
      liveLink: "https://thinkandselect.vercel.app/",
      githubLink: "https://github.com/ManishPatidar806/ThinkAndSelect",
      featured: true
    },
    // {
    //   id: 4,
    //   title: "Task Management System",
    //   description: "Collaborative task management application with team features, real-time updates, and project tracking capabilities.",
    //   image: projectDashboard,
    //   technologies: ["React", "Express", "MongoDB", "Socket.io", "Material-UI"],
    //   liveLink: "https://taskmanager-demo.com",
    //   githubLink: "https://github.com/alexjohnson/task-manager",
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: "Weather Forecast App",
    //   description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image: projectDashboard,
    //   technologies: ["React", "Node.js", "OpenWeather API", "MongoDB", "Leaflet"],
    //   liveLink: "https://weather-demo.com",
    //   githubLink: "https://github.com/alexjohnson/weather-app",
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: "Blog Platform",
    //   description: "Feature-rich blog platform with markdown editor, comment system, and SEO optimization. Built for content creators.",
    //   image: projectSocial,
    //   technologies: ["React", "Node.js", "MongoDB", "Quill.js", "Express"],
    //   liveLink: "https://blog-demo.com",
    //   githubLink: "https://github.com/alexjohnson/blog-platform",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-blue-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-portfolio group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm"
                    className="btn-hero"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-navy-dark"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blue-accent/10 text-blue-accent rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="card-portfolio group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-accent transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="p-2 h-auto"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="p-2 h-auto"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* View More Projects CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero"
            onClick={() => window.open('https://github.com/manishpatidar806', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
