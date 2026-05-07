"use client";

import { useState } from 'react';

// Dados baseados no conteúdo original do acervo
const itensAcervo = [
  {
    id: 1,
    titulo: "Tendências em Direito Empresarial 2024",
    categoria: "Artigos",
    descricao: "Análise das principais transformações no direito empresarial e adaptações às novas regulamentações.",
    data: "Janeiro de 2024",
    link: "#",
    tipo: "Ler Artigo"
  },
  {
    id: 2,
    titulo: "Resolução de Conflitos Comerciais",
    categoria: "Publicações",
    descricao: "Estratégias modernas de resolução de conflitos publicadas em revista jurídica especializada.",
    data: "Outubro de 2023",
    link: "/acervo/documento de teste.pdf", // Exemplo usando seu arquivo existente
    tipo: "Baixar PDF",
    download: true
  },
  {
    id: 3,
    titulo: "Case: Reestruturação Societária",
    categoria: "Cases",
    descricao: "Otimização da governança e redução de riscos legais em uma reestruturação estratégica.",
    data: "2023",
    link: "#",
    tipo: "Ver Detalhes",
    nota: "*Respeitando a confidencialidade e o código de ética da OAB"
  },
  // Adicione aqui os outros itens do seu arquivo HTML original
];

export default function AcervoPage() {
  const [filtro, setFiltro] = useState("Todos");

  const categorias = ["Todos", "Artigos", "Publicações", "Cases"];

  const itensFiltrados = filtro === "Todos" 
    ? itensAcervo 
    : itensAcervo.filter(item => item.categoria === filtro);

  return (
    <main className="acervo-page">
      {/* Banner da Página */}
      <section className="page-banner" style={{ backgroundColor: 'var(--whiteice)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="font-dupincel" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Acervo</h1>
          <p style={{ color: 'var(--gray)' }}>Artigos, publicações e cases de sucesso da Dra. Eliane Santiago</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="filter-section" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {categorias.map(cat => (
              <button 
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`filter-btn ${filtro === cat ? 'active' : ''}`}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: '1px solid var(--yellow)',
                  backgroundColor: filtro === cat ? 'var(--yellow)' : 'transparent',
                  color: filtro === cat ? 'var(--black)' : 'var(--gray)',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  transition: '0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de Conteúdo */}
      <section className="archive-content" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="archive-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {itensFiltrados.map(item => (
              <article key={item.id} className="archive-item" style={{
                padding: '2rem',
                border: '1px solid #eee',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--yellow)', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {item.categoria}
                  </span>
                  <h3 className="font-dupincel" style={{ margin: '1rem 0' }}>{item.titulo}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1rem' }}>{item.descricao}</p>
                  {item.nota && <p style={{ fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem' }}>{item.nota}</p>}
                </div>
                
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1rem' }}>{item.data}</p>
                  <a 
                    href={item.link} 
                    download={item.download}
                    className="btn-link"
                    style={{
                      display: 'inline-block',
                      padding: '0.6rem 1.2rem',
                      backgroundColor: 'var(--black)',
                      color: 'var(--whiteice)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      borderRadius: '4px',
                      textAlign: 'center'
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
    </main>
  );
}