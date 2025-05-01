
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Learning Platform",
      description: "Developed an intelligent learning management system that uses AI to personalize education content based on student performance and learning style.",
      tags: ["Python", "TensorFlow", "React", "MongoDB"],
    },
    {
      id: 2,
      title: "Health Monitoring System",
      description: "Created a comprehensive health monitoring application that tracks vital signs and provides real-time analytics for healthcare professionals.",
      tags: ["IoT", "Java", "SQL", "Data Analysis"],
    },
    {
      id: 3,
      title: "E-Commerce Solution",
      description: "Built a full-stack e-commerce platform with features like product catalog, user authentication, payment processing, and order management.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Implemented a secure and transparent voting system using blockchain technology to ensure the integrity of the electoral process.",
      tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <Code className="text-portfolio-blue mb-4 h-8 w-8" />
          <h2 className="section-heading">My Projects</h2>
          <p className="text-portfolio-gray max-w-2xl">
            Here are some of my notable computer science projects that demonstrate my technical 
            expertise and problem-solving approach in developing innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border-none">
              <div className="aspect-video bg-gradient-to-br from-portfolio-blue/20 to-portfolio-light-blue/30 flex items-center justify-center">
                {project.id === 3 && (
                  <img 
                    src="/lovable-uploads/23a3bde7-3c36-445e-bf71-729f62402af1.png" 
                    alt="Project Team" 
                    className="w-full h-full object-cover"
                  />
                )}
                {!project.image && project.id !== 3 && (
                  <div className="text-3xl font-bold text-portfolio-blue/40">
                    Project {project.id}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
