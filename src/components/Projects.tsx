
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";

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
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignments, and progress tracking. Built with React, Firebase, and Tailwind CSS.",
      tags: ["React", "Firebase", "Tailwind", "Redux"],
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "An interactive dashboard for healthcare professionals to monitor patient data, schedule appointments, and manage records. Built with React, TypeScript, and Chart.js.",
      tags: ["React", "TypeScript", "Chart.js", "REST API"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website (like this one!) built with React, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and contact form.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <Link className="text-portfolio-blue mb-4 h-8 w-8" />
          <h2 className="section-heading">My Projects</h2>
          <p className="text-portfolio-gray max-w-2xl">
            Here are some of my recent projects. Each project represents a unique challenge 
            and showcases different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border-none">
              <div className="aspect-video bg-gradient-to-br from-portfolio-blue/20 to-portfolio-light-blue/30 flex items-center justify-center">
                <div className="text-3xl font-bold text-portfolio-blue/40">
                  Project {project.id}
                </div>
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
