
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
      url: "https://www.facebook.com/profile.php?id=100094417877954",
      icon: Facebook,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jeremybravoge",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url:"https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsys.deve%3Figsh%3DYXdqNnZiNnI2MnYx%26fbclid%3DIwZXh0bgNhZW0CMTAAAR5Kss5AyAdfrA3CqT6oTiev-3m2QwrtKu_DfiY4-VcPljeFeoNLEokBigF6Ow_aem_a5jD0AHqou_botrSaSkX3A&h=AT3yw0GQ-J139_kGi2jJ3l4h2OZeuSkWLf9aaYe8U-q8gWH7jZvpguPBZPdYdstrBnBYEeQy1358xkNq7NcEIpfqJqVdBU3EbBqP2lxV4tYOOCEiVnAFNbOAZEyDBAIg2m7NKw",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">
            Jeremy Bravoge<span className="text-purple-400">.</span>
          </h2>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
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
