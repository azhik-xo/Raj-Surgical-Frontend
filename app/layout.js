import { Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
// import { Inter } from 'next/font/google';

// const inter = Inter({
//   subsets: ['italin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
// })

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'RAJ SURGICAL',
  description: 'Surgical Products Wholeseller',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className} >
      <body>{children}</body>
    </html>
  );
}
