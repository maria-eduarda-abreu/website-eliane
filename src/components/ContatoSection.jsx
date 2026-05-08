export default function ContatoSection() {
  return (
    <div className="container section-padding">
      <h2 className="section-title font-dupincel">Entre em contato</h2>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nome">Nome *</label>
            <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone (WhatsApp) *</label>
            <input type="tel" id="telefone" name="telefone" required placeholder="(31) 90000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem *</label>
            <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Como podemos ajudar?"></textarea>
          </div>

          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}