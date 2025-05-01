
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <User className="text-purple-600 mb-4 h-8 w-8" />
          <h2 className="section-heading after:bg-purple-600">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-lg p-1">
            <div className="rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="public/lovable-uploads/ccaee9c8-5c23-4115-92bc-a056d69e35e3-removebg-preview.png" 
                alt="Professional Photo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
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
                <p className="font-semibold text-slate-800">Name:</p>
                <p className="text-portfolio-gray">Jeremy Bravoge</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Email:</p>
                <p className="text-portfolio-gray">codemaster5362@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Phone:</p>
                <p className="text-portfolio-gray">0115000514</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Location:</p>
                <p className="text-portfolio-gray">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Position:</p>
                <p className="text-portfolio-gray">Web Manager Intern</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-slate-800">My Collaborators</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-md max-w-md">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 border-4 border-purple-200 mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43" alt="Collaborator" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h4 className="font-bold text-xl text-slate-800 mb-2"></h4>
                <p className="text-purple-600 mb-4">Full Stack Developer</p>
                <p className="text-portfolio-gray mb-6">
                  A talented developer who collaborates with me on various web projects, 
                  bringing expertise in backend development and database management.
                </p>
                <div className="flex space-x-4 text-gray-500">
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
