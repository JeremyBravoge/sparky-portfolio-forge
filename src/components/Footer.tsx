
import { Facebook, Instagram, Twitter, Linkedin, User } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/jeremybravoge",
      icon: Facebook,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jeremybravoge",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jeremybravoge",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-red-600 to-amber-500 text-white py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">
            Jeremy Bravoge<span className="text-yellow-400">.</span>
          </h2>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 duration-200"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="text-white text-center">
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
