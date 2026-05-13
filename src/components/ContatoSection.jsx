export default function ContatoSection() {
  return (
    <div className="bg-light section-padding">
      <div className="container">

        {/* Título fora das colunas, alinhado à esquerda */}
        <h2 className="contact-title">Entre em <strong>contato</strong></h2>

        <div className="contact-layout">

          {/* Coluna da Esquerda: Formulário */}
          <div className="contact-form-column">
            <form className="contact-form">
              {/* Sem <label> visível, usando apenas placeholders como no design */}
              <div className="form-group">
                <input type="text" id="nome" name="nome" required placeholder="nome" aria-label="Nome" />
              </div>

              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder="e-mail" aria-label="E-mail" />
              </div>

              <div className="form-group">
                <input type="tel" id="telefone" name="telefone" required placeholder="telefone(whatsapp)" aria-label="Telefone ou WhatsApp" />
              </div>

              <div className="form-group">
                <textarea id="mensagem" name="mensagem" required placeholder="mensagem" aria-label="Mensagem"></textarea>
              </div>

              <button type="submit" className="btn-submit">enviar</button>
            </form>
          </div>

          {/* Coluna da Direita: Redes Sociais */}
          <div className="contact-social-column">
            <h3>Redes Sociais</h3>
            <ul className="social-links-list">
              <li>
                <img src="img/icon/instagram.png" alt="Instagram" className="social-icon" />
                <span>@dra.elianesantiago</span>
              </li>
              <li>
                {/* Substitua o src pelos ícones reais que você tiver (SVGs ou PNGs) */}
                <img src="img/icon/whatsapp.png" alt="WhatsApp" className="social-icon" />
                <span>(31) 9 9918-4087</span>
              </li>
              <li>
                <img src="img/icon/email.png" alt="E-mail" className="social-icon" />
                <span>contatoelianesantiago@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}