import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewGanger | The home of global information',
  icons: {icon: '/img/newslogo.png'},
  description: 'News Ganger is a platform for world news. These inludes sports, politics, business, technology ....',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
