// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ScamRx - AI Powered Asset Protection',
  description: 'The most advanced AI Powered asset protection on the planet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">

          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}