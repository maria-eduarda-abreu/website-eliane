import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Dra. Eliane Santiago - Advocacia Jurídica',
  description: 'Advocacia de Excelência e Confiança. Especialista em Direito Empresarial, Contratual e Consultoria Jurídica.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {/* O conteúdo das páginas (como a Home ou o Acervo) será renderizado aqui */}
        {children}
        <Footer />
      </body>
    </html>
  );
}