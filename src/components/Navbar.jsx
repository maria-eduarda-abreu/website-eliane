"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    // Estado para controlar se o menu mobile está aberto ou fechado
    const [menuAberto, setMenuAberto] = useState(false);

    // Função para alternar o estado do menu (abrir/fechar)
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    // Função para garantir que o menu feche ao clicar em um link
    const fecharMenu = () => {
        setMenuAberto(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">

                {/* Logo / Brand da Advogada */}
                <div className="nav-brand">
                    <Link href="/" onClick={fecharMenu}>
                        <h1>Dra. Eliane Santiago</h1>
                    </Link>
                </div>

                {/* Botão Hambúrguer para Mobile */}
                {/* A classe 'active' pode ser usada no seu CSS para animar o 'X' */}
                <button
                    className={`nav-toggle ${menuAberto ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Lista de Navegação */}
                {/* Se menuAberto for true, adiciona a classe 'active' para exibir no mobile */}
                <ul className={`nav-menu ${menuAberto ? 'active' : ''}`}>

                    {/* Links da Home (One-Page) */}
                    <li>
                        <Link href="/#inicio" onClick={fecharMenu}>
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link href="/#sobre" onClick={fecharMenu}>
                            Sobre Mim
                        </Link>
                    </li>
                    <li>
                        <Link href="/#escritorio" onClick={fecharMenu}>
                            Escritório
                        </Link>
                    </li>

                    {/* Link para a página isolada */}
                    <li>
                        <Link href="/acervo" onClick={fecharMenu}>
                            Acervo
                        </Link>
                    </li>

                    {/* Link para a seção de contato na Home */}
                    <li>
                        <Link href="/#contato" onClick={fecharMenu}>
                            Contato
                        </Link>
                    </li>

                    {/* Opcional: Ícones de redes sociais no menu (como no seu design PDF) */}
                    <li className="nav-social-icons">
                        {/* Substitua os links pelos reais da Dra. Eliane */}
                        <a href="https://wa.me/5531900000000" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            📱 {/* Substitua por um ícone SVG ou FontAwesome */}
                        </a>
                        <a href="https://instagram.com/dra.elianesantiago" target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>
                            📸 {/* Substitua por um ícone SVG ou FontAwesome */}
                        </a>
                        <a href="mailto:contatoelianesantiago@gmail.com" onClick={fecharMenu}>
                            ✉️ {/* Substitua por um ícone SVG ou FontAwesome */}
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}