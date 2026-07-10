const Contact = () => {
    return (
        <section id="contato" className="py-20 bg-darker">
            <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contato</h2>
                <p className="text-lg text-light/80 mb-10 max-w-xl mx-auto">
                    Ficarei feliz em conversar sobre tecnologia, oportunidades ou novos projetos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="mailto:giovanemiq@gmail.com" className="px-8 py-3 bg-primary text-dark rounded-full font-semibold hover:bg-secondary transition-colors">
                        Enviar Email
                    </a>
                    <a href="https://github.com/GiovaneMiq" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-colors font-semibold">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/giovane-miqueloti-da-silva-a5554a345/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-colors font-semibold">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;