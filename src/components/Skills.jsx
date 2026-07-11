import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt } from "react-icons/fa";

const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Python", icon: FaPython },
    { name: "Git/GitHub", icon: FaGitAlt },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center p-5 bg-darker rounded-xl hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30"
            >
              <Icon className="w-10 h-10 mb-3 text-primary" />
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;