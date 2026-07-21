import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contato" className="py-24 bg-darker">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-32 items-center">

                {/* Lado esquerdo */}
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Contato
                    </h2>

                    <p className="text-lg text-light/80 mb-10 max-w-xl">
                        Ficarei feliz em conversar sobre tecnologia, oportunidades ou novos projetos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="mailto:giovanemiq@gmail.com" className="px-8 py-3 bg-primary text-dark rounded-full font-semibold hover:bg-secondary transition-colors">
                            Enviar Email
                        </a>
                    </div>
                </div>

                {/* Lado direito */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-primary text-2xl" />
                        <div>
                            <h3 className="font-semibold text-lg">E-mail</h3>
                            <p className="text-light/70">giovanemiq@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-primary text-2xl" />
                        <div>
                            <h3 className="font-semibold text-lg">Telefone</h3>
                            <p className="text-light/70">(15) 99798-4293</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-primary text-2xl" />
                        <div>
                            <h3 className="font-semibold text-lg">Localização</h3>
                            <p className="text-light/70">Votorantim - SP, Brasil</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;