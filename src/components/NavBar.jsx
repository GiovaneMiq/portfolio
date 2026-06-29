"use client"; // porque usaremos useState e useEffect

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-darker/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nome */}
          <Link href="#hero" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
            SeuNome
          </Link>

          {/* Links de navegação */}
          <div className="hidden md:flex space-x-8">
            {["Sobre", "Habilidades", "Projetos", "Certificados", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-light/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Menu mobile (simplificado) */}
          <div className="md:hidden">
            {/* Futuramente podemos adicionar um ícone de hambúrguer */}
            <span className="text-light">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;