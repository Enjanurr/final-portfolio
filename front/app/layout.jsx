import { Outfit } from 'next/font/google';
import './globals.css';
//
//components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* layout html */}
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/*The header and the footer don't change even if the section is change that's why is here */}
          <Header /> {/*From the header.jsx */}

          {children} {/* The children is in the page.jsx  */}
          
          <Footer /> {/* From the footer.jsx */}
        </ThemeProvider>
      </body>
    </html>
  );
}