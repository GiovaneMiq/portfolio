const Footer = () => {
    return (
        <footer className="py-8 border-t border-primary/10">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm text-light/50">
                <p>© {new Date().getFullYear()} Giovane Miqueloti. Todos os direitos reservados.</p>
                <p className="mt-1">Construído com Next.js & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;