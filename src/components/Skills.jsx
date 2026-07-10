const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Git/GitHub" },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-5 bg-darker rounded-xl hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30"
            >
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;