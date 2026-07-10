import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <div className="relative w-32 h-32 mx-auto mb-8">
                    <Image
                        src="/perfil.jpg"
                        fill
                        className="rounded-full object-cover border-4 border-primary shadown-lg"
                        priority
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Olá, eu sou{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Giovane Miqueloti
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-light/80 mb-8 max-w-2xl mx-auto">
                    Estudante de ADS | Apaixonado por tecnologia e desenvolvimento 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://github.com/GiovaneMiq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-colors font-semibold"
                    >
                        Linkedin
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;