import Image from "next/image";
import { projects } from "@/data/portfolioData";

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projetos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-light/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-light/80 hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-light/80 hover:text-primary transition-colors">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;