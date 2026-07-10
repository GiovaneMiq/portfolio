const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "python", icon: "🐍" },
    { name: "Git/GitHub", icon: "📁" },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-darker rounded-xl hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;