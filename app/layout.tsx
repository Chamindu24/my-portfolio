import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Chamindu Sathsara',
  description: 'Portfolio built with Next.js and Tailwind CSS',
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}