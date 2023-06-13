import '@/styles/globals.css'
import 'styles/background.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import '@fontsource/space-grotesk';

import { Inter } from 'next/font/google'
 
const spaceGrotesk = Inter({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}