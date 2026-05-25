"use client";

import { useState } from 'react';

// Dados ajustados para corresponder exatamente aos botões de filtro (Plural)
const itensAcervo = [
  {
    id: 1,
    titulo: "Branquitude e Racismo na Ciência e na Educação em Ciências - Flavia Rezende, e Fernanda Ostermann",
    categoria: "Artigos", // Corrigido de "Artigo" para "Artigos" para funcionar o filtro
    descricao: "Neste artigo, elegemos reflexões sobre os conceitos de branquitude e racismo e sobre o racismo na ciência e na educação em ciências.",
    data: "18 de julho de 2025",
    link: "/acervo/BranquitudeRacismo.pdf",
    tipo: "Baixar PDF",
    download: true,
  },
  {
    id: 2,
    titulo: "Como garantir a proteção de meninas e mulheres?",
    categoria: "Publicações",
    descricao: "Direito À vida segura e acesso à justiça.",
    data: "Outubro de 2021",
    link: "/acervo/direitomulher.pdf",
    tipo: "Baixar PDF",
    download: true
  },
  {
    id: 3,
    titulo: "Proteção e Promoção Social de Pessoas com Deficiência no Brasil",
    categoria: "Cases",
    descricao: "uma abordagem a partir de indicadores sociais e relatos de casos.",
    data: "2023",
    link: "/acervo/pcd.pdf",
    tipo: "Baixar PDF",
    download: true,
    nota: "*Respeitando a confidencialidade e o código de ética da OAB"
  },
];

export default function AcervoPage() {
  const [filtro, setFiltro] = useState("Todos");

  const categorias = ["Todos", "Artigos", "Publicações", "Cases"];

  const itensFiltrados = filtro === "Todos"
    ? itensAcervo
    : itensAcervo.filter(item => item.categoria === filtro);

  return (
    <main className="acervo-page">

      {/* =======================================================
          1. BANNER COM FOTO DE FUNDO (Conectado com as classes do CSS)
          ======================================================= */}
      <div className="acervo-banner">
        <div className="acervo-banner-overlay"></div>

        <div className="container acervo-banner-container">
          <h1 className="acervo-title font-dupincel">Acervo</h1>
          <p className="acervo-subtitle font-aileron-light">
            Artigos, publicações e casos de sucesso
          </p>
        </div>
      </div>

      {/* =======================================================
          2. SEÇÃO DE FILTROS 
          ======================================================= */}
      <section className="filter-section" style={{ padding: '3rem 0 1rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`filter-btn ${filtro === cat ? 'active' : ''}`}
                style={{
                  padding: '0.6rem 1.8rem',
                  border: '2px solid var(--yellow)',
                  backgroundColor: filtro === cat ? 'var(--yellow)' : 'transparent',
                  color: filtro === cat ? 'var(--black)' : 'var(--gray)',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          3. SEÇÃO DOS CARDS / GRADE DE CONTEÚDO
          ======================================================= */}
      <section className="archive-content" style={{ padding: '3rem 0 6rem 0' }}>
        <div className="container">
          <div className="archive-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {itensFiltrados.map(item => (
              <article key={item.id} className="archive-item" style={{
                padding: '2.5rem 2rem',
                border: 'none',
                backgroundColor: 'var(--whiteice)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', /* <-- O ERRO ESTAVA AQUI */
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--yellow)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.categoria}
                  </span>
                  <h3 className="font-dupincel" style={{ margin: '0.8rem 0', fontSize: '1.4rem', lineHeight: '1.3', color: 'var(--black)' }}>
                    {item.titulo}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--gray)', lineHeight: '1.6', marginBottom: '1.5rem', fontFamily: 'Aileron-Light, sans-serif' }}>
                    {item.descricao}
                  </p>
                  {item.nota && (
                    <p style={{ fontSize: '0.75rem', color: '#888', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                      {item.nota}
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ fontSize: '0.8rem', color: '#aaa', margin: '0' }}>{item.data}</p>
                  <a
                    href={item.link}
                    download={item.download}
                    className="btn-submit"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      textAlign: 'center',
                      margin: '0'
                    }}
                  >
                    {item.tipo}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main >
  );
}