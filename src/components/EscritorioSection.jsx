export default function EscritorioSection() {
  return (
    <div className="bg-light section-padding">
      <div className="container">

        {/* Parte 1: Escritório Físico (Layout Dividido com Galeria) */}
        <div className="office-section">
          
          {/* Colagem de Fotos (Esquerda) */}
          <div className="office-gallery">
            <img src="/img/escritorio/sala.png" alt="Mesa de atendimento" className="gallery-img tall" />
            <div className="gallery-right-column">
              <img src="/img/escritorio/recepcao.png" alt="Recepção" className="gallery-img top" />
              <img src="/img/escritorio/espera.png" alt="Sala de espera" className="gallery-img bottom" />
            </div>
          </div>

          {/* Informações de Contato (Direita) */}
          <div className="office-info">
            <p className="subtitle">Venha conhecer</p>
            <h2 className="section-title font-dupincel">o <strong>escritório físico</strong></h2>
            
            <div className="address-block">
              {/* Ícone de Localização (Pin) */}
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              </div> 
              <div className="address-text">
                <h3>Ribeirão das Neves / MG</h3>
                <p>
                  Av. Denise Cristina da Rocha, 1542 - São Januário (Justinópolis)<br/>
                  Ribeirão das Neves - MG, 33900-702
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parte 2: Especialidades (Cards com Imagem de Fundo) */}
        <div className="specialties-area">
          <div className="specialties-header">
            <p className="subtitle">ESPECIALIDADES</p>
            <h2 className="section-title font-dupincel">Áreas de <strong>Atuação</strong></h2>
          </div>

          <div className="cards-grid">
            
            {/* Card 1 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitoimobiliario.png" alt="Direito Civil Imobiliário" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Civil e<br/>Imobiliária</h3>
            </div>

            {/* Card 2 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitofamilia.png" alt="Direito de Família" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito de Família e<br/>Sucessões</h3>
            </div>

            {/* Card 3 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitopenal.png" alt="Direito Penal" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Penal</h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}