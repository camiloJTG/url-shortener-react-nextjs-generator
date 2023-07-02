'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'URL shortener',
   description: 'Website in charge of generating shortened urls'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY_WEB!}>
            <body className={inter.className}>{children}</body>
         </GoogleReCaptchaProvider>
      </html>
   );
}
