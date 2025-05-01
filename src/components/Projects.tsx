
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
      title: "Corporate Website Redesign",
      description: "Led the redesign of the company website, improving user experience and increasing mobile responsiveness by 40% while managing content migration.",
      tags: ["WordPress", "UI/UX", "Content Management", "SEO"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "E-commerce Integration",
      description: "Implemented an e-commerce solution for client products, coordinating between development team and stakeholders to ensure timely delivery and functionality.",
      tags: ["WooCommerce", "Payment Gateway", "Product Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 3,
      title: "Web Analytics Dashboard",
      description: "Created a comprehensive analytics dashboard for tracking website performance, user behavior, and conversion metrics to support data-driven decision making.",
      tags: ["Google Analytics", "Data Visualization", "Reporting"],
      image:"public/lovable-uploads/web analytics.png ",
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      description: "Managed the web components of a multi-channel marketing campaign, including landing pages, form integrations, and tracking implementation.",
      tags: ["Landing Pages", "Forms", "Campaign Tracking"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <Code className="text-purple-600 mb-4 h-8 w-8" />
          <h2 className="section-heading">My Projects</h2>
          <p className="text-portfolio-gray max-w-2xl">
            Here are some of my notable web management projects that demonstrate my 
            technical skills and ability to deliver effective digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border-none shadow-md">
              <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-blue-300/30 flex items-center justify-center">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {!project.image && (
                  <div className="text-3xl font-bold text-purple-600/40">
                    Project {project.id}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
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
            className="btn-outline inline-flex items-center space-x-2 border-purple-600 text-purple-600 hover:bg-purple-600"
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
