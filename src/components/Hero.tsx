
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-amber-50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100 to-transparent" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-red-500 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-amber-500">
              <img 
                src="/lovable-uploads/60facd96-dc6b-419d-8c02-e77529c644d2.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full mb-4 font-medium text-sm transform transition-all duration-300 hover:scale-105 hover:bg-red-200">
              Computer Science Professional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 animate-pulse">Jeremy Bravoge</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
              Web Manager Intern
            </h2>
            <p className="text-lg text-portfolio-gray mb-8 max-w-2xl">
              I specialize in web management and software development with a strong computer science background.
              Currently based in Nairobi, Kenya, I'm passionate about creating impactful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 transform transition-all duration-300 hover:scale-105">
                Download CV
              </Button>
              <Button onClick={scrollToAbout} variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transform transition-all duration-300 hover:scale-105">
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
        <ArrowDown className="text-red-600" />
      </button>
    </section>
  );
};

export default Hero;
