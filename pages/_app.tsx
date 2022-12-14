import Head from 'next/head'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// Global style
import '../styles/globals.css'

// Others styles
import color from '../styles/Color.module.css';
import resposive from '../styles/ResponsiveContent.module.css'

// Fonst configuration
import { Quicksand } from '@next/font/google'
const quicksand = Quicksand({
  weight: "300",
  style: "normal",
  subsets: ["latin"]
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={quicksand.className}>
      <Head>
        <title>Diego Dev</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <div className={`${color.green} ${resposive.Footer}`}>
        <Footer />
      </div>
    </main>
  )
}
export default App