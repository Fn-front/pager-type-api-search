import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/foundation/reset.css'
import '@/styles/global/global.css'
import { container, main, global_container } from '@/styles/layout/layout.css'

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: 'テンプレ',
  description: 'テンプレ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={noto.className}>
        <div className={global_container}>
          <main className={main}>
            <div className={container}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
