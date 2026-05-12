"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const fecharMenu = () => {
        setMenuAberto(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">

                {/* Logo */}
                <div className="nav-brand">
                    <Link href="/" onClick={fecharMenu}>
                        <Image
                            src="/img/logo2.png"
                            alt="Logo Dra. Eliane Santiago"
                            width={250}
                            height={70}
                            priority
                            className="logo-img" /* Classe importante para ajustar o tamanho */
                        />
                    </Link>
                </div>

                {/* Botão Hambúrguer (Mobile) */}
                <button
                    className={`nav-toggle ${menuAberto ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menu de Navegação */}
                <ul className={`nav-menu ${menuAberto ? 'active' : ''}`}>
                    <li><Link href="/#inicio" onClick={fecharMenu}>INÍCIO</Link></li>
                    <li><Link href="/#sobre" onClick={fecharMenu}>SOBRE MIM</Link></li>
                    <li><Link href="/#escritorio" onClick={fecharMenu}>ESCRITÓRIO</Link></li>
                    <li><Link href="/acervo" onClick={fecharMenu}>ACERVO</Link></li>
                    <li><Link href="/#contato" onClick={fecharMenu}>CONTATO</Link></li>

                    {/* Ícones das Redes Sociais */}
                    <li className="nav-social-icons">
                        <a href="https://wa.me/5531900000000" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                        </a>
                        <a href="mailto:contatoelianesantiago@gmail.com" onClick={fecharMenu}>
                            <Image src="/img/icon/email.png" alt="Email" width={24} height={24} />
                        </a>
                        <a href="https://instagram.com/dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/instagram.png" alt="Instagram" width={24} height={24} />
                        </a>
                        <a href="https://youtube.com/dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/youtube.png" alt="YouTube" width={24} height={24} />
                        </a>
                        <a href="https://facebook.com/dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/facebook.png" alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://tiktok.com/@dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            <Image src="/img/icon/tiktok.png" alt="TikTok" width={24} height={24} />
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}