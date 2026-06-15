"use client"; // Necessário para controlar o estado da página

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    // Detecta a rolagem da página
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Função para abrir/fechar o menu no botão hambúrguer
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    // Função para fechar o menu ao clicar em um link
    const fecharMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
            <div className="nav-container">

                {/* LOGO */}
                <Link href="/" className="logo" onClick={fecharMenu}>
                    <Image
                        src="/img/logo5.png"
                        alt="Logo Dra. Eliane Santiago"
                        width={200}
                        height={60}
                        className="logo-img"
                    />
                </Link>

                {/* MENU */}
                <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
                    <li><Link href="/" onClick={fecharMenu}>INÍCIO</Link></li>
                    <li><Link href="#sobre" onClick={fecharMenu}>SOBRE MIM</Link></li>
                    <li><Link href="#escritorio" onClick={fecharMenu}>ESCRITÓRIO</Link></li>
                    <li><Link href="/acervo" onClick={fecharMenu}>ACERVO</Link></li>
                    <li><Link href="#contato" onClick={fecharMenu}>CONTATO</Link></li>

                    {/* ÍCONES SOCIAIS NO MENU (CORRIGIDOS COM A CLASSE) */}
                    <li className="nav-social-icons">
                        <a href="https://api.whatsapp.com/send?phone=5531999184087&text=Ol%C3%A1%2C%20Tudo%20bem!%0A" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/whatsapp.png" alt="WhatsApp" width={24} height={24} className="social-icon-nav" />
                        </a>
                        <a href="mailto:contato.draelianesantiago@gmail.com" onClick={fecharMenu}>
                            <Image src="/img/icon/email.png" alt="Email" width={24} height={24} className="social-icon-nav" />
                        </a>
                        <a href="https://www.instagram.com/dra.elianesantiago/" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/instagram.png" alt="Instagram" width={24} height={24} className="social-icon-nav" />
                        </a>
                        <a href="https://www.youtube.com/@dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/youtube.png" alt="YouTube" width={24} height={24} className="social-icon-nav" />
                        </a>
                        <a href="https://www.facebook.com/dra.elianesantiago?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/facebook.png" alt="Facebook" width={24} height={24} className="social-icon-nav" />
                        </a>
                        <a href="https://www.tiktok.com/@dra.elianesantiago?_t=8n73LGbvoSk&_r=1" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/tiktok.png" alt="TikTok" width={24} height={24} className="social-icon-nav" />
                        </a>
                    </li>
                </ul>

                {/* BOTÃO HAMBÚRGUER (MOBILE) */}
                <button className={`nav-toggle ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </nav>
    );
}