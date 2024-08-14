import Fonts from '@/components/Fonts';
import ThemeProviderWrapper from '@/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TradeSee Dashboard - UI/UX Test',
  description:
    'Criar uma dashboard com uma interface de usuário criativa e intuitiva, utilizando JavaScript e frameworks modernos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <head>
        <Fonts />
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
