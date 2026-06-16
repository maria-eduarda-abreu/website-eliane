import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Coluna 1: Logo */}
        <div className="footer-logo">
          <Link href="/#inicio">
            <Image
              src="/img/logo4.png"
              alt="Logo Dra. Eliane Santiago"
              width={200}
              height={60}
              className="footer-img"
            />
          </Link>
        </div>

        {/* Coluna 2: Localização */}
        <div className="footer-address">
          <h3>Ribeirão das Neves / MG</h3>
          <p>Av. Denise Cristina da Rocha, 1542 - São Januário (Justinópolis)</p>
          <p>Ribeirão das Neves - MG, 33900-702</p>
        </div>

        {/* Coluna 3: Redes Sociais e Contatos */}
        <div className="footer-contact">
          <h3>Redes Sociais</h3>
          <div className="footer-social-icons">
            <a href="https://api.whatsapp.com/send?phone=5531999184087&text=Ol%C3%A1%2C%20Tudo%20bem!%0A" target="_blank" rel="noopener noreferrer">
              {/* Substitua pelos caminhos dos seus ícones se tiverem nomes diferentes */}
              <Image src="/img/icon/whatsapp.png" alt="WhatsApp" width={24} height={24} />
            </a>
            <a href="https://instagram.com/dra.elianesantiago" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="mailto:contatoelianesantiago@gmail.com">
              <Image src="/img/icon/email.png" alt="Email" width={24} height={24} />
            </a>
            <a href="https://www.youtube.com/@dra.elianesantiago" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon/youtube.png" alt="Youtube" width={24} height={24} />
            </a>
            <a href="https://www.facebook.com/dra.elianesantiago?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon/facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.tiktok.com/@dra.elianesantiago?_t=8n73LGbvoSk&_r=1" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon/tiktok.png" alt="TikTok" width={24} height={24} />
            </a>
          </div>
          <a href="mailto:contatoelianesantiago@gmail.com" className="footer-email">
            contatoelianesantiago@gmail.com
          </a>
          <p>(31) 9 9918-4087</p>
        </div>

      </div>

      {/* Faixa Amarela Inferior */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2026 Dra. Eliane Santiago - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}