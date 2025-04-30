
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
            <div className="aspect-square rounded-lg overflow-hidden bg-portfolio-blue/10 flex items-center justify-center">
              {/* Replace with actual image when available */}
              <div className="text-6xl text-portfolio-blue">JD</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-portfolio-dark-blue mb-4">
              A passionate developer based in New York, USA
            </h3>
            <p className="text-portfolio-gray mb-6">
              I'm a full stack developer with 5+ years of experience in building 
              web applications. I specialize in JavaScript, React, Node.js, and modern 
              web technologies. My passion lies in creating intuitive user interfaces 
              and robust backend solutions.
            </p>
            <p className="text-portfolio-gray mb-6">
              Throughout my career, I've worked with startups and established companies 
              to deliver high-quality software that solves complex business problems. 
              I'm committed to writing clean, maintainable code and following best practices 
              in software development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Name:</p>
                <p className="text-portfolio-gray">John Doe</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Email:</p>
                <p className="text-portfolio-gray">john@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Location:</p>
                <p className="text-portfolio-gray">New York, USA</p>
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
