export default function EscritorioSection() {
  return (
    <div className="bg-light section-padding">
      <div className="container">
        
        {/* Parte 1: Especialidades */}
        <div className="specialties-area">
          <p className="subtitle">ESPECIALIDADES</p>
          <h2 className="section-title font-dupincel">Áreas de Atuação</h2>
          
          <div className="cards-grid">
            {/* Cards de placeholder - Adicione mais conforme a necessidade */}
            <div className="service-card">
              <h3>Direito Empresarial</h3>
              <p>Consultoria e assessoria para o seu negócio crescer com segurança.</p>
            </div>
            <div className="service-card">
              <h3>Direito de Família</h3>
              <p>Atendimento humanizado para resoluções de conflitos familiares.</p>
            </div>
            <div className="service-card">
              <h3>Direito Civil</h3>
              <p>Proteção do seu patrimônio e defesa dos seus direitos contratuais.</p>
            </div>
          </div>
        </div>

        {/* Parte 2: Escritório Físico */}
        <div className="office-area">
          <h2 className="section-title font-dupincel">Venha conhecer o escritório físico</h2>
          <div className="office-card">
            <h3>Ribeirão das Neves / MG</h3>
            <p>Av. Denise Cristina da Rocha, 1542 - São Januário (Justinópolis)</p>
            <p>Ribeirão das Neves - MG, 33900-702</p>
          </div>
        </div>

      </div>
    </div>
  );
}