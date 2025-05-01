
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <User className="text-portfolio-blue mb-4 h-8 w-8" />
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-portfolio-light-gray rounded-lg p-1">
            <div className="rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/f6c3ac9c-a79d-446f-abed-6eeb0c83f3b2.png" 
                alt="Professional Photo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-portfolio-dark-blue mb-4">
              A passionate Computer Scientist based in Kenya
            </h3>
            <p className="text-portfolio-gray mb-6">
              I'm a dedicated computer science professional with expertise in software development,
              system design, and technology implementation. I have a strong foundation in programming 
              languages and modern development frameworks, allowing me to create robust solutions for 
              complex problems.
            </p>
            <p className="text-portfolio-gray mb-6">
              Throughout my career, I've worked on various projects that have enhanced my skills in 
              web development, mobile applications, and system architecture. I'm committed to continuous 
              learning and staying updated with the latest technological advancements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Name:</p>
                <p className="text-portfolio-gray">David Kariuki</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Email:</p>
                <p className="text-portfolio-gray">david@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Location:</p>
                <p className="text-portfolio-gray">Kenya</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Availability:</p>
                <p className="text-portfolio-gray">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
