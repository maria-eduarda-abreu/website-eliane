export default function SobreSection() {
  return (
    <div className="container section-padding">
      <h2 className="section-title font-dupincel">Sobre mim</h2>
      
      <div className="timeline">
        {/* Marco 1: Formação (Esquerda) */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Formada em Advocacia</h3>
            <p>Faculdade PUC/MG</p>
          </div>
        </div>

        {/* Marco 2: Pessoal (Direita) */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Família</h3>
            <p>Mãe de Fernanda e Lucas,<br/>Avó de [Inserir Nome]</p>
          </div>
        </div>
      </div>
    </div>
  );
}