import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--black)', color: 'var(--whiteice)', padding: '2rem 0', marginTop: '4rem' }}>
      <div className="container footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        
        <div className="footer-section">
          <h4 style={{ color: 'var(--yellow)', marginBottom: '1rem' }} className="font-dupincel">Dra. Eliane Santiago</h4>
          <p>Advocacia de Excelência</p>
        </div>

        <div className="footer-section">
          <h4 style={{ color: 'var(--yellow)', marginBottom: '1rem' }}>Páginas</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/#inicio" style={{ color: 'var(--whiteice)', textDecoration: 'none' }}>Início</Link></li>
            <li><Link href="/#sobre" style={{ color: 'var(--whiteice)', textDecoration: 'none' }}>Sobre</Link></li>
            <li><Link href="/#escritorio" style={{ color: 'var(--whiteice)', textDecoration: 'none' }}>Escritório</Link></li>
            <li><Link href="/acervo" style={{ color: 'var(--whiteice)', textDecoration: 'none' }}>Acervo</Link></li>
            <li><Link href="/#contato" style={{ color: 'var(--whiteice)', textDecoration: 'none' }}>Contato</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 style={{ color: 'var(--yellow)', marginBottom: '1rem' }}>Contato Rápido</h4>
          <p>Email: contatoelianesantiago@gmail.com</p>
          <p>Telefone: (31) 9 0000-0000</p>
        </div>

      </div>
      
      <div className="footer-bottom" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--gray)' }}>
        <p>&copy; 2026 Dra. Eliane Santiago. Todos os direitos reservados. | OAB/MG XXXXX</p>
      </div>
    </footer>
  );
}