import HeroSection from '../components/HeroSection';
import SobreSection from '../components/SobreSection';
import EscritorioSection from '../components/EscritorioSection';
import ContatoSection from '../components/ContatoSection';

export default function Home() {
  return (
    <main>
      {/* Cada componente aqui representa uma "dobra" do seu site */}
      
      {/* Seção de Impacto Inicial */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Seção Sobre a Dra. Eliane */}
      <section id="sobre">
        <SobreSection />
      </section>

      {/* Seção sobre a Infraestrutura e Especialidades */}
      <section id="escritorio">
        <EscritorioSection />
      </section>

      {/* Seção final com Formulário e Mapa */}
      <section id="contato">
        <ContatoSection />
      </section>
    </main>
  );
}