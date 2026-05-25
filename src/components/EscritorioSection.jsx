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
            <p className="subtitle">Venha conhecer o</p>
            <h2 className="section-title font-dupincel"><strong>ESCRITÓRIO FÍSICO</strong></h2>

            <div className="address-block">
              {/* Ícone de Localização (Pin) */}
              <div className="location-icon">
                <img src="/img/icon/location2.png" alt="Localização" className="social-icon" />
              </div>
              <div className="address-text">
                <h3>Ribeirão das Neves / MG</h3>
                <p>
                  Av. Denise Cristina da Rocha, 1542 - São Januário (Justinópolis)<br />
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
            <h2 className="section-title font-dupincel">ÁREAS DE <strong>ATUAÇÃO</strong></h2>
          </div>

          <div className="cards-grid">

            {/* Card 1 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitoimobiliario.png" alt="Direito Civil Imobiliário" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Imobiliário</h3>
            </div>

            {/* Card 2 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitofamilia.png" alt="Direito de Família" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito de Família e<br />Sucessões</h3>
            </div>

            {/* Card 3 */}
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitopenal.png" alt="Direito Penal" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Penal</h3>
            </div>
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitocivil.png" alt="Direito Penal" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Civil</h3>
            </div>
            <div className="specialty-image-card">
              <img src="/img/escritorio/direitortrabalhista.png" alt="Direito Penal" className="specialty-bg" />
              <div className="specialty-overlay"></div>
              <h3 className="specialty-title">Direito Trabalhista</h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}