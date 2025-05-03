import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const About = () => {
  const teamMembers = [{
    name: "Jacob Kisato",
    role: "Film Instructor",
    image: "/lovable-uploads/c38d8635-d5cf-4a9c-a985-b84e563ea765.png",
    description: "As a photography teacher, I blend technical mastery with artistic vision. I don't just teach camera use—I inspire students to see creatively, tell stories through imagery, and unlock their full potential."
  }, {
    name: "Samuel Onditi",
    role: "Computer Instructor",
    image: "/lovable-uploads/3afb2ee8-32da-484a-b5a7-4fa7efe50afa.png",
    description: "I'm a computer teacher with a passion for two things: empowering lives through digital skills and drawing hearts closer to God. Every class is more than just tech—it's purpose, impact, and faith in action."
  }, {
    name: "Jeremy Bravoge",
    role: "Computer Instructor",
    image: "/lovable-uploads/b65b4358-ad5e-42ce-b7de-21ef0e3be920.png",
    description: "A passionate and dedicated Computer Teacher with a focus on empowering students through practical skills. Experienced in delivering engaging lessons on computer literacy."
  }];
  return <section id="about" className="section-padding bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <User className="text-red-600 mb-4 h-8 w-8 animate-bounce" />
          <h2 className="section-heading after:bg-red-600">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-amber-200 to-red-200 rounded-lg p-1 transform hover:scale-105 transition-all duration-300">
            <div className="rounded-lg overflow-hidden flex items-center justify-center">
              <img alt="Professional Photo" src="/lovable-uploads/db6567a6-4142-4cbb-b457-f89cda709d20.jpg" className="w-full h-auto rounded-lg object-scale-down" />
            </div>
          </div>
          
          <div className="animate-fade-in">
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
          <h3 className="text-2xl font-bold text-center mb-10 text-slate-800">My Inspiring Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => <div key={member.name} className="bg-gradient-to-br from-red-50 to-amber-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-200 mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-full object-scale-down" />
                  </div>
                  <div className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full mb-2">
                    {member.role}
                  </div>
                  <h4 className="font-bold text-xl text-slate-800 mb-2">{member.name}</h4>
                  <p className="text-portfolio-gray">
                    {member.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;