
import { Code } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "WordPress", level: 88 },
        { name: "React.js", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      title: "Web Management",
      skills: [
        { name: "Content Management", level: 92 },
        { name: "SEO", level: 85 },
        { name: "Analytics", level: 80 },
        { name: "Performance Optimization", level: 78 },
        { name: "User Experience", level: 88 },
      ],
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Data Structures", level: 83 },
        { name: "Algorithms", level: 80 },
        { name: "Database Systems", level: 85 },
        { name: "System Architecture", level: 70 },
        { name: "Version Control", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <Code className="text-portfolio-blue mb-4 h-8 w-8" />
          <h2 className="section-heading">My Skills</h2>
          <p className="text-portfolio-gray max-w-2xl">
            As a computer science professional and web manager intern, I've developed expertise 
            in various areas of web development, management, and computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-light-gray p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-portfolio-dark-blue mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-portfolio-dark-blue">{skill.name}</span>
                      <span className="text-portfolio-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-portfolio-blue h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
