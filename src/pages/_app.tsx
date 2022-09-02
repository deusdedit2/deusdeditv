// import '../styles/normalize.css'
// import '../styles/config.css'
// import '../styles/style.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { appWithTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <AnimatePresence>
        <Header />
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </>
  )
}

export default appWithTranslation(MyApp);
