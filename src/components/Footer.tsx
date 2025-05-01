
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jeremy@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-portfolio-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">
            Jeremy Bravoge<span className="text-portfolio-blue">.</span>
          </h2>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-blue transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-center">
            <p className="mb-2">
              &copy; {currentYear} Jeremy Bravoge. All rights reserved.
            </p>
            <p className="text-sm">
              Web Manager Intern based in Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
