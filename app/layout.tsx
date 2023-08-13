import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from './Components/Navbar/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Binod Budhathoki',
  description: 'My Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight ">
          {children}
        </main>
      </body>
    </html>
  );
}
