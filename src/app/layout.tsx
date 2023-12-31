import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'URL shortener',
   description: 'Website in charge of generating shortened urls'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={inter.className}>{children}</body>
      </html>
   );
}
