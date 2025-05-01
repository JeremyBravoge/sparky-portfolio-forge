
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
              <img 
                src="/lovable-uploads/60facd96-dc6b-419d-8c02-e77529c644d2.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full mb-4 font-medium text-sm">
              Computer Science Professional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Jeremy Bravoge</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
              Web Manager Intern
            </h2>
            <p className="text-lg text-portfolio-gray mb-8 max-w-2xl">
              I specialize in web management and software development with a strong computer science background.
              Currently based in Nairobi, Kenya, I'm passionate about creating impactful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Download CV
              </Button>
              <Button onClick={scrollToAbout} variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-purple-600" />
      </button>
    </section>
  );
};

export default Hero;
