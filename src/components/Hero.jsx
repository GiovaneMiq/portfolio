
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-40 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 animate-fade-in">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Giovane Miqueloti
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-light/80 mb-8 max-w-2xl mx-auto md:mx-0">
                        Estudante de ADS | Análise e Desenvolvimento de Sistemas
                    </p>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <a
                            href="https://github.com/GiovaneMiq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-7 h-7 text-light hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/giovane-miqueloti-da-silva-a5554a345/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-7 h-7 text-light hover:text-primary transition-colors" />
                        </a>
                        <a href="mailto:giovanemiq@gmail.com" aria-label="Email">
                            <FaEnvelope className="w-7 h-7 text-light hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0">
                    <Image
                        src="/perfil.jpg"
                        fill
                        priority
                        className="object-cover scale-[1.7] object-[48%_25%]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;