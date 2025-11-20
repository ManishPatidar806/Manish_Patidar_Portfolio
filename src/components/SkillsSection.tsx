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
        { name: "HTML5", level: 98, icon: <Html5Icon /> },
        { name: "CSS3", level: 95, icon: <Css3Icon /> },
        { name: "JavaScript (ES6+)", level: 95, icon: <JavascriptIcon /> },
        { name: "React.js", level: 95, icon: <ReactIcon /> },
        { name: "Tailwind CSS", level: 92, icon: <TailwindCssIcon /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85, icon: <JavaIcon /> },
        { name: "Spring Boot", level: 92, icon: <SpringBootIcon /> },
        { name: "Node.js", level: 92, icon: <NodeJsIcon /> },
        { name: "Express.js", level: 90, icon: <ExpressJsIcon /> },
        { name: "RESTful APIs", level: 93, icon: <RestApiIcon /> },
        { name: "MongoDB", level: 90, icon: <MongoDbIcon /> },
        { name: "MySql", level: 88, icon: <MySqlIcon /> },
        // { name: "GraphQL", level: 80, icon: <GraphQlIcon /> },
        { name: "JWT Auth", level: 88, icon: <JwtAuthIcon /> },
        // { name: "Socket.io", level: 85, icon: <SocketIoIcon /> }
      ],
    },
    // {
    //   title: "Database",
    //   skills: [
    //     { name: "MongoDB", level: 90, icon: <MongoDbIcon /> },
    //     { name: "MySql", level: 88, icon: <MySqlIcon /> },
    //     { name: "PostgreSQL", level: 75, icon: <PostgresqlIcon /> },
    //     // { name: "Redis", level: 70, icon: <RedisIcon /> }
    //   ],
    // },
    {
      title: "DevOps",
      skills: [
        { name: "Git & GitHub", level: 95, icon: <GitGithubIcon /> },
        { name: "AWS", level: 70, icon: <AwsIcon /> },
        { name: "Vercel", level: 90, icon: <VercelIcon /> },
        {name:"Docker",level:70,icon:<DockerIcon/>},
        {name:"Jenkins",level:70,icon:<Jenkins/>},
        {name:"Ansible",level:70,icon:<Ansible/>},
        {name:"SonarQube",level:70,icon:<Sonarqube/>},
        {name:"Nexus",level:70,icon:<Nexus/>},
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "VS Code", level: 98, icon: <VsCodeIcon /> },
        { name: "Postman", level: 92, icon: <PostmanIcon /> },
        { name: "Microservices", icon: <MicroservicesIcon /> },
        {name:"Maven",level:70,icon:<MavenIcon/>},
        {name:"Stripe",level:70,icon:<Stripe/>},
        {name:"Swagger",level:70,icon:<Swagger/>},
      ],
    },
  ];

  return (
    <section className="section-padding bg-navy-dark text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-blue-light">Stack</span>
          </h2>
          <p className="text-xl text-gray-light/80 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-portfolio bg-navy-medium/50 backdrop-blur-sm p-6 border border-blue-accent/20"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-light text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      {/* <span className="text-blue-light text-sm font-semibold">
                        {skill.level}%
                      </span> */}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-navy-dark/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-light">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "FastApi", icon: <FastApi /> },
              { name: "Langchain", icon: <Langchain /> },
              { name: "Kubernetes", level: 75, icon: <KubernetesIcon /> },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-accent/20 rounded-full border border-blue-accent/30 hover:bg-blue-accent/30 transition-colors duration-300"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
