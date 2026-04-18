import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'Chamindu Sathsara',
  description: 'Portfolio built with Next.js and Tailwind CSS',
  icons: {
    icon: '/mylogo.png',
    shortcut: '/mylogo.png',
    apple: '/mylogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body suppressHydrationWarning>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}