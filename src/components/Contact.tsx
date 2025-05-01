
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "codemaster5362@gmail.com",
      link: "mailto:codemaster5362@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0115000514",
      link: "tel:0115000514",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <Mail className="text-portfolio-blue mb-4 h-8 w-8" />
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-portfolio-gray max-w-2xl">
            Feel free to reach out if you have any questions, or if you'd like to 
            collaborate on a project. I'm always open to new opportunities and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4"
              >
                <div className="bg-portfolio-blue/10 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-dark-blue mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-portfolio-gray">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <form 
              onSubmit={handleSubmit} 
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="btn-primary w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
