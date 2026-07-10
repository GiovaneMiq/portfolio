import { certificates } from "@/data/portfolioData";

const Certificates = () => {
  return (
    <section id="certificados" className="py-20">
      <div className="max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certificados</h2>
        <div className="space-y-6">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-darker p-6 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/30"
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-light/60">{cert.institution}</p>
                </div>
                <span className="text-sm text-light/50">{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;