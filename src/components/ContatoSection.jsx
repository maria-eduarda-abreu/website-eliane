"use client";

import { useState } from "react";

export default function ContatoSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede a página de recarregar
    setStatus("enviando");

    const form = e.target;
    const formData = new FormData(form);

    // Configurações extras para o e-mail chegar bonitinho
    formData.append("_captcha", "false"); // Tira o captcha automático
    formData.append("_subject", "Novo contato pelo site - Dra. Eliane"); // Assunto do e-mail
    formData.append("_template", "table"); // Formata o e-mail como uma tabela

    try {
      // Substitua pelo e-mail real da Dra. Eliane
      const response = await fetch("https://formsubmit.co/ajax/contatoelianesantiago@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("sucesso");
        form.reset(); // Limpa os campos do formulário
        
        // Volta o botão ao normal depois de 5 segundos
        setTimeout(() => setStatus(""), 5000); 
      } else {
        setStatus("erro");
      }
    } catch (error) {
      setStatus("erro");
    }
  };

  return (
    <div className="bg-light section-padding">
      <div className="container">
        
        <h2 className="contact-title">Entre em <strong>contato</strong></h2>
        
        <div className="contact-layout">
          
          <div className="contact-form-column">
            {/* Adicionamos o onSubmit aqui */}
            <form className="contact-form" onSubmit={handleSubmit}>
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

              {/* O botão muda de cor e texto dependendo do status do envio */}
              <button 
                type="submit" 
                className="btn-submit"
                disabled={status === "enviando"}
                style={{
                  backgroundColor: status === "sucesso" ? "#25D366" : "", // Fica verde se der sucesso
                  color: status === "sucesso" ? "white" : "",
                  cursor: status === "enviando" ? "not-allowed" : "pointer"
                }}
              >
                {status === "enviando" ? "enviando..." : status === "sucesso" ? "mensagem enviada!" : status === "erro" ? "erro ao enviar. tente o whatsapp." : "enviar"}
              </button>
            </form>
          </div>

          <div className="contact-social-column">
            <h3>Redes Sociais</h3>
            <ul className="social-links-list">
              <a href="https://api.whatsapp.com/send?phone=5531999184087&text=Ol%C3%A1%2C%20Tudo%20bem!%0A" target="_blank" rel="noopener noreferrer">
                <li>
                  <img src="/img/icon/whatsapp.png" alt="WhatsApp" className="social-icon" />
                  <span>(31) 9 9918-4087</span>
                </li>
              </a>
              <a href="mailto:contato.draelianesantiago@gmail.com" target="_blank" rel="noopener noreferrer">
                <li>
                  <img src="/img/icon/email.png" alt="E-mail" className="social-icon" />
                  <span>contato.draelianesantiago@gmail.com</span>
                </li>
              </a>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}