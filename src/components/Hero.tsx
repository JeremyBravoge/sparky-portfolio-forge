
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
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-light-blue/10 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-portfolio-blue font-medium mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark-blue mb-6">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-gray font-medium mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl">
            I design and build digital experiences that are intuitive, accessible, and impactful.
            Passionate about creating solutions that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              Download CV
            </Button>
            <Button onClick={scrollToAbout} variant="outline" className="btn-outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-portfolio-blue" />
      </button>
    </section>
  );
};

export default Hero;
