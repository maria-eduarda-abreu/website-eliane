export default function SobreSection() {
  return (
    <div className="container section-padding">
      <h2 className="section-title font-dupincel">Sobre mim</h2>

      <div className="timeline">
        
        {/* Marco 1: Formação (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/fotos-eliane/forum.png" alt="Dra. Eliane Santiago na PUC/MG" className="timeline-image" />
          <div className="timeline-content">
            <h3>Formação e Especialização</h3>
            <p>- Graduada em Direito pela PUC/MG</p>
            <p>- Pós-graduada em Direito Processual Civil</p>
            <p>- Pós-graduada em Direito Desportivo</p>
            <p>- Pós-graduanda em Direito Eleitoral</p>
          </div>
        </div>

        {/* Marco 2: Pessoal (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/oab.png" alt="Família" className="timeline-image" />
          <div className="timeline-content">
            <h3>Fundadora e Presidente da OAB (Ribeirão das Neves)</h3>
            <p>Junto de mais 4 amigos instalamos a sede da OAB em Ribeirão das Neves. Pude ter a honrra de liderar como presidente da subseção OAB Ribeirão das Neves por dois mandatos, entre 2013 e 2018, realizando uma gestão focada na valorização da classe, defesa das prerrogativas dos advogados e aproximação com a sociedade.</p>
          </div>
        </div>

        {/* Marco 3: Profissional OAB (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/certificadooab.png" alt="OAB Ribeirão das Neves" className="timeline-image" />
          <div className="timeline-content">
            <h3>Reconhecimento Estadual (2015)</h3>
            <p>Recebi um certificado por minha contribuição e trabalho árduo na entrega de mais de 200.000 certificados digitais aos advogados de todo o estado de Minas Gerais.</p>
          </div>
        </div>

        {/* Marco 4: Reconhecimento (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/cidadania.png" alt="Cidadania Honorária" className="timeline-image" />
          <div className="timeline-content">
            <h3>Cidadania Honorária (2018)</h3>
            <p>Fui agraciada com o Título de Cidadania Honorária de Ribeirão das Neves, um reconhecimento público referente aos serviços prestados ao município e à população ao longo da minha trajetória.</p>
          </div>
        </div>

        {/* Marco 5: Reconhecimento (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/deesportiva.png" alt="Cidadania Honorária" className="timeline-image" />
          <div className="timeline-content">
            <h3>Auditora do TJD</h3>
            <p>Possui forte atuação na área desportiva, tendo sido Auditora e Ex-presidente do Tribunal de Justiça Desportiva (TJD), zelando pela ética e cumprimento das regras do esporte.</p>
          </div>
        </div>

        {/* Marco 6: MOCOMP (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/mocomp.png" alt="Vice-presidente MOCOMP" className="timeline-image" />
          <div className="timeline-content">
            <h3>Vice-presidente do MOCOMP</h3>
            <p>Atuação como Vice-presidente no ano de 2025 -  - associação de moradores do bairro Nova Pampulha aonde implemento ações para trazer melhorias para a região;</p>
          </div>
        </div>

        {/* Marco 7: revim (Esquerda) */}
        <div className="timeline-item left">
          <img src="/img/sobre/revim.png" alt="Integração REVIM" className="timeline-image" />
          <div className="timeline-content">
            <h3>REVIM</h3>
            <p>Integrante da REVIM desde 2015. O ativismo político me levou a ser membro da rede de enfrentamento contra a violência a mulher- REVIM (rede de enfrentamento contra a violência doméstica) de neves, onde lutamos ativamente no combate a violência contra mulheres.</p>
          </div>
        </div>
        {/* Marco 8: familia (Direita) */}
        <div className="timeline-item right">
          <img src="/img/sobre/filhos.png" alt="Família" className="timeline-image" />
          <div className="timeline-content">
            <h3>Minha Base: A Família</h3>
            <p>A força por trás da profissão. Mãe orgulhosa de Fernanda e Lucas, e avó coruja de Valentina, Júlia e Davi. É neles que encontra a inspiração diária para lutar pelo direito das famílias.</p>
          </div>
        </div>

      </div>
    </div>
  );
}