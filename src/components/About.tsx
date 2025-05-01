
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
                src="/lovable-uploads/60facd96-dc6b-419d-8c02-e77529c644d2.png" 
                alt="Professional Photo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-portfolio-dark-blue mb-4">
              A Computer Science Professional based in Nairobi, Kenya
            </h3>
            <p className="text-portfolio-gray mb-6">
              I'm a skilled computer science professional with experience in web management and development. 
              Currently completing an internship as a Web Manager, I bring technical expertise and creative problem-solving 
              to digital projects.
            </p>
            <p className="text-portfolio-gray mb-6">
              My background in computer science has equipped me with strong analytical skills and 
              technical knowledge that I apply to create efficient and user-friendly web solutions. 
              I'm passionate about using technology to solve real-world problems in Kenya's growing tech ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Name:</p>
                <p className="text-portfolio-gray">Jeremy Bravoge</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Email:</p>
                <p className="text-portfolio-gray">codemaster5362@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Phone:</p>
                <p className="text-portfolio-gray">0115000514</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Location:</p>
                <p className="text-portfolio-gray">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="font-semibold text-portfolio-dark-blue">Position:</p>
                <p className="text-portfolio-gray">Web Manager Intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
