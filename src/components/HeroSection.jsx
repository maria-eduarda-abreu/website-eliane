"use client"; // Necessário para usar animações e estados no Next.js

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Componente auxiliar que cria o efeito de roleta
const AnimatedNumber = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2500; // Tempo da animação em milissegundos (2.5 segundos)

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Curva de aceleração (começa rápido, termina devagar)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end]);

  return <span>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
};

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      
      {/* IMAGEM DE FUNDO (Alterado aqui para ocupar a tela toda) */}
      <div className="hero-image-full">
        <Image 
          src="/img/fotos-eliane/hero4.png" 
          alt="Dra. Eliane Santiago" 
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="font-dupincel hero-quote">
            <span className="quote-marks">"</span>
            Defender direitos é mais do que profissão, é missão de vida.
          </h2>
          
          {/* class corrigido para className */}
          <p className="linha-vertical">
            entre em contato conosco e <br/> garanta seus direitos
          </p>

          <a href="https://wa.me/5531999184087" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Image src="/img/icon/whatsappbranco.png" alt="WhatsApp" width={20} height={20} />
            Whatsapp
          </a>
        </div>
      </div>

      {/* PARTE DOS NÚMEROS MANTIDA INTACTA */}
      <div className="hero-stats">
        <div className="container stats-container">
          <div className="stat-item">
            {/* Chamando o componente animado */}
            <span className="stat-number"><AnimatedNumber end={33} prefix="+ " /> anos</span>
            <span className="stat-label">de experiência</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={10000} prefix="+" /></span>
            <span className="stat-label">clientes atendidos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={10000} prefix="+" /></span>
            <span className="stat-label">casos de sucesso</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}