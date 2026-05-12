import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="container hero-container">
        {/* Lado Esquerdo: Imagem da Advogada */}
        <div className="hero-image">
           {/* Substitua foto-eliane.png pela foto real recortada sem fundo na pasta public/img/ */}
          <Image 
            src="/img/fotos-eliane/foto5.png" 
            alt="Dra. Eliane Santiago" 
            width={500} 
            height={600} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Lado Direito: Copy e Botão */}
        <div className="hero-content">
          <h2 className="font-dupincel hero-quote">
            <span className="quote-marks">"</span>
            Defender direitos é mais do que profissão, é missão de vida.
          </h2>
          <a href="https://wa.me/553199918-4087" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            {/* Ícone do WhatsApp ao lado do texto */}
            <Image src="/img/icon/whatsapp.png" alt="WhatsApp" width={20} height={20} />
            Whatsapp
          </a>
        </div>
      </div>

      {/* Faixa de Indicadores Numéricos */}
      <div className="hero-stats">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="stat-number">+ 33 anos</span>
            <span className="stat-label">de experiência</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+10.000 anos</span>
            <span className="stat-label"> de clientes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+10.000</span>
            <span className="stat-label">casos</span>
          </div>
        </div>
      </div>
    </div>
  );
}