import Fonts from '@/components/Fonts';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
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
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
