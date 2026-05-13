export default function SobreSection() {
  return (
    <div className="container section-padding">
      <h2 className="section-title font-dupincel">Sobre mim</h2>

      <div className="timeline">
        
        {/* Marco 1: Formação (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/fotos-eliane/fteliane.png" alt="Dra. Eliane Santiago na PUC/MG" className="timeline-image" />
          <div className="timeline-content">
            <h3>Formada em Direito pela PUC/MG 1993</h3>
            <p>Pós-graduada em Direito Processual Civil</p>
            <p>Pós-graduada em Direito Desportivo</p>
            <p>Pós-graduanda em Direito Eleitoral</p>
          </div>
        </div>

        {/* Marco 2: Pessoal (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/filhos.png" alt="Família" className="timeline-image" />
          <div className="timeline-content">
            <h3>Família</h3>
            <p>Mãe de Fernanda e Lucas</p>
          </div>
        </div>

        {/* Marco 3: Profissional OAB (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/oab.png" alt="OAB Ribeirão das Neves" className="timeline-image" />
          <div className="timeline-content">
            <h3>Presidente da OAB Ribeirão das Neves</h3>
            <p>Gestão entre os anos de 2013 e 2018<br/>uma das fundadoras da sede OAB em Ribeirão das Neves</p>
          </div>
        </div>

        {/* Marco 4: Reconhecimento (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/certificadooab.png" alt="Certificação Digital" className="timeline-image" />
          <div className="timeline-content">
            <h3>Reconhecimento Estadual</h3>
            <p>2015 - Certificação pela contribuição na entrega de 200.000 certificados digitais para os advogados de Minas Gerais</p>
          </div>
        </div>

        {/* Marco 5: Reconhecimento (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/cidadania.png" alt="Cidadania Honorária" className="timeline-image" />
          <div className="timeline-content">
            <h3>Cidadania Honorária</h3>
            <p>2018 - Título de Cidadania Honorária de Ribeirão das Neves</p>
          </div>
        </div>

        {/* Marco 6: TJD (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/deesportiva.png" alt="Auditora do TJD" className="timeline-image" />
          <div className="timeline-content">
            <h3>Auditora do TJD</h3>
            <p>Auditora e Ex-presidente do Tribunal de Justiça Desportiva (2003)</p>
          </div>
        </div>

        {/* Marco 7: MOCOMP (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/mocomp.png" alt="Vice-presidente MOCOMP" className="timeline-image" />
          <div className="timeline-content">
            <h3>Vice-presidente do MOCOMP</h3>
            <p>Atuação como Vice-presidente no ano de 2025</p>
          </div>
        </div>

        {/* Marco 8: REVIM (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/revim.png" alt="Integração REVIM" className="timeline-image" />
          <div className="timeline-content">
            <h3>REVIM</h3>
            <p>Integrante da REVIM desde 2015</p>
          </div>
        </div>

      </div>
    </div>
  );
}