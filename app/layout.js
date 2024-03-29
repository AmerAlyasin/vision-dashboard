import { Inter } from 'next/font/google'
import './ui/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amer Alyasin',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </html>
  );
}
