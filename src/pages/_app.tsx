// import '../styles/normalize.css'
// import '../styles/config.css'
// import '../styles/style.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { appWithTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo, NextSeo } from 'next-seo';
import { SocialSide } from '../components/SocialSide';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <DefaultSeo
        titleTemplate='Deusdedit Vilar | %s'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'logo2.ico',
          }
        ]}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: "developer,fullstack,frontend,backend,dev"
          }
        ]}
        openGraph={{
          type: 'website',
          url: 'https://deusdeditv.vercel.app',
          title: 'Deusdedit Vilar | Full-Stack Dev',
          description: "Deusdedit Vilar's Full-Stack dev portfolio.",
          images: [
            {
              url: 'https://deusdeditv.vercel.app/src_1200.png',
              width: 1200,
              height: 630,
              alt: 'Og Image Alt',
            }
          ],
        }}
      />
      <AnimatePresence>
        <Header />
        <SocialSide key={router.locale} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default appWithTranslation(MyApp);
